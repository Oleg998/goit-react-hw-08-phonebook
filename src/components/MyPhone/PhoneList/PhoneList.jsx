import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filter-slice';
import {
  selectContact,
  selectorRequestStutus,
  selectFilterContact,

} from '../../../redux/contacts/contacts-selectors';
import {
  fetchContacts,
  deleteContacts,
} from '../../../redux/contacts/contacts-operation';
import css from './PhoneList.module.css';
import { toast } from 'react-toastify';

const PhoneList = () => {
  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const status= useSelector(selectorRequestStutus)
  const dispatch = useDispatch();
  const {  error  } = useSelector(selectContact);
  const items = useSelector(selectFilterContact);

  useEffect(() => {
    setSelectedButtonId(null);    
    dispatch(fetchContacts());
  }, [dispatch,selectedButtonId ]);

  useEffect(()=>{
    if (status==="deleteRejected") {toast.error('Contact not deleted')} 
  },[status]);

  useEffect(()=>{
    if(status==="deleteFulfilled"){toast.success("Contact deleted successfully")}
  },[status]);

  const deleteName = id => {
    dispatch(deleteContacts(id));
    setSelectedButtonId(id);
  };

   const handelSearce = ({ target }) => dispatch(setFilter(target.value));

  const elements = items.map(({ id, name, number }) => {
    return (
      <li key={id} className={css.items}>
        {name} :{number}
        <button
          onClick={() => deleteName(id)}
          type="button"
          className={`${css.button} ${
            selectedButtonId === id ? css.selectedButton : ''
          }`}
        >
          {selectedButtonId === id ? 'Loading...' : 'Delete'}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className={css.wrapper}>
        <h2>Contacts</h2>
        <p> Find Cotacts by Name</p>
        <input
          name="filter"
          onChange={handelSearce}
          placeholder="Searce Name"
        ></input>
        <ul className={css.phone_list}>{elements}</ul>
        {!items.length && <h2>No phone in Phonebook</h2>}
        {error && <p className={css.error_mesager}>......{error}......</p>}
      </div>
    </>
  );
};

export default PhoneList;

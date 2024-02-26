import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filter-slice';
import {
  selectContact,
  selectFilterContact,
} from '../../../redux/contacts/contacts-selectors';
import {
  fetchContacts,
  deleteContacts,
} from '../../../redux/contacts/contacts-operation';
import css from './PhoneList.module.css';

const PhoneList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error } = useSelector(selectContact);
  const items = useSelector(selectFilterContact);

  const deleteName = id => {
    dispatch(deleteContacts(id));
  };

  const handelSearce = ({ target }) => dispatch(setFilter(target.value));

  const elements = items.map(({ id, name, number }) => {
    const isDeleting = isLoading && items.some(item => item.id === id);
    console.log(isDeleting);
    return (
      <li key={id} className={css.items}>
        {name} :{number}
        <button
          onClick={() => deleteName(id)}
          type="button"
          className={`${isDeleting ? css.button_loading : css.button} `}
        >
          {isDeleting ? 'Loading...' : 'Delete'}
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
        {error && <p>......{error}......</p>}
      </div>
    </>
  );
};

export default PhoneList;

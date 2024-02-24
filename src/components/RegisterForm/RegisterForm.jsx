import css from './RegisterForm.module.css';
import { useState } from 'react';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { selectAuthError  } from "../../redux/auth/auth-selectors"
import {  useSelector } from 'react-redux';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
  };

const RegiterForm = ({onSubmit}) => {
    const IsError = useSelector(selectAuthError);

    const [state, setState] = useState({ ...INITIAL_STATE });

    const handelChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
        
      };

      const handelSubmit = e => {
        e.preventDefault();
        onSubmit({ ...state });
        if(!IsError){ setState({ ...INITIAL_STATE }) }
        
      };

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);
  const {name , email , password}= state;
  return (
    <form onSubmit={handelSubmit} className={css.form}>
      <h1 className={css.titel}>Form Registration</h1>
      <div>
        <label htmlFor={nameId}>Login</label>
        <input
          value={name}
          onChange={handelChange}
          className={css.input}
          id={nameId}
          type="text"
          name="name"
          required
          placeholder="Enter you name "
        ></input>
      </div>

      <div>
        <label htmlFor={emailId}>Email </label>
        <input
          value={email}
          onChange={handelChange}
          className={css.input}
          id={emailId}
          type="email"
          name="email"
          required
          placeholder="Enter you Email "
        ></input>
      </div>
      <div>
        <label htmlFor={passwordId}>Password </label>
        <input
          value={password}
          onChange={handelChange}
          className={css.input}
          id={passwordId}
          type="password"
          name="password"
          required
          placeholder="Enter you password "
        ></input>
      </div>
      
      <button className={css.btn} type="submit">
        Registration
      </button>
    </form>
  );
};

export default RegiterForm;

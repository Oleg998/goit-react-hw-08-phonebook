import css from "./login-form.module.css"
import { useState } from 'react';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';


const INITIAL_STATE = {
   
    email: '',
    password: '',
  };

const LoginForm = ({onSubmit}) => {

    const [state, setState] = useState({ ...INITIAL_STATE });

    const handelChange = ({ target }) => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
        
      };

      const handelSubmit = e => {
        e.preventDefault();
        onSubmit({ ...state });

        
      };

 
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);
  const { email , password}= state;
  return (
    <form onSubmit={handelSubmit} className={css.form}>
      <h1 className={css.titel}>Form Login</h1>
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;

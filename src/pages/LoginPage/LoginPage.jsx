import LoginForm from "components/LogimForm/LoginForm";
import css from "./login-page.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operation';
import {
  selectAuthError,
  selectAuthIsLoading,
  selectAuthIsLogin,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

import { Navigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useEffect } from 'react';

 const LoginPage = ()=>{
    const isLoading = useSelector(selectAuthIsLoading);
  const isError = useSelector(selectAuthError);
  const isLogin = useSelector(selectAuthIsLogin);
  const dispatch = useDispatch();
  const handLogin = data => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (isLogin) {
      toast.success('Congratulations on your successful Login!');
    }

    if (isError) {
      toast.error('An error has occurred. Check your email');
    }
  }, [isLogin, isError]);


  if (isLogin) {  
    return <Navigate to="/contact" />;
  }
    return (  
    <>
    <LoginForm onSubmit={handLogin}  
    />
    {isError && <h3 className={css.error}>{isError}</h3>}
      {isLoading && <Loader></Loader>};
    </>)
    
 }

 export default LoginPage;
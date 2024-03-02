import RegiterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operation';
import {
  selectAuthError,
  selectAuthIsLoading,
  selectAuthIsLogin,
} from '../../redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';
import css from './register-page.module.css';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const RegisterPage = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  const isError = useSelector(selectAuthError);
  const isLogin = useSelector(selectAuthIsLogin);
  const dispatch = useDispatch();
  const handleSingup = data => {
    dispatch(signup(data));
  };
  useEffect(() => {
    if (isLogin) {
      toast.success('Congratulations on your successful registration!');
    }

    if (isError) {
      toast.error('An error has occurred. Check your email');
    }
  }, [isLogin, isError]);

  return (
    <>
      <RegiterForm onSubmit={handleSingup}></RegiterForm>;
      {isError && <h3 className={css.error}>{isError}</h3>}
      {isLoading && <Loader></Loader>};
    </>
  );
};
export default RegisterPage;

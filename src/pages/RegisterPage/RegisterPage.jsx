import RegiterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operation';
import { selectAuthError , selectAuthIsLoading } from "../../redux/auth/auth-selectors";
import Loader from 'components/Loader/Loader';
import css from "./register-page.module.css"

const RegisterPage = () => {
  const isLoading = useSelector(selectAuthIsLoading)
  const isError= useSelector(selectAuthError)
  const dispatch = useDispatch();
  const handleSingup = data => {
    dispatch(signup(data));
    
  };

  return(
    <>
     <RegiterForm onSubmit={handleSingup}></RegiterForm>;
      {isError && <h3 className={css.error}>{isError}</h3>}
      {isLoading && <Loader></Loader>};
    </>
   
    
  )
};
export default RegisterPage;

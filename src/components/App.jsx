import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const SharedLayout = lazy(() => import("../components/SharedLayout/SharedLayout"));
const RegisterPage =lazy(()=>import ("../pages/RegisterPage/RegisterPage"))
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

export const App = () => {
  return (
    <div>
      <ToastContainer autoClose={5000} />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/registration"  element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

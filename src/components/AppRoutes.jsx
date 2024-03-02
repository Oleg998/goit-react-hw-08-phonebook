import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const SharedLayout = lazy(() => import("../components/SharedLayout/SharedLayout"));
const RegisterPage =lazy(()=>import ("../pages/RegisterPage/RegisterPage"))
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const LoginPage = lazy (()=> import("../pages/LoginPage/LoginPage") );

export const AppRoute = ()=> {
    return (
        <div>
        
  
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="registration"  element={<RegisterPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route element={<PrivateRoute/>}>
            <Route path="contact"  element={<ContactsPage/>}/>
            </Route>
            
          </Route>
        </Routes>
      </div>
    )
}
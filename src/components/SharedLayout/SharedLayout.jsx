import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "components/NavBar/Navbar";
import Loader from "components/Loader/Loader";

const SharedLayout =()=> {
return (
  <>
    <Navbar />
    <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense>
  </>
);
}





export default SharedLayout ;
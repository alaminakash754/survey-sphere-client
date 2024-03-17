import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Components/shared/Navbar";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') 
    return (
        <div>
          {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;
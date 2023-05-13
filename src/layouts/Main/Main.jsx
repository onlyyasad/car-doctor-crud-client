import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer";
import NavBar from "../../pages/shared/Navbar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
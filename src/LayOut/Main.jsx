import {Outlet, useLocation} from "react-router-dom"
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import Navber from "../Pages/Home/Home/Shared/Navber/Navber";
const Main = () => {
    const location=useLocation()
    console.log(location)
    const noHeaderFooter=location.pathname.includes('login')||location.pathname.includes('signup')
    return (
        <div>
            { noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
           {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;
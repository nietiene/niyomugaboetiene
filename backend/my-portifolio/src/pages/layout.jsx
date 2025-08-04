import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

const Layout = () => {
    return (
        <div className="relative">
            <NavBar />
            <div className="pt-10">
                <Outlet />
            </div>
        </div>
    )
}


export default Layout
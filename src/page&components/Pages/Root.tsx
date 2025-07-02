import { Outlet } from "react-router";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";


const Root = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="container my-20 mx-auto px-4 md:px-9  min-h-[calc(100vh-212px)]">
                <Outlet></Outlet>
            </div>
            <div className="bg-base-200 mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;
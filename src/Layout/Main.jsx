import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import './Main.css';
import { useEffect, useState } from "react";

const Main = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
        {isVisible ? <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-grow text-danger h-16 w-16 border-t-2 border-blue-500" role="status"></div>
            <div className="spinner-grow text-warning h-16 w-16 mx-2 border-t-2 border-blue-500" role="status"></div>
            <div className="spinner-grow text-info h-16 w-16 border-t-2 border-blue-500" role="status"></div>
            </div> : <div>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
            </div> }
        </div>
    );
};

export default Main;
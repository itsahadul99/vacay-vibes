import { Outlet } from "react-router-dom";
import Navbar from "../components/sheyard/Navbar";
import Footer from "../components/sheyard/Footer";

const MainLayout = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
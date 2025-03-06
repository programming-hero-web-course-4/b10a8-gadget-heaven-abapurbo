import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='h-20 z-50'>
                <Navbar></Navbar>
            </div>

            {/* dynamic page render */}
            <div className="min-h-[calc(100vh-300px)]">
                {
                    navigate.state === 'loading' ?<p className="text-2xl font-bold ">Loading...</p>:<Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
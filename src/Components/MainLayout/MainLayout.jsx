import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const MainLayout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    return (
        <div className="" >
            {
                location.pathname === '/' || location.pathname==='/differentCategory/Laptop'|| location.pathname==='/differentCategory/Smartphone'|| location.pathname==='/differentCategory/Smartphone'||location.pathname==='/differentCategory/Smartphone'||location.pathname==='/differentCategory/Headphone'||location.pathname==='/differentCategory/Smartwatch' || location.pathname==='/differentCategory/allProducts' || location.pathname==='/differentCategory/Chargers'  ? <div className='bg-[#9538E2] h-[600px] mt-5 mx-9  rounded-2xl text-white '><Navbar></Navbar><Banner></Banner> </div> : <div><Navbar></Navbar></div>
            }


            {/* dynamic page render */}
            <div className="min-h-[calc(100vh-300px)]">
                {
                    navigate.state === 'loading' ? <p className="text-2xl font-bold ">Loading...</p> : <Outlet ></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
import PageLinks from "./PageLinks";
import { TiShoppingCart } from "react-icons/ti";
import { IoHeartOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <nav className=" flex justify-between items-center px-12  z-50 fixed w-full">
                <div>
                    <h1 className="text-3xl font-semibold">Gadget Heaven</h1>
                </div>
                <div className="mt-9">
                    {
                        <PageLinks></PageLinks>
                    }
                </div>
                <div className="flex space-x-2 ">
                    <TiShoppingCart className="border-2  border-gray-200 text-4xl p-1 rounded-4xl " />
                    <IoHeartOutline className="border-2  border-gray-200 text-4xl p-1 rounded-4xl " />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
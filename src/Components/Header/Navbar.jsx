import PageLinks from "./PageLinks";
import { TiShoppingCart } from "react-icons/ti";
import { IoHeartOutline } from "react-icons/io5";
import { useContext } from "react";
import { StorageDataContext } from "../heardAndAddCardContext/AddCardProvider";
// import { getShoppingCard } from "../../Utility/Shoppingcard";


const Navbar = () => {

    const shoppingCardContext = useContext(StorageDataContext)

    const { shoppingCard, heard} = shoppingCardContext
    const shoppoingIcon = () => {
        if (shoppingCard == 0) {
      
            return null
        }
        else {
        
            return shoppingCard;
        }
    }
    const heardIcon = () => {
        if (heard == 0) {
            return null
        }
        else {
            return heard
        }
    }

    return (
        <div>
            <nav className=" flex justify-between items-center px-12   ">
                <div>
                    <h1 className="text-3xl font-semibold">Gadget Heaven</h1>
                </div>
                <div className="mt-9">
                    {
                        <PageLinks></PageLinks>
                    }
                </div>
                <div className="flex space-x-2 ">
                    <span className=" relative">
                        <p className={`absolute w-5 h-5  rounded-3xl text-center font-semibold text-[#9538E2] ${location.pathname == '/' && shoppingCard>0 ? 'bg-white' :' '} -right-1 -top-1.5 `}>{
                            shoppoingIcon()
                        }</p>
                        <TiShoppingCart className="hover:border-2  border-gray-200 text-4xl p-1 rounded-4xl " />
                    </span>

                    <span className=" relative">
                        <p className={`absolute font-semibold text-[#9538E2] ${location.pathname == '/' && heard>0 ? 'bg-white' :' '}  w-5 h-5 text-center rounded-4xl -right-1 -top-1.5`}>{heardIcon()}</p>
                        <IoHeartOutline className="hover:border-2  border-gray-200 text-4xl p-1 rounded-4xl " />
                    </span>


                </div>
            </nav>
        </div>
    );
};

export default Navbar;
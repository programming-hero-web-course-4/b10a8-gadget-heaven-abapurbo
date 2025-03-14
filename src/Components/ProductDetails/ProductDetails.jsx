import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { addCardLocalStorage, getAddToLocalStorage } from "../../Utility/AddToCardLocalStorage";
// import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {  useContext, useEffect, useState } from "react";
import { getHeardCardAdd, storageAddCard } from "../../Utility/HeartToCard";
import { StorageDataContext } from "../heardAndAddCardContext/AddCardProvider";


const ProductDetails = () => {
    const localData=useContext(StorageDataContext);
    const {handleIncrement,handleHeardIconIncrement}=localData
    const { id } = useParams()

    const detailsData = useLoaderData()
    const [search, setSearch] = useState([]);
    useEffect(() => {
        const check = [...detailsData].find(data => data.product_id === parseInt(id))
        setSearch(check)
    }, [detailsData, id])
    const remainingDetails = detailsData.find(detailsId => detailsId.product_id === parseInt(id))
    const { product_title, product_image, rating, price, specification } = remainingDetails;
    //add to card successful and reply top position toast popup
    const notify = () => toast.success("Successful your product add", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const wishCard = () => toast.success("Successful your heard card add in wishlist", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    // second time add then popup error
    const error = () => toast.error('Already your product exit!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    })
    const heardCardError = () => toast.error('Already your heard card exit!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    })

    const handleLocalStorage = cardId => {
       
        const checkId = getAddToLocalStorage()
        const remainingLocalCard = checkId.find(Id => Id === parseInt(cardId))
        if (remainingLocalCard) {
            error()
        }
        else {
           
            handleIncrement(search.product_id)
            notify()
            addCardLocalStorage(cardId)
        }
    }
    // add localstorageheard card
    const handleAddHeard = Id => {
       
        const localHeardCard = getHeardCardAdd();

        const checkHeardCard = localHeardCard.find(localId => localId == Id);

        if (checkHeardCard) {
            heardCardError()
            console.log(checkHeardCard)
        }
        else {
            handleHeardIconIncrement(Id)
            wishCard()
            storageAddCard(Id)
        }

    }

    return (
        <div className="h-[700px] mb-56 relative ">

            <div className="bg-[#9538E2] h-[450px] relative flex flex-col items-center text-white py-10">
                <h1 className="text-4xl font-bold text-center">Product Details</h1>
                <p className="text-xl font-thin mx-52 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className=" w-[1050px] absolute flex space-x-4 p-6 bg-white rounded-2xl  top-[200px]">

                    <div className="w-[350px]  flex-col rounded-2xl  bg-gray-200 flex items-center ">
                        <img className="object-cover mix-blend-multiply my-auto  bg-cover bg-center  " src={product_image} alt={product_title} />
                    </div>
                    <div className="text-black space-y-3">
                        <h1 className=" flex flex-col ">
                            <span className="text-2xl font-semibold">{product_title}</span>
                            <span className="text-xl  font-semibold">Price:$ {price}</span>

                        </h1>
                        <button className=" rounded-3xl border-1 px-3 font-semibold text-green-400 bg-green-100 py-1 border-green-400">In Stock</button>
                        <p className="text-[18px] text-gray-400 font-semibold">Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display</p>
                        <div>
                            <h1 className="text-xl font-bold ">Specification:</h1>
                            <ul className="space-y-1 pl-1 font-semibold text-gray-500">
                                {
                                    specification.map((cofig, index) => <li key={index}>{1 + index}. {cofig}</li>)
                                }

                            </ul>
                        </div>
                        <h1 className="flex items-center text-xl font-bold">Rating <FaRegStar className="text-orange-400 text-[16px]" /> </h1>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />

                        </div>

                        <button className=" bg-gray-200 ml-2 px-3 font-semibold text-gray-400 py-1 rounded-xl">{rating}</button>
                        <div className=" flex items-center space-x-3 ">
                            <button onClick={() => {
                                handleLocalStorage(search.product_id)
                                
                            }
                            } className="btn bg-[#9538E2] rounded-2xl text-white font-semibold text-xl">Add to cart <TiShoppingCart /></button>
                            <CiHeart onClick={() => handleAddHeard(search.product_id)} className="text-4xl p-1 border-1 border-gray-400 rounded-2xl" />
                        </div>


                    </div>
                </div>
            </div>
            <div className="bg-gray-200  h-[400px]">

            </div>
            <ToastContainer />
        </div>

    );
};

export default ProductDetails;
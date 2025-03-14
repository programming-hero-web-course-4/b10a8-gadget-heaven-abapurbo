import React, { useContext } from 'react';
import { IoTrashBinOutline } from "react-icons/io5";
import { StorageDataContext } from '../../heardAndAddCardContext/AddCardProvider';
const Cart = ({ active, cart, handleRemoveProduct, handleHeardRemoveCard }) => {
    const { product_title, product_id, product_image, description, price } = cart
    const shopeControl = useContext(StorageDataContext)
    const { handleDecrement } = shopeControl
    const heardContext = useContext(StorageDataContext);
    const { handleHeardIconDecrement } = heardContext;

    return (
        <div>
            <div className='border-2 rounded-2xl border-gray-400 p-2 space-x-3.5 flex '>
                <div className='bg-gray-300 w-32 rounded-xl flex flex-col items-center p-2'>
                    <img className='w-20 h-24 mix-blend-multiply ' src={product_image} alt={product_title} />
                </div>
                <div className='space-y-2 w-[900px] '>
                    <h1 className='text-2xl font-semibold'>{product_title}</h1>
                    <p className='text-xl text-gray-400 text-semibold'>{description}</p>
                    <span className='text-xl font-semibold '>Price:${price}</span>
                </div>
                <div className=' flex items-center ml-10' >
                    <IoTrashBinOutline onClick={() => {
                        active ? handleRemoveProduct(product_id) : handleHeardRemoveCard(product_id)
                        active ? handleDecrement(product_id) : handleHeardIconDecrement(product_id)

                    }
                    } className='mr- cursor-pointer text-red-600 text-xl' />
                </div>

            </div>
        </div>
    );
};

export default Cart;
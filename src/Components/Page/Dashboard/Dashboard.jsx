import React, { createContext, useState } from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
export const CardContext = createContext([])
import './cartlink.css'
import Carts from './Carts';
import Wishlist from './Wishlist'
import { StorageDataContext } from '../../heardAndAddCardContext/AddCardProvider';
const Dashboard = () => {
    const data = useLoaderData()
    const [isActive, setIsActive] = useState({
        cart: true,
        status: 'isActive'
    })
   console.log(isActive.cart)
    const handleIsActive = status => {
        console.log(status)
        if (status == 'cart') {
            setIsActive({
                cart: true,
                status: 'isActive'
            });

        }
        else {
            setIsActive({
                cart: false,
                status: 'isActive'
            })
        }
    }
  
    return (
        <div>
            <div className='flex flex-col items-center bg-[#9538E2] h-[200px] py-5 space-y-3 text-white'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p className='text-xl font-thin mx-62 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className='flex space-x-3'>
                    <button onClick={() => handleIsActive('cart')} className={`w-38 border-2 px-2 py-2 text-2xl font-semibold rounded-3xl ${isActive.cart?'isActive':'noActive'}`}>Cart</button>
                    <button onClick={() => handleIsActive('wishlist')} className={`w-38 border-2 px-2 py-2 text-2xl font-semibold rounded-3xl ${isActive.cart?'noActive':'isActive'}`}>Wishlist</button>
                </div>

            </div>
            <div>
                <CardContext.Provider value={data} >
                    {
                        isActive.cart ? <Carts active={isActive.cart}></Carts>:<Wishlist active={isActive.cart}></Wishlist>
                  }
                 
                </CardContext.Provider>

            </div>
            <DynamicTitle title='Dashboard page'></DynamicTitle>
        </div>

    );
};

export default Dashboard;
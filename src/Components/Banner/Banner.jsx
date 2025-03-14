import React from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from '../Page/Dashboard/Dashboard';

const Banner = () => {
    const location = useLocation()
    return (
        <div>
            <div className='flex justify-center flex-col items-center text-center space-y-3 mx-46'>
                <h1 className='text-5xl font-semibold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-center text-xl font-thin'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='btn text-xl font-bold p-6 rounded-3xl'>Shop Now</button>
            </div>
            {/* dynamic banner rendaring */}
            <div className='mx-36 mt-9 p-4 border-2 rounded-3xl backdrop-blur-3xl'>
                {
                    location.pathname === '/dashboard' ? <Dashboard></Dashboard> : <div className="bg-[url('/banner.jpg')] h-[460px] bg-cover bg-center object-center rounded-3xl">

                    </div>
                }
            
            </div>

        </div>
    );
};

export default Banner;
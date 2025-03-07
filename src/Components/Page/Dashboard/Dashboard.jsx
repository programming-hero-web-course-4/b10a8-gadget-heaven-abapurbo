import React from 'react';


const Dashboard = () => {
    return (
        <div>
            <div className='flex flex-col items-center bg-[#9538E2] h-[200px] py-5 space-y-3 text-white'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p className='text-xl font-thin mx-62 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className='flex space-x-3'>
                    <button className='btn rounded-3xl text-xl p-6 btn-outline '>Cart</button>
                    <button className='btn rounded-3xl text-xl p-6 btn-outline '>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
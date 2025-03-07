import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const products=useLoaderData()
    console.log(products)
    return (
        <div className='mt-[290px] mx-16 flex space-x-3'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div >

            </div>
        </div>
    );
};

export default Home;


import { Outlet, useLoaderData, Link, useLocation } from 'react-router-dom';
import Product from '../Page/Products/Product'
import DynamicTitle from './../DynamicTitle/DynamicTitle';

const Home = () => {
    const products = useLoaderData()
    const location = useLocation()
    return (

       
            <div className='mt-[290px]  mx-16  space-y-5 mb-24 '>
                <DynamicTitle title={'Gadget Heaven | Home'}/>
                <h1 className='text-center text-3xl font-semibold '>Explore Cutting-Edge Gadgets</h1>
                <div className='flex space-x-7'>
                    <div>
                        <div className='bg-white space-y-4 py-5 rounded-2xl justify-center items-center w-[200px] shadow-2xl flex flex-col text-xl '>
                            <Link to={`/differentCategory/${'allProducts'}`} className='btn w-36  bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>All Products</Link>
                            <Link to={`/differentCategory/${'Laptop'}`} className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Laptops</Link>
                            <Link to={`/differentCategory/${'Smartphone'}`} className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Phones</Link>
                            <Link to={`/differentCategory/${'Headphone'}`} className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Accessories</Link>
                            <Link to={`/differentCategory/${'Smartwatch'}`} className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Smart Watches</Link>
                            <Link to={`/differentCategory/${'Chargers'}`} className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Chargers</Link>

                        </div>
                    </div>
                    <div className={`${location.pathname === '/' ? 'grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' : ''}`}>
                        {
                            location.pathname === '/' ? [...products.slice(0, 5)].map((product, index) => <Product key={index} product={product}></Product>) : <Outlet></Outlet>
                        }
                    </div>

                </div >


            </div >
        
    );
};

export default Home;
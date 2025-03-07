import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {

    return (
        <div>
            <div className='bg-white space-y-4 py-5 rounded-2xl justify-center items-center w-[200px] shadow-2xl flex flex-col text-xl '>
                <NavLink to='' className={({isActive})=>`${isActive?'active':''}  btn w-36  bg-gray-100 text-gray-500 rounded-3xl text-[15px]`}>All Products</NavLink>
                <Link to='' className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Laptops</Link>
                <Link to='' className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Phones</Link>
                <Link to='' className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Accessories</Link>
                <Link to='' className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Smart Watches</Link>
                <Link to='' className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>MacBook</Link>
                <Link to='' className='btn w-36 bg-gray-100 text-gray-500 rounded-3xl text-[15px]'>Iphone</Link>
            </div>

        </div>
    );
};

export default Sidebar;
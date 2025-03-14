import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
 const {product_id,product_image,product_title,price}=product
 

    return (
       
        <div className=' bg-white  shadow-2xl p-6 rounded-xl space-y-3 transition hover:scale-95'>
            <div className=' flex justify-center  bg-gray-100 rounded-xl'>
                <img className=' mix-blend-multiply h-46 p-3 w-46 bg-cover bg-center object-center' src={product_image} alt={product_title} />
            </div>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-xl font-semibold'>{product_title}</h1>
                 <span className='text-[18px] text-gray-500 font-semibold'>Price:${price}k</span>
                 <Link to={`/productDetails/${product_id}`} ><button className='btn btn-outline border-2 border-b-fuchsia-300 font-bold text-purple-500 rounded-3xl'>Show Details</button></Link>
             
            </div>
        </div>
       
    );
};

export default Product;
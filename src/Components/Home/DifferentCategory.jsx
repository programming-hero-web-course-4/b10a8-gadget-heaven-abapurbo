import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from '../Page/Products/Product';

const DifferentCategory = () => {
    const data = useLoaderData()
    const { categoryName } = useParams()

    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (categoryName === 'allProducts') {
            setProducts(data)
        }
        else if (categoryName === 'Laptop') {
            const productsReaming = [...data].filter(data => data.category == categoryName);
            if (productsReaming) {
                setProducts(productsReaming)
            }

        }
        else if (categoryName === 'Smartphone') {
            const productsReaming = [...data].filter(data => data.category == categoryName);
            if (productsReaming) {
                setProducts(productsReaming)
            }
        }
        else if (categoryName === 'Headphone') {
            const productsReaming = [...data].filter(data => data.category == categoryName);
            if (productsReaming) {
                setProducts(productsReaming)
            }
        }
        else if (categoryName === 'Smartwatch') {
            const productsReaming = [...data].filter(data => data.category == categoryName);
            if (productsReaming) {
                setProducts(productsReaming)
            }
        }
        else if (categoryName === 'Chargers') {
            const productsReaming = [...data].filter(data => data.category == categoryName);
            setProducts(productsReaming)
        }
    }, [categoryName, data])

    return (
        <div>

            {
                products.length == 0 ? <div className='text-4xl font-bold flex flex-col  relative items-center  h-[400px]  w-[700px]'><h1 className='absolute top-[150px]'>Not Found</h1></div> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
                    {
                        products.map((product, index) => <Product key={index} product={product}></Product>)
                    }
                </div>
            }
        </div>
    );
};

export default DifferentCategory;
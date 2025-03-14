import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-50 pt-6'>
            <div className='my-5 mx-18 space-y-3 '>
                <h1 className='text-3xl font-semibold  text-center  '>Gadget Heaven</h1>
                <p className='  font-semibold text-center'>Leading the way in cutting-edge technology and innovation.</p>
                <div className="divider"></div>
            </div>

            <footer className=" flex justify-evenly pb-10">
                <nav className='flex flex-col justify-center text-center space-y-2'>
                    <h6 className=" text-xl text-black font-semibold mb-3">Services</h6>
                    <a className="link link-hover  text-gray-400 font-semibold">Product Support</a>
                    <a className="link link-hover  text-gray-400 font-semibold">Order Tracking</a>
                    <a className="link link-hover  text-gray-400 font-semibold">Shipping & Delivery</a>
                    <a className="link link-hover  text-gray-400 font-semibold">Returns</a>
                </nav>
                <nav className='flex flex-col space-y-2 text-center'>
                    <h6 className="text-black font-semibold text-xl mb-3">Company</h6>
                    <a className="link link-hover  text-gray-400 font-semibold">About us</a>
                    <a className="link link-hover  text-gray-400 font-semibold">Careers</a>
                    <a className="link link-hover  text-gray-400 font-semibold">Contact</a>
                </nav>
                <nav className='flex flex-col text-center space-y-3'>
                    <h6 className="text-black font-semibold text-xl mb-3">Legal</h6>
                    <a className="link link-hover  text-gray-400 font-semibold">Terms of Service</a>
                    <a className="link link-hover  text-gray-400 font-semibold">Privacy Policy</a>
                    <a className="link link-hover  text-gray-400 font-semibold">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='my-5 mx-18'>
                <h1 className='text-3xl font-semibold  text-center  '>Gadget Heaven</h1>
                <p className='text-xl text-gray-300 font-semibold text-center'>Leading the way in cutting-edge technology and innovation.</p>
                <div className="divider"></div>
            </div>

            <footer className="bg-white flex justify-evenly mb-10">
                <nav className='flex flex-col'>
                    <h6 className=" text-2xl text-black font-bold">Services</h6>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Product Support</a>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Order Tracking</a>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Shipping & Delivery</a>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Returns</a>
                </nav>
                <nav className='flex flex-col'>
                    <h6 className="text-black font-bold text-2xl">Company</h6>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">About us</a>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Careers</a>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Contact</a>
                </nav>
                <nav className='flex flex-col'>
                    <h6 className="text-black font-bold text-2xl">Legal</h6>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Terms of Service</a>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Privacy Policy</a>
                    <a className="link link-hover text-xl text-gray-400 font-semibold">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLargeFill } from "react-icons/ri";
import { IoMenuSharp } from "react-icons/io5";

const PageLinks = () => {
    const [open, setOpen] = useState(false)
    return (
        <div >
            <div onClick={() => setOpen(!open)} className='md:hidden text-xl absolute left-2 '>
                {
                    open === true ? <IoMenuSharp /> : <RiCloseLargeFill />

                }
            </div>

            <div className={`${open ? '-left-52 top-20   min-w-52 min-h-[500px]  backdrop-blur-lg' : 'left-0 min-h-[500px] top-20   rounded-xl  min-w-52 backdrop-blur-lg'} text-xl md:static md:top-10 absolute md:min-h-0 md:min-w-[400px]  md:backdrop-blur-none flex md:flex-row  md:space-x-4 flex-col md:duration-0 duration-1000 space-y-7  px-3.5  font-semibold`}>
     
               <NavLink>Home</NavLink>
                <NavLink>About us</NavLink>
                <NavLink>Statistics</NavLink>
                <NavLink>Dashboard</NavLink>
              
              
            </div>

        </div>
    );
};

export default PageLinks;
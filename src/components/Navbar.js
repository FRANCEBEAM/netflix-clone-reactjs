import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
            <Link to="/">
               NETFLIX
            </Link>  
        </h1>
        <div>
            <button className='text-white mr-4'>
                <Link to="/signin">
                    Sign In
                </Link>
            </button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                <Link to="/signup">
                    Sign Up
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar
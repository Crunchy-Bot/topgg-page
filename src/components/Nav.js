import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-evenly w-full md:w-2/3 py-2 mx-auto">
            <div className="text-white text-2xl text-center font-bold border-b-4 border-b-3 border-white hover:border-red-500 transition duration-200 px-4 pb-1 my-2">
                <Link to="/home">Home</Link>
            </div>
            <div className="text-white text-2xl text-center font-bold border-b-4 border-b-3 border-white hover:border-red-500 transition duration-200 px-4 pb-1 my-2">
                <Link to="/commands">Commands</Link>
            </div>
            <div className="text-white text-2xl text-center font-bold border-b-4 border-b-3 border-white hover:border-red-500 transition duration-200 px-4 pb-1 my-2">
                <Link to="/faq">FAQ</Link>
            </div>
        </nav>
    )
}

export default Nav;
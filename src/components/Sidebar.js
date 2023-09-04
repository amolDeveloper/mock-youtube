import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className='w-56 p-5 shadow-lg'>
            <ul>
                <Link to='/body'>
                    <li className='cursor-pointer p-2 m-1 bg-gray-100 hover:bg-gray-300 rounded-lg'>
                        Home
                    </li>
                </Link>
                <li className='cursor-pointer p-2 m-1 bg-gray-100 hover:bg-gray-300 rounded-lg'> Shorts</li>
                <li className='cursor-pointer p-2 m-1 bg-gray-100 hover:bg-gray-300 rounded-lg'> Subscriptions</li>
                <li className='cursor-pointer p-2 m-1 bg-gray-100 hover:bg-gray-300 rounded-lg'> Library</li>
                <Link to='/body/demo'>
                    <li className='cursor-pointer p-2 m-1 bg-gray-100 hover:bg-gray-300 rounded-lg'> 
                        Demo
                    </li>
                </Link>
            </ul>
            <h1 className='font-bold p-2 m-1 bg-gray-100 rounded-lg'> Subscriptions</h1>
            <ul className='m-1 p-1'>
                <li> Music</li>
                <li> Sports</li>
                <li> Gaming</li>
                <li> Movies</li>
            </ul>
            <h1 className='font-bold p-2 m-1 bg-gray-100 rounded-lg'> Watch Later</h1>
            <ul className='m-1 p-1'>
                <li> Music</li>
                <li> Sports</li>
                <li> Gaming</li>
                <li> Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar

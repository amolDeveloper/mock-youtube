import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import eventBus from "../utils/eventBus";
import { removeUser } from '../utils/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import useSearchSuggestion from '../hooks/useSearchSuggestions';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    let suggestions = useSearchSuggestion(searchQuery);
    
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const handleSearch = () => {
        eventBus.dispatch("searchParam", searchQuery);
    }

    const suggestionClick = (e) => {
        setSearchQuery(e.target.innerHTML)
        eventBus.dispatch("searchParam", e.target.innerHTML);
        setShowSuggestions(false);
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
          });
        dispatch(removeUser());
    }

    return (
        <div className='grid lg:grid-flow-col p-4 sm:grid-flow-row rounded-md'>
            <div className='flex lg:col-span-1 sm:col-span-12 sm:my-2'>
                <img className={'h-10 p-1 ' + (user && 'cursor-pointer')} alt='menu' src='https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png' onClick={toggleMenuHandler}/>
                <img className='h-10 mx-4' alt='youtube-logo' src='https://tse1.mm.bing.net/th/id/OIP.sCtdNjphAin-gugu0MNptAHaEK?pid=ImgDet&rs=1' />
            </div>
            {user && 
                <>
                    <div className='lg:col-span-10 sm:col-span-12 sm:my-2'>
                        <div>
                            <input 
                                className='lg:w-1/2 sm:w-10/12 border border-gray-400 rounded-l-full px-5 py-2' 
                                type='text'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={(e) => {
                                    setShowSuggestions(false);
                                }}
                            />
                            <button 
                                className='lg:w-12 sm:w-2/12 border border-gray-400 rounded-r-full p-2'
                                onClick={() => handleSearch()}
                            >🔍</button>
                        </div>
                        {showSuggestions &&
                            <div className='bg-white mx-2 py-2 px-5 w-[31.5rem] rounded-lg absolute'>
                                <ul>
                                    {suggestions.map((s) => (
                                        <li 
                                            key={s} 
                                            className='py-2 m-1 rounded-lg cursor-pointer hover:bg-gray-100'
                                            onMouseDown={(e) => suggestionClick(e)}
                                        >{s}
                                        </li>
                                    ))}
                                </ul>
                        </div>
                        }
                    </div>
                    <div className='flex lg:col-span-1 sm:col-span-12 sm:my-2'>
                        <img className='h-10 p-1' alt='notification' src='https://tse1.mm.bing.net/th/id/OIP.aZ_jljdRF-ruIxMJYut_bAHaIL?w=182&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                        <img className='h-10 p-1 mx-4' alt='user' src={user?.photoURL} />
                        <button onClick={handleSignOut} className='rounded-lg bg-red-400 hover:bg-red-600 font-bold px-1 mx-2'>Sign Out</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Header

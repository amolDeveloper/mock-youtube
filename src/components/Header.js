import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import eventBus from "../utils/eventBus";

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
      const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery])
        } else {
            getSuggestions()
        }
      }, 200);

      return () => {
        clearTimeout(timer);
      }
    },[searchQuery])

    const getSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery] : json[1]
        }))
    }

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

    return (
        <div className='grid grid-flow-col p-4 m-2 rounded-md'>
            <div className='flex col-span-1'>
                <img className='h-10 p-1 cursor-pointer' alt='menu' src='https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png' onClick={toggleMenuHandler}/>
                <img className='h-10 mx-4' alt='youtube-logo' src='https://tse1.mm.bing.net/th/id/OIP.sCtdNjphAin-gugu0MNptAHaEK?pid=ImgDet&rs=1' />
            </div>
            <div className='col-span-10'>
                <div>
                    <input 
                        className='w-1/2 border border-gray-400 rounded-l-full px-5 py-2' 
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={(e) => {
                            setShowSuggestions(false);
                        }}
                    />
                    <button 
                        className='w-12 border border-gray-400 rounded-r-full p-2'
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
            <div className='flex col-span-1'>
                <img className='h-10 p-1' alt='notification' src='https://tse1.mm.bing.net/th/id/OIP.aZ_jljdRF-ruIxMJYut_bAHaIL?w=182&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                <img className='h-10 p-1  mx-4' alt='user' src='https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0' />
            </div>
        </div>
    )
}

export default Header

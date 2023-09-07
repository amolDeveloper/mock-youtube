import React from 'react'
import { SUPPORTED_LANG, lang } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../utils/gptSlice';

const SearchGPT = () => {

    const dispatch = useDispatch();
    const selectedLang = useSelector((store) => store.gpt.lang);

    const handleSelect = (e) => {
        dispatch(changeLang(e.target.value))
    } 

  return (
    <div className='w-screen h-screen mx-4 p-4 border border-gray-500 bg-gray-200 shadow-2xl rounded-2xl'>
        <div className='flex justify-center'>
            <div className=''>
                <input 
                    className='w-80 rounded-md p-2'
                    placeholder={lang[selectedLang].placeholder}
                />
                <button className='text-black rounded-lg p-2 bg-gray-400 hover:bg-gray-500 mx-4'>{lang[selectedLang].buttonText}</button>
            </div>
            <div>
                <select 
                    className='ml-10 p-2 bg-gray-300 rounded-md text-black'
                    onChange={handleSelect}
                    >
                        {SUPPORTED_LANG.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
                </select>
            </div>
        </div>
    </div>
  )
}

export default SearchGPT

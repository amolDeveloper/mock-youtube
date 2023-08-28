import React, { useMemo, useRef, useState } from 'react';
import { findNthPrime } from '../utils/helper';

const Demo = () => {

    const [value, setValue] = useState('');
    const [isDark, setIsDark] = useState(false);
    let x = 0;
    const [y, setY] = useState(0);
    const z = useRef(0);

    const handleClick = () => {
        setIsDark(!isDark);
    }

    const cache = useMemo(() => {
        return findNthPrime(value)
    }, [value])

  return (
    <div className='flex w-full m-2'>
      <div className={'w-1/2 border-2 border-gray-300 bg-gray-300 m-4 p-4 rounded-lg ' + (isDark && 'bg-black text-white')}>
        <h1 className='font-bold m-4'>useMemo & useCallBack Hook</h1>
        <div className='m-4'>
            <button 
                className='rounded-md bg-amber-500 text-white font-bold p-2'
                onClick={handleClick}
            >Dark Theme</button>
        </div>
        <div className='m-4'>
            <label>Find Prime: </label>
            <input 
                className='p-2 border-2 bg-gray-300 border-black rounded-md' 
                onChange={(e) => setValue(e.target.value)}
                />
        </div>
        <div className='m-4'>
            <span className='font-bold'>Prime Value: {cache}</span>
        </div>
      </div>
      <div className='w-1/2 border-2 border-gray-300 bg-gray-300 m-4 p-4 rounded-lg'>
        <h1 className='font-bold m-4'>useRef Hook</h1>
        <div className='m-2'>
            <button 
                className='rounded-md bg-amber-300 font-bold p-2'
                onClick={() => {
                    x = x + 1;
                }}
            >Increase Let</button>
            <span className='mx-5'>{x}</span>
        </div>
        <div className='m-2'>
            <button 
                className='rounded-md bg-amber-300 font-bold p-2'
                onClick={() => {
                    setY(y + 1);
                }}
            >Increase State</button>
            <span className='mx-5'>{y}</span>
        </div>
        <div className='m-2'>
            <button 
                className='rounded-md bg-amber-300 font-bold p-2'
                onClick={() => {
                    z.current = z.current + 1;
                }}
            >Increase Ref</button>
            <span className='mx-5'>{z.current}</span>
        </div>
      </div>
    </div>
  )
}

export default Demo

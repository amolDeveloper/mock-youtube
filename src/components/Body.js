import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Wrapper from './Wrapper'

const Body = () => {
  return (
    <div>
        <Wrapper />
        <div>
          <Header />
        </div>
        <div className='flex m-2 p-4 h-[620px] overflow-y-scroll'>
          <Sidebar />
          <Outlet />
        </div>
    </div>
  )
}

export default Body

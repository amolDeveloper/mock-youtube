import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <div>
          <Header />
        </div>
        <div className='flex m-2 p-4'>
          <Sidebar />
          <Outlet />
        </div>
    </div>
  )
}

export default Body

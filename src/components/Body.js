import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex m-2 p-4'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body

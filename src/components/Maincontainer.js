import React from 'react'
import Buttonslist from './Buttonslist'
import Videocontainer from './Videocontainer'

const Maincontainer = () => {
  return (
    <div className='sm:w-fit'>
        <Buttonslist />
        <Videocontainer />
    </div>
  )
}

export default Maincontainer

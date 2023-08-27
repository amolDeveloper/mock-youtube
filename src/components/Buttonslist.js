import React from 'react'
import Button from './Button'

const List = [
    'All', 'Gaming', 'Songs', 'Cricket', 'Soccer', 'News', 'Cooking', 'Kapil Sharma', 'BBC', 'Anime'
]

const Buttonslist = () => {
  return (
    <div className='flex'>
        {
            List.map(button => (
                <Button key={button} name={button}/>
            ))
        }
    </div>
  )
}

export default Buttonslist

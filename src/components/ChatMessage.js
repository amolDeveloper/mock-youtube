import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <>
    <div className='shadow-md flex items-center p-2'>
        <img className='h-8' alt='user' src='https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0'/>
        <span className='mx-2 font-bold'>{name}</span>
        <span className='mx-2'>{message}</span>
    </div>
    </>
  )
}

export default ChatMessage

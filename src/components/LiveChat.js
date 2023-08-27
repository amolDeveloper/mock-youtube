import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { addMessage } from '../utils/chatSlice';
import { generate, makeid } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState('');
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {

        const i = setInterval(() => {
            dispatch(addMessage({
                name: generate(),
                message: makeid(30) + ' 🚀'
            }))
        },500)

        return () => {
            clearInterval(i);
        }

    },[])


  return (
    <div>
        <div>
            <div className='mx-2 p-2 border-2 border-gray-100 w-full bg-gray-200 shadow-lg rounded-lg h-[500px] overflow-y-scroll flex flex-col-reverse'>
                {chatMessages.map((c,i) => (
                    <ChatMessage key={i} name={c.name} message={c.message}/>
                ))}
            </div>
        </div>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({
                name: 'Amol Kodge',
                message: liveMessage
            }))
            setLiveMessage('')
        }}>
            <div className='p-2 m-2 w-full'>   
                <input 
                    className='p-2 w-[400px] border-1 border-black bg-gray-200 rounded-lg'
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className='mx-2 p-2 rounded-lg bg-green-400 hover:bg-green-700'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default LiveChat

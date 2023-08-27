import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, VIDEO_API } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [params] = useSearchParams();
    const [videoData, setVideoData] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
        getVideoData();
    },[])

    const getVideoData = async () => {
        const data = await fetch(VIDEO_API + params.get('v') + GOOGLE_API_KEY)

        const json = await data.json();

        const {items} = json;
        const [itemData] = items;
        const {snippet} = itemData;
        setVideoData(snippet);
    }

    return (
        <div className='w-full px-5 m-5'>
            <div className='flex'>
                <div>
                    <iframe 
                        title='video'
                        width='800'
                        height="500" 
                        allowFullScreen
                        src={"https://www.youtube.com/embed/" + params.get('v') }
                    ></iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <div className='w-[800px]'>
                <p className='m-2  font-bold text-3xl'>{videoData?.title}</p>
                <p className='m-2 p-2 font-bold border bg-gray-200 hover:bg-gray-300 rounded-lg w-fit'>{videoData?.channelTitle} ✔</p>
                <p className='m-2'> {videoData?.description}</p>
                <CommentsContainer />
            </div>
        </div>
    )
}

export default WatchPage

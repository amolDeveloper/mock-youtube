import React from 'react'

const VideoCard = (props) => {

    const {info} = props;

    const {snippet, statistics} = info;

    const {channelTitle, title, thumbnails} = snippet;

    return (
            <div className='p-2 m-2 lg:w-56 sm:m-1 sm:p-1 sm:w-fit shadow-lg'>
                <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url} />
                <ul>
                    <li className='font-bold py-2'>{title?.length > 42 ? title.substring(0,42) : title}</li>
                    <li>{channelTitle}</li>
                    <li>{statistics?.viewCount} views</li>
                </ul>
            </div>
    )
}

export default VideoCard

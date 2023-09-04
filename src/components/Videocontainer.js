import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import eventBus from '../utils/eventBus';

const Videocontainer = () => {

    const [videos, setVideos] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
      getVideos();
      return () => {
        eventBus.remove("searchParam");
      }
    }, [])

    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json?.items);
      setFiltered(json?.items);
    }

    eventBus.on("searchParam", (data) => {
      filterVideos(data)
    });

    const filterVideos = (value) => {
        if (videos.length > 0 && value) {
          let filtered = [];
          filtered = videos.filter((video) => video?.snippet?.title?.toLowerCase().includes(value.toLowerCase()));
          setFiltered(filtered);
        } else {
          setFiltered(videos);
        }
    }

    return (
        <div className='flex flex-wrap'>
          {
            filtered.map(video => (
              <Link to={'/body/watch?v=' + video.id}  key={video.id}>
                <VideoCard info={video}/>
              </Link>
            ))
          }
        </div>
    )
}

export default Videocontainer

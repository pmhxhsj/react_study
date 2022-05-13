import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import './index.css';

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      baseURL: 'https://content-youtube.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_youtubeKey },
    };

    fetch(
      'https://content-youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtCnzhsXpsnSACxnGmXIDJHqaEw8vwto0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
}

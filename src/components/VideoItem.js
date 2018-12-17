import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {

  const onClickVideo = () => {
    onVideoSelect(video);
  }

  return (
    <div className="video-item" onClick={onClickVideo}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        <p>{video.snippet.title}</p>        
    </div>
  );
}

export default VideoItem;
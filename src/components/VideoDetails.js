import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div className="video-details shared-styles">Loading...</div>;
  }

  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-details shared-styles">
      <iframe src={videoURL} title={video.snippet.title}></iframe>
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetails;

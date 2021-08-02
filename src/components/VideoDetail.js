import React from "react";

const VideoDetail = ({ video }) => {
  let videoDetail = !video ? null : video.snippet.title;
  return <div>{videoDetail}</div>;
};

export default VideoDetail;

"use client";
import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";

const VideoPlayer = ({ videoId }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        techOrder: ["youtube"],
        sources: [{ type: "video/youtube", src: videoId }],
        useClient: true,
        controls: true,
      });
    }

    // return () => {
    //   if (playerRef.current) {
    //     playerRef.current.dispose();
    //   }
    // };
  }, [videoId]);

  console.log(videoId)

  return (
    <div
      data-vjs-player
      style={{ minWidth: "40vw",height:"40vh", minHeight: "22vw", maxWidth: "100%" }}
    >
      <video ref={videoRef} className="video-js vjs-default-skin"></video>
    </div>
  );
};

export default VideoPlayer;
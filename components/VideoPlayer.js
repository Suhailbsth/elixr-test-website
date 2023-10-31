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

  return (
    <div
      data-vjs-player
      // className="aspect-video"
      style={{
        minWidth: "40vw",
        width: "100%",
        height: "100%",
        minHeight: "22vw",
      }}
    >
      <video ref={videoRef} className="video-js vjs-default-skin"></video>
    </div>
  );
};

export default VideoPlayer;

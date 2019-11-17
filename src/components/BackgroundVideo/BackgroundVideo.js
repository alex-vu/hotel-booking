import React from "react";
import videoFile from "./videoFile";
import "./BackgroundVideo.css";

const BackgroundVideo = ({ children }) => {
  return (
    <section className="background-video">
      <div className="video-wrap">
        <video src={videoFile[1]} autoPlay={true} loop={true} muted>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="background-video-content">{children}</div>
    </section>
  );
};

export default BackgroundVideo;

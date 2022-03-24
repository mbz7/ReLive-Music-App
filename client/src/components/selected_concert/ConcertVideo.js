import React from "react";

function ConcertVideo({ video, title }) {
  return (
    <>
      
      <div className="embed-responsive embed-responsive-16by9 p-3">
        <iframe
          title={title}
          className="embed-responsive-item"
          src={video}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default ConcertVideo;

import React from "react";

function ConcertVideo({ video, title }) {
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={title}
          className="embed-responsive-item"
          src={video}
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default ConcertVideo;

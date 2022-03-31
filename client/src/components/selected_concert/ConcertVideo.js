import React from "react";
import { Card } from "react-bootstrap";

function ConcertVideo({ video, title }) {
  return (
    <>
      <Card className="mt-2 mb-2">
        <div className="embed-responsive embed-responsive-16by9 p-3">
          <iframe
            title={title}
            className="embed-responsive-item"
            src={video}
            allowFullScreen
          ></iframe>
        </div>
      </Card>
    </>
  );
}

export default ConcertVideo;

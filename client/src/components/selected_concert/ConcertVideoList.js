import React from "react";
import { Col } from "react-bootstrap";
import ConcertVideo from "./ConcertVideo";

function ConcertVideoList({ videos }) {
  return (
    <>
      {videos.map((video) => {
        return (
          <Col>
            <ConcertVideo
              key={video.id}
              video={video.video_url}
              title={video.title}
            />
          </Col>
        );
      })}
    </>
  );
}

export default ConcertVideoList;

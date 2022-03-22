import React from "react";
import ConcertImage from "./ConcertImage";
import { Col } from "react-bootstrap";

function ConcertImageList({ images }) {
  return (
    <>
      {images.map((image) => {
        return (
          
            <Col>
              <ConcertImage
                key={image.id}
                image={image.image_url}
                title={image.title}
              />
            </Col>
    
        );
      })}
    </>
  );
}

export default ConcertImageList;

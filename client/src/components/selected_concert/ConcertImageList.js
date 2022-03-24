import React from "react";
import ConcertImage from "./ConcertImage";
// import { Container, Row, Col } from "react-bootstrap";

function ConcertImageList({ images }) {
  return (
    <>
      {images.map((image) => {
        return (
          <ConcertImage
            key={image.id}
            image={image.image_url}
            title={image.title}
          />
        );
      })}
    </>
  );
}

export default ConcertImageList;

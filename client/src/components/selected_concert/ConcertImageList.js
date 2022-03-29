import React from "react";
import ConcertImage from "./ConcertImage";
// import { MDBGallery, MDBGalleryList} from 'mdbreact';

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
      {/* <MDBGallery cols={4}>
        {images.map(({ image, title }, i) => {
          return (
            <MDBGalleryList
              key={i}
              cols= {1}
              titleClasses="rounded"
              styles={{ boxShadow: "0 0 3px rgba(0,0,0, .3)" }}
            >
              <img src={image} alt={title} />
            </MDBGalleryList>
          );
        })}
      </MDBGallery> */}
    </>
  );
}

export default ConcertImageList;

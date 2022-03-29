import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import { ImageViewer } from "react-image-viewer-dv";

function ConcertImage({ image, title }) {
  // const dataImg = [
  //   {
  //     img:
  //       {image},
  //     cols: 1,
  //     title: {title},
  //   }]
  return (
    <>
      <Col md={4}>
        <ImageViewer>
          {/* <Card className="m-2 rounded">
          <Card.Img variant="top" className="thumbnail" src={image} />
          <Card.Body>
            <Card.Text>{title}</Card.Text>
          </Card.Body>
        </Card> */}

          <Image src={image} className="img-fluid" />
          {/* <p>{title}</p> */}
        </ImageViewer>
      </Col>
    </>
  );
}

export default ConcertImage;

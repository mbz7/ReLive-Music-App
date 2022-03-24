import React from "react";
import { Card, Col } from "react-bootstrap";

function ConcertImage({ image, title }) {
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-2 rounded">
        <Card.Img variant="top" className="thumbnail" src={image} />
        <Card.Body>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ConcertImage;

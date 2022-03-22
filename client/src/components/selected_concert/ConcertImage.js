import React from "react";
import { Card } from "react-bootstrap";

function ConcertImage({ image, title }) {
  return (
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" classname="thumbnail" src={image} />
        <Card.Body>
          <Card.Text>
            {title}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ConcertImage;

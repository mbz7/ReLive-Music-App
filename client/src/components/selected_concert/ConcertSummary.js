import React from "react";
import { Form, Card, Button } from "react-bootstrap";

function ConcertSummary({ text }) {
  return (
    <>
      <Card body className="p-2 gap-3">
        <p>"{text}"</p>
        <Button variant="outline-dark" className="m-3">Edit Text</Button>
        <Button variant="danger" className="m-3">Delete Text</Button>
      </Card>
      {/* <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form> */}
    </>
  );
}

export default ConcertSummary;

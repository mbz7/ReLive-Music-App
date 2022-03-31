import React, { useState } from "react";
import { Form, Button, Col, Stack } from "react-bootstrap";

function AddText({ onAddNewText, concertId }) {
  const [newText, setNewText] = useState({});

  function handleTextSubmit(e) {
    e.preventDefault();
    const data = {
      text_comment: newText,
      concert_id: concertId,
    };
    fetch("/concert_comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((newText) => onAddNewText(newText));
    // setNewImagePost("")
  }

  

  return (
    <>
      <Col className="mb-3">
        <h5 className="h5-lb">Add A Comment Below</h5>
      </Col>
      <hr />
      <Stack direction="horizontal" gap={3}>
        <Col>
          <Form.Label htmlFor="inputPassword5"></Form.Label>
          <Form.Control
            onChange={(e) => setNewText(e.target.value)}
            size="sm"
            type="text"
            placeholder="Add Your Text Here..."
            className="p-2 mb-3"
          />
        </Col>
        <div className="vr m-2" />
        <Col lg={2}>
          <Button
            className=" mx-auto btn-lg w-100"
            variant="primary"
            onClick={handleTextSubmit}
          >
            SUBMIT
          </Button>
        </Col>
      </Stack>
    </>
  );
}

export default AddText;

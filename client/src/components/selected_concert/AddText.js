import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Stack } from "react-bootstrap";

function AddText({ onAddNewText }) {
  const [newText, setNewText] = useState({});

  function handleTextSubmit(e) {
    e.preventDefault();
    const data = {
      text_summary: newText,
      concert_id: "1",
    };
    fetch("/concert_summaries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((newText) => console.log(newText));
    // setNewImagePost("")
  }

  return (
    <>
      <Col className="mb-3">
        <h5>Add A Concert Journal Entry below</h5>
      </Col>
      <hr />
      <Stack direction="horizontal" gap={3}>
        <Col>
          <Form.Label htmlFor="inputPassword5">Text</Form.Label>
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

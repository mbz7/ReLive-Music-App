import React, { useState } from "react";
import { Form, Button, Col, Stack } from "react-bootstrap";

function AddImage({ onAddNewImage, concertId }) {
  const [newImageUrl, setNewImageUrl] = useState("");
  const [imageTitle, setNewImageTitle] = useState("");
  //   const [newImagePost, setNewImagePost] = useState({});

  function handleImageSubmit(e) {
    e.preventDefault();
    const data = {
      image_url: newImageUrl,
      title: imageTitle,
      concert_id: concertId,
    };
    fetch("/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((newImage) => onAddNewImage(newImage));
    // setNewImagePost("")
  }

  return (
    <>
      <Col className="mb-3"><h5>Add An Image Below</h5></Col>
      <hr />
      <Stack direction="horizontal" gap={3}>
        <Col>
          <Form.Label htmlFor="inputPassword5">IMAGE URL</Form.Label>
          <Form.Control
            onChange={(e) => setNewImageUrl(e.target.value)}
            size="sm"
            type="text"
            placeholder="Add Image URL Here..."
            className="p-2 mb-3"
          />
        </Col>
        <Col>
          <Form.Label htmlFor="inputPassword5">Image Title</Form.Label>
          <Form.Control
            onChange={(e) => setNewImageTitle(e.target.value)}
            size="sm"
            type="text"
            placeholder="Add Title"
            className="p-2 mb-3"
          />
        </Col>
        <div className="vr m-2" />
        <Col lg={2}>
          <Button
            className=" mx-auto btn-lg w-100"
            variant="primary"
            onClick={handleImageSubmit}
          >
            SUBMIT
          </Button>
        </Col>
      </Stack>
    </>
  );
}

export default AddImage;

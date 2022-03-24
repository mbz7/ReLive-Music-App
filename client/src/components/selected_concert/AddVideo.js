import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Stack } from "react-bootstrap";

function AddVideo({ onAddNewVideo }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  //   const [newImagePost, setNewImagePost] = useState({});

  function handleVideoSubmit(e) {
    e.preventDefault();
    const data = {
      video_url: videoUrl,
      title: videoTitle,
      concert_id: "1",
    };
    fetch("/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((newVideo) => onAddNewVideo(newVideo));
    // setNewImagePost("")
  }

  return (
    <>
      <Col className="mb-3">
        <h5>Add A Video Below</h5>
      </Col>
      <hr />
      <Stack direction="horizontal" gap={3}>
        <Col>
          <Form.Label htmlFor="inputPassword5">VIDEO URL</Form.Label>
          <Form.Control
            onChange={(e) => setVideoUrl(e.target.value)}
            size="sm"
            type="text"
            placeholder="Add Image URL Here..."
            className="p-2 mb-3"
          />
        </Col>
        <Col>
          <Form.Label htmlFor="inputPassword5">Image Title</Form.Label>
          <Form.Control
            onChange={(e) => setVideoTitle(e.target.value)}
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
            onClick={handleVideoSubmit}
          >
            SUBMIT
          </Button>
        </Col>
      </Stack>
    </>
  );
}

export default AddVideo;

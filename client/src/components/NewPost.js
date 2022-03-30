import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default function NewPost({ setNewPost, currentUser }) {
  const [show, setShow] = useState(false);
  const [band, setBand] = useState("");
  const [venue, setVenue] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    fetch("/concerts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        band: band,
        venue: venue,
        location: location,
        date: date,
      }),
    })
      .then((r) => r.json())
      .then((newPost) => setNewPost(newPost));
    handleClose();
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = {
  //     guest_id: guestId,
  //     episode_id: episodeId,
  //     rating: parseInt(rating),
  //   };
  //   fetch("/appearances", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((appearance) => {
  //         onAddGuest(appearance.guest);
  //         setFormErrors([]);
  //       });
  //     } else {
  //       r.json().then((err) => setFormErrors(err.errors));
  //     }
  //   });
  // }

  return (
    <div>
      <Button
        // variant="info"
        size="lg"
        className="mt-3 new-post-btn btn-grad"
        onClick={handleShow}
      >
        {" "}
        Add A New Concert{" "}
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title>Post A New Concert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Body>
            <Form.Label htmlFor="inputPassword5">BAND NAMES</Form.Label>
            <Form.Control
              onChange={(e) => setBand(e.target.value)}
              size="sm"
              type="text"
              placeholder="Band Name(s)"
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">VENUE</Form.Label>
            <Form.Control
              onChange={(e) => setVenue(e.target.value)}
              size="sm"
              type="text"
              placeholder="Venue Name"
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">LOCATION</Form.Label>
            <Form.Control
              onChange={(e) => setLocation(e.target.value)}
              size="sm"
              type="text"
              placeholder="City, State"
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">DATE</Form.Label>
            <Form.Control
              onChange={(e) => setDate(e.target.value)}
              size="sm"
              type="text"
              placeholder="00/00/000"
              className="p-2 mb-3"
            />
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer className="bg-light btn-large">
          <Button
            className=" mx-auto btn-lg"
            variant="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

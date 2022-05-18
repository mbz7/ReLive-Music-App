import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

export default function ConcertEditModal({
  editPost,
  id,
  editLogo,
  editBand,
  editVenue,
  editLocation,
  editDate,
}) {
  const [show, setShow] = useState(false);
  const [logo, setLogo] = useState("");
  const [band, setBand] = useState("");
  const [venue, setVenue] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/concerts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // user_id: currentUser.id,
        band_logo: logo,
        band: band,
        venue: venue,
        location: location,
        date: date,
      }),
    })
      .then((r) => r.json())
      .then((newEditPost) => {
        if (newEditPost.errors) {
          setErrors(newEditPost.errors);
        } else {
          editPost(newEditPost);
          handleClose();
        }
      });
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
        variant="outline-dark"
        size="sm"
        className="new-post-btn mt-3 mb-2 w-50"
        onClick={handleShow}
      >
        {" "}
        Edit{" "}
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title>Edit Current Concert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Body>
            <div>
              <ul>
                {errors.map((e) => {
                  return <li style={{ color: "red" }}>{e}</li>;
                })}
              </ul>
            </div>
            <Form.Label htmlFor="inputPassword5">BAND LOGO</Form.Label>
            <Form.Control
              onChange={(e) => setLogo(e.target.value)}
              size="sm"
              type="text"
              placeholder={editLogo}
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">BAND NAMES</Form.Label>
            <Form.Control
              onChange={(e) => setBand(e.target.value)}
              size="sm"
              type="text"
              placeholder={editBand}
              // placeholder="Band Name(s)"
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">VENUE</Form.Label>
            <Form.Control
              onChange={(e) => setVenue(e.target.value)}
              size="sm"
              type="text"
              placeholder={editVenue}
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">LOCATION</Form.Label>
            <Form.Control
              onChange={(e) => setLocation(e.target.value)}
              size="sm"
              type="text"
              placeholder={editLocation}
              className="p-2 mb-3"
            />
            <Form.Label htmlFor="inputPassword5">DATE</Form.Label>
            <Form.Control
              onChange={(e) => setDate(e.target.value)}
              size="sm"
              type="text"
              placeholder={editDate}
              className="p-2 mb-3"
            />
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer className="bg-light btn-large">
          <Button
            className="mx-auto"
            variant="primary"
            size="lg"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

import React from "react";
import { Card, Button } from "react-bootstrap";

function ConcertComment({ id, text, onUpdateText, handleDeleteText, currentUser }) {
  // function handleDeleteText() {
  //   console.log("test delete");
  //   fetch(`/concert_summaries/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => {
  //       handleDeleteText(text);
  //     });
  // }
  return (
    <>
      <Card body className="p-2 gap-3">
        <p>"{text}"</p>
        <p>- {currentUser.username}</p>
        {/* <Button variant="outline-dark" className="m-3">
          Edit Text
        </Button>
        <Button onClick={handleDeleteText} className="btn-danger">
          DELETE
        </Button> */}
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

export default ConcertComment;

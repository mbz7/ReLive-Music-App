import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ConcertEditModal from "./ConcertEditModal";

function ConcertCard({
  band,
  venue,
  location,
  date,
  id,
  handleDelete,
  currentUser,
  setNewEditPost,
}) {
  return (
    <>
      <Col
        sm={12}
        md={12}
        lg={12}
        className="gap-3 mb-5 mt-5  "
      >
        <Card className="concert-card-div">
          <div className="p-4 mt-2 text-light gap-3">
            <Row>
              <Col md={2} lg={2} className="m-0 p-0">
                <div className="h-100 w-100 d-flex align-items-center p-4">
                  <h5 className="mx-auto">band logo</h5>
                </div>
              </Col>
              <Col className="d-flex justify-content-center align-items-center mt-3 p-2">
                <Col
                  md={6}
                  lg={6}
                  className="text-center band_card_border-right"
                >
                  <Card.Title className="update_title_color">
                    <h2 className="text-light p-2">{band}</h2>
                  </Card.Title>
                  <Button
                    variant="outline-light"
                    className="mx-auto mt-2"
                    as={Link}
                    to={`/concerts/${id}`}
                  >
                    View Concert Dashboard
                  </Button>
                  {/* Alternative way just using a link */}
                  {/* <Link to={`/concerts/${id}`}>Link To Concert</Link> */}
                </Col>
                <Col className="band_card_info-right">
                  <Card.Text className="">
                    <strong>Venue: </strong>
                    {venue}
                  </Card.Text>
                  <Card.Text className="">
                    <strong>Location: </strong>
                    {location}
                  </Card.Text>
                  <Card.Text className="">
                    <strong>Date: </strong>
                    {date}
                  </Card.Text>
                  <Button
                    onClick={() => handleDelete(id)}
                    variant="outline-danger"
                  >
                    DELETE
                  </Button>

                  {/* <ConcertEditModal
                    setNewEditPost={setNewEditPost}
                    id={id}
                    currentUser={currentUser}
                  /> */}
                </Col>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default ConcertCard;

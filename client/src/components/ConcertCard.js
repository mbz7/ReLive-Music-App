import React from "react";
import { Col, Card, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ConcertEditModal from "./ConcertEditModal";

function ConcertCard({
  logo,
  band,
  venue,
  location,
  date,
  id,
  handleDelete,
  // currentUser,
  editPost,
}) {
  return (
    <>
      <Col sm={12} md={12} lg={12} className="gap-3 mb-4 mt-3  ">
        <Card className="concert-card-div">
          <div className="p-4 mt-2 text-dark gap-3">
            <Row>
              <Col
                sm={12}
                md={1}
                lg={1}
                className="d-flex align-items-center justify-content-center p-2"
              >
                <div className="band-logo-container">
                  <Image
                    className="band-logo p-3"
                    src={logo}
                    alt="band_logo"
                    
                  />
                </div>
              </Col>
              <Col className="d-flex justify-content-center align-items-center mt-3 p-2">
                <Col
                  sm={12}
                  md={6}
                  lg={6}
                  className="text-center band_card_border-right"
                >
                  <Card.Title className="update_title_color">
                    <h1 className="text-dark">{band}</h1>
                  </Card.Title>
                  {/* <hr className="w-75 mx-auto hr-4"/> */}
                  <Button
                    variant="outline-dark"
                    className="text-right mt-2 btn-md mb-1 btn-lg"
                    as={Link}
                    to={`/concerts/${id}`}
                  >
                    <div>
                      <span className="view-btn">View Concert Dashboard</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                        />
                      </svg>{" "}
                    </div>
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
                </Col>

                <Col className="text-end p-3">
                  <Col className="text-center">
                    <ConcertEditModal
                      editPost={editPost}
                      id={id}
                      // currentUser={currentUser}
                    />{" "}
                    <Button
                      onClick={() => handleDelete(id)}
                      variant="outline-danger"
                      size="sm"
                      className="w-50"
                    >
                      Delete
                    </Button>
                  </Col>
                </Col>
              </Col>
            </Row>
          </div>
          {/* <hr className="hr-grad-2" /> */}
          {/* <Card.Footer className="text-muted"></Card.Footer> */}
        </Card>
      </Col>
    </>
  );
}

export default ConcertCard;

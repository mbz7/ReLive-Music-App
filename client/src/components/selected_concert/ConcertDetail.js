import React from "react";
import { Col, Card, Row, Image } from "react-bootstrap"
// import ".../SelectedConcert.css"
// import { Link } from "react-router-dom";

function ConcertDetail({ concert }) {
  return (
    <>
      <Col sm={12} md={12} lg={12} className="gap-3 mb-5 mt-5 ">
        <Card className="">
          <div className="p-4 mt-2 gap-3">
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
                    src={concert.band_logo}
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
                  <Card.Title className="text-dark">
                    <h1 className="">{concert.band}</h1>
                  </Card.Title>
                 
          
             
                </Col>
                <Col className="band_card_info-right ">
                  <Card.Text className="text-left">
                    <strong>Venue: </strong>
                    {concert.venue}
                  </Card.Text>
                  <Card.Text className="text-left">
                    <strong>Location: </strong>
                    {concert.location}
                  </Card.Text>
                  <Card.Text className="text-left">
                    <strong>Date: </strong>
                    {concert.date}
                  </Card.Text>
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

export default ConcertDetail;

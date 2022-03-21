import React from "react";
import { Col, Card, Row, Button, Link } from "react-bootstrap";

function ConcertCard({ user, band, venue, location, date }) {
  return (
    <>
      <Col sm={12} md={12} lg={12} className="gap-3 mb-5 mt-5">
        <Card
        //   as={Link}
        //   className="card-div mx-auto"
        //   onClick={(e) => setBrewery(id)}
        //   to={`/breweries/${id}`}
        >
          {/* <Card.Img className="h-100 card-img-filter" src={image} alt="" /> */}

          <div className="p-4 mt-2 text-dark gap-3">
            {/* <Card.ImgOverlay className="card-img-o"> */}
            <Row>
              <Col sm={12} md={2} lg={2}>
                <div className="bg-dark">image</div>
              </Col>
              <Col className="d-flex justify-content-center">
                <Col sm={12} md={12} lg={6} className="text-center">
                  <Card.Title className="update_title_color">
                    <h2 className="text-dark">{band}</h2>
                  </Card.Title>
                  <Button
                  variant="info"
                  className="mx-auto"
                  // as={Link}
                  // onClick={(e) => setBrewery(id)}
                  // to={`/brewery/${id}`}
                >
                  View Concert Dashboard
                </Button>
                </Col>
                <Col>
                  <Card.Text className="p-1">
                    <strong>Venue: </strong>
                    {venue}
                  </Card.Text>
                  <Card.Text className="p-1">
                    <strong>Location: </strong>
                    {location}
                  </Card.Text>
                  <Card.Text className="p-1">
                    <strong>Date: </strong>
                    {date}
                  </Card.Text>
                  
                </Col>
              </Col>
            </Row>
            {/* </Card.ImgOverlay> */}
          </div>

          {/* <div className="card-footer-div text-center">
              <div className="card-b-logo bg-white mx-auto">
                <Image className="img-fluid" src={logo} alt="" />
              </div>
            </div> */}
        </Card>
      </Col>
    </>
  );
}

export default ConcertCard;

import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage({ currentUser }) {
  return (
    <Container fluid className="container-home-fluid">
      <div className="home-jumbotron d-flex flex-column justify-content-center">
        <div className="overlay"></div>
        <div className="jumbotron-inner text-center">
          <Col lg={7} className="mx-auto rounded-lg home_jumbotron_welcome-div">
            <div className="text-light welcome-top-div">
              <h2 className="p-2 text-center">
                {currentUser ? `Hello, ${currentUser.first_name}!` : ""}
              </h2>
              <Col className="text-center">
                <h1 className="h1-grad">Welcome To ReLive</h1>
                <h4 className="p-2 text-lg mx-auto">
                  A home for all of your concert experiences
                </h4>
              </Col>
              <hr className="mx-auto hr-grad" />
              {/* <Col className="text-center">
                      <NewPost addPost={addPost} />
                    </Col> */}
            </div>
            <Button className="btn-grad text-center" as={Link} to={`/home`}>
              Get Started
            </Button>
          </Col>
          <hr className="w-100 mx-auto mt-0 hr-grad-2" />
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;

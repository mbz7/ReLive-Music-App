import React, { useState, useEffect } from "react";
// import BreweryCardList from "../components/BreweryCardList";
import { Row, Col, Container, Button } from "react-bootstrap";
// import Search from "../components/Search";
import { Navigate } from "react-router-dom";
import ConcertCardList from "./ConcertCardList";

function Home() {
  const [concerts, setConcerts] = useState([]);
  // const [brewerySearch, setBrewerySearch] = useState("");
  // const [stateSearch, setStateSearch] = useState("");

  useEffect(() => {
    fetch("/concerts")
      .then((r) => r.json())
      .then((concertList) => {
        setConcerts(concertList);
      });
  }, []);

  return (
    <>
      {/* {currentUser ? ( */}
      <div>
        <Container fluid className="container-home-fluid bg-light">
          <div className="home-jumbotron d-flex flex-column justify-content-center">
            <div className="overlay"></div>
            <div className="jumbotron-inner">
              <div className="h-50 d-flex flex-column justify-content-center text-light">
                {/* <h2 className="p-2 text-center">
                    {currentUser ? `Hello, ${currentUser.first_name}!` : ""}
                  </h2> */}
                <Col className="text-center">
                  <h1>Welcome To ReLive</h1>
                  <p className="pt-2 text-lg">
                    A home for all of your concert experiences
                  </p>
                </Col>
                <Col className="text-center">
                  <Button variant="info w-25 mt-1">Add A Concert</Button>
                </Col>
                {/* <Col lg={5} className="mx-auto search-bar">
                    <Search
                      brewerySearch={brewerySearch}
                      brewerySetter={setBrewerySearch}
                      stateSearch={stateSearch}
                      stateSetter={setStateSearch}
                    />
                  </Col> */}
              </div>
            </div>
          </div>
          <div className="brewery-list-container pt-5">
            <Container>
              <div className="text-center">
                <h3>Concert List</h3>
                <p>View Past Concerts or Add A New One Below</p>
                <hr className="w-100 mx-auto mt-5" />
              </div>

              <Row>
                <Col>
                  <ConcertCardList concerts={concerts} />
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      {/* ) : (
        <Navigate to="/" />
      )} */}
    </>
  );
}

export default Home;

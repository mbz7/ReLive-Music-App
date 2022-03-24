import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import Search from "../components/Search";
import { Navigate } from "react-router-dom";
import ConcertCardList from "./ConcertCardList";
import NewPost from "./NewPost";

function Home({concerts, setConcerts, currentUser}) {
  
  const [newPost, setNewPost] = useState ({})
  // const [brewerySearch, setBrewerySearch] = useState("");
  // const [stateSearch, setStateSearch] = useState("");

  // useEffect(() => {
  //   fetch("/concerts")
  //     .then((r) => r.json())
  //     .then((data) => setNewPost(data));
  // }, [newPost]);

  useEffect(() => {
    fetch("/concerts")
      .then((r) => r.json())
      .then((concertList) => {
        setConcerts(concertList);
      });
  }, [newPost]);
 

  // function addPost(newPost) {
  //   setNewPost([...concerts, newPost])
  // }

  return (
    <>
      {currentUser ? (
      <div>
        <Container fluid className="container-home-fluid bg-light">
          <div className="home-jumbotron d-flex flex-column justify-content-center">
            <div className="overlay"></div>
            <div className="jumbotron-inner text-center">
              <Col lg={7} className="mx-auto bg-light rounded-lg home_jumbotron_welcome-div">
                <div className="text-dark">
                  {/* <h2 className="p-2 text-center">
                    {currentUser ? `Hello, ${currentUser.first_name}!` : ""}
                  </h2> */}
                  <Col className="text-center">
                    <h1>Welcome To ReLive</h1>
                    <p className="p-2 text-lg">
                      A home for all of your concert experiences
                    </p>
                  </Col>
                  <Col className="text-center">
                  <NewPost setNewPost={setNewPost} />
                    
                  </Col>
                </div>
              </Col>
            </div>
          </div>
          {/* <div className="home-2-jumbo-gradient"><span></span></div> */}
          <div className="concert-list-container">
            <Container>
              <div className="text-center">
                <h3>Concert List</h3>
                <p>View Past Concerts or Add A New One Below</p>
                <hr className="w-100 mx-auto mt-5" />
              </div>

              <Row>
                <Col>
                  <ConcertCardList concerts={concerts} setConcerts={setConcerts} />
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
       ) : (
        <Navigate to="/" />
      )} 
    </>
  );
}

export default Home;

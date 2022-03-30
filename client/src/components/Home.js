import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import Search from "../components/Search";
import { Navigate } from "react-router-dom";
import ConcertCardList from "./ConcertCardList";
import NewPost from "./NewPost";

function Home({ concerts, setConcerts, currentUser }) {
  const [newPost, setNewPost] = useState({});
  const [newEditPost, setNewEditPost] = useState({});
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
  }, [newPost, newEditPost]);

  // function handleDelete(id) {
  //   const newConcerts = concerts.filter(concert => concert.id !== id)
  //   setConcerts(newConcerts)
  // }

  function handleDelete(id) {
    fetch(`/concerts/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setConcerts((concerts) =>
          concerts.filter((concert) => concert.id !== id)
        );
      }
    });
  }



  // function addPost(newPost) {
  //   setNewPost([...concerts, newPost])
  // }

  return (
    <>
      {currentUser ? (
        <div>
          <Container fluid className="container-home-fluid">
            <div className="home-jumbotron d-flex flex-column justify-content-center">
              <div className="overlay"></div>
              <div className="jumbotron-inner text-center">
                <Col
                  lg={7}
                  className="mx-auto rounded-lg home_jumbotron_welcome-div"
                >
                  <div className="text-light welcome-top-div">
                    <h2 className="p-2 text-center">
                    {currentUser ? `Hello, ${currentUser.first_name}!` : ""}
                  </h2>
                    <Col className="text-center">
                      <h1 className="h1-grad">Welcome To ReLive</h1>
                      <p className="p-2 text-lg mx-auto">
                        A home for all of your concert experiences
                      </p>
                    </Col>
                    <hr className="mx-auto hr-grad" />
                    <Col className="text-center">
                      <NewPost
                        setNewPost={setNewPost}
                        currentUser={currentUser}
                      />
                    </Col>
                  </div>
                </Col>
              </div>
            </div>
            {/* <div className="home-2-jumbo-gradient"><span></span></div> */}
            <div className="concert-list-container">
              <Container>
                <div className="text-center text-light">
                  <h3>Concert List</h3>
                  <p>View Past Concerts or Add A New One Below</p>
                  <hr className="w-100 mx-auto mt-5 hr-grad-2" />
                </div>

                <Row>
                  <Col>
                    <ConcertCardList
                      concerts={concerts}
                      setConcerts={setConcerts}
                      handleDelete={handleDelete}
                      setNewEditPost={setNewEditPost}
                    />
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

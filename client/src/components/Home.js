import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
// import Search from "../components/Search";
import { Navigate, Link } from "react-router-dom";
import ConcertCardList from "./ConcertCardList";
import NewPost from "./NewPost";
import logo from "../img/relive_logo_main_2.png";

function Home({ currentUser }) {
  const [search, setSearch] = useState("");
  const [concerts, setConcerts] = useState([]);

  // function that takes edit post and bring its up to home, checks to see if concert.id matches the post.id passed up, if it doesn't match returns the regular concert.
  const editPost = (post) => {
    setConcerts((concerts) => {
      return concerts.map((c) => {
        if (c.id === post.id) {
          return post;
        } else {
          return c;
        }
      });
    });
  };

  const addPost = (post) => {
    setConcerts((concerts) => {
      return [...concerts, post];
    });
  };

  useEffect(() => {
    fetch("/concerts")
      .then((r) => r.json())
      .then((concertList) => {
        setConcerts(concertList);
      });
  }, []);

  const changeSearchStringInState = (searchString) => {
    setSearch(searchString);
  };

  const filteredPost = () => {
    if (search.length > 0) {
      return concerts.filter((concert) =>
        concert.band.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return concerts;
    }
  };

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

  return (
    <>
      {/* {currentUser ? ( */}
      <div>
        <Container fluid className="container-home-fluid">
          <Container fluid>
            <div className="dashboard-jumbotron d-flex flex-column justify-content-center">
              <div className="overlay"></div>
              <div className="jumbotron-inner text-center">
                <Col className="col-4">
                  <div></div>
                </Col>

                <Col sm={6} className="m-auto">
                  <img
                    className="d-block mx-auto img-fluid dashboard-logo"
                    src={logo}
                    alt="relive logo"
                  ></img>
                </Col>

                <Col className="text-center text-white mt-3">
                  <h4 className="p-2 text-lg mx-auto">
                    A home for all of your concert experiences
                  </h4>
                </Col>

                {/* <Col
                  lg={7}
                  className="mx-auto rounded-lg home_jumbotron_welcome-div"
                >
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
                  </div>
                  <Button className="btn-grad text-center" href="#concert-list">
                    Get Started
                  </Button>
                </Col> */}
                {/* <hr className="w-100 mx-auto mt-0 hr-grad-2" /> */}
              </div>
            </div>
            {/* <div className="home-2-jumbo-gradient"><span></span></div> */}
          </Container>
          <div className="concert-list-container" id="concert-list">
            <Container>
              <Row className="d-flex align-items-center justify-content-center p-5">
                <Col className="concert-header-div">
                  <Row className="d-flex align-items-center justify-content-center">
                    <div className="text-center p-3 text-dark">
                      <h1>Concert List</h1>
                      <hr />
                    </div>
                    <Col lg={8} className=" search-bar-container text-center">
                      <div
                        className="ms-auto search-bar mx-auto"
                        controlId="formBasicSearch"
                      >
                        <input
                          type="search"
                          placeholder="Search For A Concert Here..."
                          onChange={(e) =>
                            changeSearchStringInState(e.target.value)
                          }
                          className="w-100"
                        />
                      </div>
                    </Col>
                    <Col className="text-center">
                      <NewPost addPost={addPost} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              {/* <hr className="w-100 mx-auto mt-2 hr-grad-2" /> */}
              {/* <div className="justify-content-center"> */}

              {/* <div className="col-md-border col-lg-2"></div> */}

              {/* </div> */}

              <Row>
                <ConcertCardList
                  concerts={filteredPost()}
                  setConcerts={setConcerts}
                  handleDelete={handleDelete}
                  editPost={editPost}
                />
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      {/* </div>
      ) : (
        <Navigate to="/" />
      )} */}
    </>
  );
}

export default Home;

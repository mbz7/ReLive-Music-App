import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import SelectedConcert from "./components/SelectedConcert";
// import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserPage from "./components/UserPage";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  //>> Logout
  function handleLogout(e) {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser());
  }

  // currentUser added to local storage to persist on refresh
  useEffect(() => {
    const data = localStorage.getItem("user-data");
    if (data) {
      setCurrentUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-data", JSON.stringify(currentUser));
  });
  return (
    <>
      {/* <Navbar bg="dark" variant="dark"> */}
      <Navbar variant="dark">

        <Container>
          <Navbar.Brand as={Link} to="/home">
            re-Live Music
          </Navbar.Brand>
          <div className="">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id=" navbarScroll">
              <Nav className="me-auto text-left">
                {/* <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link> */}
                <Nav.Link as={Link} to="/home">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/userpage">
                  Account
                </Nav.Link>
                {/* <Nav.Link className="mx-2" as={Link} to="/userpage">
                  Profile
                </Nav.Link> */}
                <div>
                  {/* Ternary used for distplaying Login/Logout button */}
                  {!currentUser ? (
                    <Button
                      className="mx-2 nav-login-btn"
                      as={Link}
                      to="/"
                      variant="outline-warning"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      onClick={handleLogout}
                      className="mx-2 nav-login-btn"
                      as={Link}
                      to="/"
                      variant="outline-warning"
                    >
                      Log out
                    </Button>
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route
            className={("inner", "outer")}
            path="/"
            element={
              <Login
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          />

          <Route
            className={("inner", "outer")}
            path="/signup"
            element={
              <Signup
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard currentUser={currentUser} />}
          />
          <Route
            path="/account"
            element={<Account currentUser={currentUser} />}
          />
          <Route
            path="/concerts/:id"
            element={<SelectedConcert currentUser={currentUser} />}
          />
          <Route
            path="/userpage"
            element={
              <UserPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}

export default App;

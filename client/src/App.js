import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import SelectedConcert from "./components/SelectedConcert";

function App() {
  const [concerts, setConcerts] = useState([]);
  return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Navbar
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/account">
                Account
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home concerts={concerts} setConcerts={setConcerts} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/concerts/:id" element={<SelectedConcert />} />
          </Routes>
        </div>
      </>
  );
}

export default App;

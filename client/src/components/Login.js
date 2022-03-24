import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function Login({ setCurrentUser, currentUser }) {
  // Login state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Submit login credentials to db
  function handleLogin(e) {
    //assign login to for values stored in state | then post req
    let login = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.username) {
          //if success setCurrentUser to response
          setCurrentUser(res);
        } else {
          //if fail alert errors
          alert(res.error);
        }
      });
  }

  return (
    <div className="body_of_form">
      {/* Ternary used to verify currentUser| true navigates to home / false null */}
      {currentUser ? <Navigate to="/Home" /> : null}
      <Container>
        <div className="pt-5">
          <Form className="outer inner">
            <br></br>
            <h2>Welcome Back!</h2>
            {/* user log in form */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                placeholder="User Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={handleLogin} variant="primary" to="/login">
              Log In
            </Button>
          </Form>
          <br></br>
          {/* link to sign up page */}
          <div className="dont_have_account text-light">
            Don't have an account? <Link to="/signup" className="text-white">Sign Up</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;

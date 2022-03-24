import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";


function Signup({ setCurrentUser, currentUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    // e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(r =>  
      {
        if (r.email){
          setCurrentUser(r)
        }else {
           alert(r.errors)
           setCurrentUser();
        }
      })
     
  }

  return (
    <div className="body_of_form">
      {currentUser ? <Navigate to="/Home" /> : null}
      <Container>
        <div className="pt-5">
          <Form className="outer inner">
            <br></br>
            <h2>Register Account</h2>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="first_name"
                value={firstName}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="last_name"
                value={lastName}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                value={email}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                value={username}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                value={password}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPasswordConfirmation"
            >
              <Form.Control
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                type="password"
                id="password"
                value={passwordConfirmation}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <br></br>
            <Button onClick={handleSubmit} variant="primary">
              Create Account
            </Button>
          </Form>
          <br></br>
          <div className="already_have_account text-white">
            Already registered? <Link className="text-white" to="/">Log In</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;

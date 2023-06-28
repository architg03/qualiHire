import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { auth } from "./firebase"; // import your firebase configuration

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    if (email.endsWith("@qualitestgroup.com")) {
      auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          history("/dashboard"); // redirect to the home page after successful registration
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Email must end with @qualitestgroup.com");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        history("/home"); // redirect to the home page after successful login
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container style={{ marginTop: "60px", paddingBottom: "50px" }}>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card
              style={{
                backgroundColor: "#2a2559",
                minWidth: "500px",
                maxWidth: "600px",
              }}
            >
              <Card.Body style={{ padding: "50px" }}>
                <Card.Title style={{ color: "white" }}>
                  {" "}
                  QualiHire Sign Up
                </Card.Title>
                <Form onSubmit={handleSignUp}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </FloatingLabel>

                  {error && <p style={{ color: "red" }}>{error}</p>}

                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "10px" }}
                  >
                    <Button type="submit" variant="secondary">
                      REGISTER
                    </Button>
                    <Button type="button" variant="secondary" onClick={handleLogin}>
                      LOGIN
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SignUp;
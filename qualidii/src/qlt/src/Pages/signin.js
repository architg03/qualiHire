import React from "react";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const signIn = (props) => {
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
                  QualiDII Log In
                </Card.Title>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="Username" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <div style={{ marginTop: "10px" }}>
                  <Button variant="secondary">LOG IN</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default signIn;

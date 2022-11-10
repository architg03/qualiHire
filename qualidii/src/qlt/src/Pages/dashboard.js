import React from "react";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import DataCard from "../Components/datacard";
import Container from "react-bootstrap/Container";
import axios from "../API/axiosconfig";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Dashboard = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const checkData = async (props) => {
      const res = await axios.get("/users/search", {
        data: {
          firstName: `${props.user.fname}`,
          lName: `${props.user.lname}`,
        },
      });
      const user = JSON.parse(res.request.response)[0];
      setProducts(user.products);
    };
    checkData(props);
  }, []);

  const myDataCards = products.map((product) => {
    return (
      <div key={product.id}>
        <DataCard
          ownerID={props.user.userID}
          userLoggedIn={props.user.userID}
          id={product.id}
          name={product.name}
          type={product.type}
        />
      </div>
    );
  });

  const releaseAllHandler = (props) => {
    for(let i = 0; i < props.user.products.length; i++ ){
      axios.post("/products/unlock", {data: {ProductID: `${props.user.products[i].id}`}})
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>All Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div style={{ marginLeft: "15%" }}>{myDataCards}</div>
          </Container>
        </Modal.Body>
      </Modal>
      <Container style={{ marginTop: "60px", paddingBottom: "50px" }}>
        <Row>
          <Col>
            <Container>
              <div style={{ height: "60px" }}></div>
              <Container>
                <h2>My Data</h2>
                <Accordion>
                  <Accordion.Item eventKey="all" />
                  <Accordion.Header>
                    All Products
                    <Badge style={{ Padding: "1%", marginLeft: "1%" }}>
                      {products.length}
                    </Badge>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div style={{ paddingBottom: "2%" }}>
                      Contains all data from any profile that you have reserved.
                    </div>
                    <Button onClick={handleShow}>View All Data</Button>{" "}
                    <Button variant="danger">Release All Data</Button>
                  </Accordion.Body>
                </Accordion>
              </Container>
            </Container>
          </Col>
          <Col>
            <div style={{ height: "60px" }}></div>
            <Container>
              <h2>My Data Profile Progress</h2>
              <p>To be added</p>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
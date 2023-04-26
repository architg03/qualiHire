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

const getRole = (job) => {  // function to get the level of each job
  job = job.toLowerCase();
  let pos = 0;
  const h = ["regular", "senior", "junior", "lead"];

  if (job.includes("senior") || job.includes("sr")) {
    pos = 1;
  }

  if (job.includes("lead")) {
    if (job.includes("team lead")) {
      return "B2";
    } else {  // probably specialist
      return "C1";
    }
  }

  if (job.includes("junior") || job.includes("jr")) {
    pos = 2;
    console.log("jr");
    return "A1";
  }

  if (job.includes("corporate") && job.includes("executive")) {
    return "F1";
  }

  if (job.includes("vice") && job.includes("executive") && job.includes("president")) {
    return "E2";
  }

  if (job.includes("vice") && job.includes("president") && pos == 1) {
    return "E1";
  }

  if (job.includes("vice") && job.includes("associate") && job.includes("president")) {
    return "D1";
  }

  if (job.includes("vice") && job.includes("president")) {
    return "D2";
  }

  if (job.includes("director")) {
    return "C3";
  }

  if ((pos == 1 && (job.includes("manager") || job.includes("architect"))) ||
      ((job.includes("principal") || job.includes("princ")) && job.includes("specialist"))) {
    console.log(h[pos]);
    return "C2";
  }

  if ((job.includes("manager") || job.includes("architect")) && pos == 0) {
    console.log(h[pos]);
    return "C1";
  }

  if (pos == 1 && job.includes("specialist")) {
    console.log(h[pos]);
    return "B2";
  }

  if (pos == 1 || job.includes("specialist")) {
    console.log(h[pos]);
    return "B1";
  }

  if (job.includes("associate") || job.includes("engineer") || job.includes("assoc") && pos == 0) {
    console.log(h[pos]);
    return "A2";
  }

  if (job.includes("graduate") || job.includes("trainee")) {
    console.log(h[pos]);
    return "A1";
  } else {
    console.log(h[pos]);
    return "A2";
  }
}





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
            </Container>
            <Container>
              <h2 style={{ marginBottom: "0" }}>Job Requisitions</h2>
              <div style={{ paddingBottom: "2%" }}>
                Select which countries to get Job Requisitions from:
              </div>
              <select defaultValue="United States">
                <option value="Argentina">Argentina</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Israel">Israel</option>
                <option value="Romania">Romania</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Portugal">Portugal</option>
              </select>
              <div style={{ paddingTop: "2%" }}>
                <div style={{ paddingBottom: "2%" }}>
                  Filter by job types:
                </div>
                <select defaultValue="All">
                  <option value="All">All</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                </select>
                <div style={{ paddingBottom: "2%" }}>
                  What job level:
                </div>
                <select defaultValue="All">
                  <option value="All">All</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                </select>
                <div style={{ paddingBottom: "2%" }}>
                  Specify Job:
                </div>
                <select defaultValue="">
                  <option value="">Select a job</option>
                  <option value="Job 1">Job 1</option>
                  <option value="Job 2">Job 2</option>
                  <option value="Job 3">Job 3</option>
                  <option value="Job 4">Job 4</option>
                </select>
              </div>
            </Container>
          </Col>
          <Col>
                      <Container>
                        <div style={{ height: "60px" }}></div>
                      </Container>
                      <Container>
                        <h2>Resume Data</h2>
                        <div style={{ paddingBottom: "2%" }}>
                          Select which countries to get Resume Data from:
                        </div>
                        <select defaultValue="United States">
                          <option value="Argentina">Argentina</option>
                          <option value="Canada">Canada</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="Israel">Israel</option>
                          <option value="Romania">Romania</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Portugal">Portugal</option>
                        </select>
                      </Container>
                    </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;

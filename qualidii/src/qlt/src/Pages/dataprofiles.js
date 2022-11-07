import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordian from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import axios from "../API/axiosconfig";

const DataProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const fetchProfiles = async () => {
      const result = await axios.get("profile/search", { data: { title: "" } });
      setProfiles(JSON.parse(result.request.response));
    };
    fetchProfiles();
  }, []);

  let listProfiles;
  try {
    listProfiles = profiles.map((profile) => (
      <div key={profile.UUID}>
        <Accordian.Item eventKey={profile.UUID}>
          <Accordian.Header>
            {profile.title}
            <Badge style={{ marginLeft: "10px" }}>{profile.type}</Badge>
          </Accordian.Header>
          <Accordian.Body>
            Description: {profile.desc}
            <br />
            Returns: {profile.returns}
          </Accordian.Body>
        </Accordian.Item>
      </div>
    ));
  } catch (e) {
    console.log(e);
  }

  return (
    <Container style={{ marginTop: "60px", paddingBottom: "50px" }}>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col>
            <h2>Manage Profiles</h2>
            <Accordian>{listProfiles}</Accordian>
          </Col>
          <Col>
            <h2>Create Profiles</h2>
            <p>Working on it...</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default DataProfiles;

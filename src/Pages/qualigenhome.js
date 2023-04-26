import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/fade";
import Ratio from "react-bootstrap/Ratio";
import slide1 from "../Assets/White_full.png";
import slide2 from "../Assets/finger tap.jpg";
import slide3 from "../Assets/circle of code.jpg";
import image4 from "../Assets/AI.jpg";

const systemOptions = [
  "SAP S/4",
  "SAP Fiori",
  "SAP Successfactors",
  "SAP ECC",
  "SAP EWM",
  "Salesforce Service Cloud",
  "Salesforce Sales Cloud",
  "Salesforce Marketing Cloud",
  "Salesforce Commerce Cloud",
  "Oracle EBS",
  "Oracle Fusion",
  "Manhattan Active Omni",
  "Manhattan Active Supply Chain",
  "Workday HR",
  "Workday Finance",
  "Dynamics 365",
];

const actionOptions = [
  "Business Process into Test Scenarios",
  "Test Scenarios into Test Cases",
];

const handleFileUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const fileData = reader.result;
    // Display the file data using a console.log statement or by updating state.
    console.log(fileData);
  };
  reader.readAsText(file);
};

const Home = () => {
  const [selectedSystem, setSelectedSystem] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  return (
    <Stack direction="vertical" gap={3}>
      <div style={{ marginTop: "50px" }}>
        <Card className="bg-dark text-white">
            <Card.Img src={slide1} alt="background" style={{height:300, width:1950}} />
          <Fade in>
            <Card.ImgOverlay>
              <Card.Title style={{color: "navy", textAlign: "center"}}>
                <Fade in>
                  <h1>QualiGen</h1>
                </Fade>
              </Card.Title>
              <Card.Subtitle style={{color: "black", marginLeft: "950px" }}>...AI Based Enterprise Tests Generator</Card.Subtitle>
              <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: "1%" }}>
                <select value={selectedSystem} onChange={(e) => setSelectedSystem(e.target.value)} className="form-select me-3">
                  <option value="">Select System</option>
                  {systemOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
                <select value={selectedAction} onChange={(e) => setSelectedAction(e.target.value)} className="form-select me-3">
                  <option value="">Select Action</option>
                  {actionOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
                <Button variant="primary" className="me-3">Process</Button>
                <Button variant="secondary">Reset</Button>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button variant="primary" className="me-3">
                  <input type="file" onChange={handleFileUpload} />
                </Button>
              </div>
            </Card.ImgOverlay>
          </Fade>
        </Card>
      </div>
      <div>
        <h1
          style={{
            display: "flex",
            marginTop: "50px",
            marginLeft: "7%",
          }}
        >
          What is QualiGen?
        </h1>
        <hr style={{ marginLeft: "7%" }} />
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img src={slide2} />
                <Card.Body>
                  <Card.Title>Accelerate Testing</Card.Title>
                  <Card.Text>
                    Revolutionize script building with cutting-edge AI prompt engineering, eliminating manual effort <br/><br/>

                    Automatically transform manual libraries into automated libraries with ease and efficiency<br/><br/>

                    Experience unparalleled efficiency with intelligent auto triage, which swiftly identifies and assigns defects
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
              <Ratio aspectRatio={8 / 14}>
                <Card.Img src={slide3}/>
                </Ratio>
                <Card.Body>
                  <Card.Title>Improve Accuracy</Card.Title>
                  <Card.Text>
Experience effortless precision by automatically generating test cases from your requirements and specifications <br/><br/>

Predict failures through advanced risk profiling and real-time monitoring of your application's behavior <br/><br/>

Validate your testing scope against production business flows in production with automated scanning, ensuring your testing is grounded in reality
</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
              <Ratio aspectRatio={8 / 14}>
                <Card.Img src={image4}/>
              </Ratio>
                <Card.Body>
                  <Card.Title>Business Focus</Card.Title>
                  <Card.Text>
                  Eliminate the traditional demand on business process owners during test scoping through integrating directly to process tools <br/><br/>

                  Swiftly check use cases have been covered in project documentation against process flows <br/><br/>

                  Release business capacity through reducing the competing project priorities
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Stack>
  );
};

export default Home;
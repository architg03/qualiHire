import React from "react";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/fade";
import Ratio from "react-bootstrap/Ratio";
import slide1 from "../Assets/image.jpg";
import slide2 from "../Assets/finger tap.jpg";
import slide3 from "../Assets/circle of code.jpg";
import image4 from "../Assets/AI.jpg"
import { Link } from "react-router-dom";

const home = () => {
  return (
    <Stack direction="vertical" gap={3}>
      <div style={{ marginTop: "50px" }}>
        <Card className="bg-dark text-white">
          <Ratio aspectRatio={12 / 36}>
            <Card.Img src={slide1} alt="background" style={{height:800, width:2500}} />
          </Ratio>
          <Fade in>
            <Card.ImgOverlay style={{ marginTop: "22%", marginLeft: "47%" }}>
              <Card.Title>
                <Fade in>
                  <h1>QualiHire</h1>
                </Fade>
              </Card.Title>
              <Card.Subtitle>AI Based Skill Mapping</Card.Subtitle>
              <div style={{ paddingTop: "1%" }}>
                <Link to="/signin">
                  <Button style={{ marginLeft: "0%" }}>Log In</Button>
                </Link>
                <Link to="/signin">
                  <Button style={{ marginLeft: "3%" }}>Sign up</Button>
                </Link>
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
          What is QualiHire?
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
                  <Card.Title>AI Driven</Card.Title>
                  <Card.Text>
                    QualiHire uses various AI based match engines to give you the best representation of candidate matches to a specific job requisition!
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
                  <Card.Title>Flexible</Card.Title>
                  <Card.Text>
                    Looking for a quantitative representation of a candidates skills? Look no further with our one of a kind score based skill mapping solution!
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
                  <Card.Title>Customized</Card.Title>
                  <Card.Text>QualiHire provides all your employee management data in one place. Sifting through large datasets is a thing of the past!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Stack>
  );
};

export default home;
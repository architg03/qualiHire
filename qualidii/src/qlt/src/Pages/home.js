import React from "react";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/fade";
import Ratio from "react-bootstrap/Ratio";
import slide1 from "../Assets/shutterstock_1617365701.jpg";
import slide2 from "../Assets/shutterstock_352324304.jpg";
import slide3 from "../Assets/shutterstock_1028004997 (1).jpg";
import image4 from "../Assets/shutterstock_762344239 (1).jpg"

const home = () => {
  return (
    <Stack direction="vertical" gap={3}>
      <div style={{ marginTop: "50px" }}>
        <Card className="bg-dark text-white">
          <Ratio aspectRatio={7 / 16}>
            <Card.Img src={slide1} alt="background" style={{}} />
          </Ratio>
          <Fade in>
            <Card.ImgOverlay style={{ marginTop: "17%", marginLeft: "10%" }}>
              <Card.Title>
                <Fade in>
                  <h1>QualiDII</h1>
                </Fade>
              </Card.Title>
              <Card.Subtitle>Ituitive. Intellegent. Data.</Card.Subtitle>
              <div style={{ paddingTop: "1%" }}>
                <Button>Log in</Button>
                <Button style={{ marginLeft: "3%" }}>Sign up</Button>
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
          What is QualiDII?
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
                  <Card.Title>Intuitive</Card.Title>
                  <Card.Text>
                    QualiDII provides all your test data in one place. No need to search through hundreds of tables to get what you want!
                  </Card.Text>
                </Card.Body>
              </Card>  
            </Col>
            <Col>
              <Card>
                <Card.Img src={slide3}/>
                <Card.Body>
                  <Card.Title>Intellegent</Card.Title>
                  <Card.Text>
                    Can't find data you are looking for? Request a Data Profile and we will find it for you!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img src={image4}/>
                <Card.Body>
                  <Card.Title>Data</Card.Title>
                  <Card.Text>Seemless, easy, self-service experience to meet your test data management needs!</Card.Text>
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

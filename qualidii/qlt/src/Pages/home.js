import React from "react";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slide1 from '../Assets/shutterstock_1617365701.jpg';
import slide2 from '../Assets/shutterstock_352324304.jpg';
import slide3 from '../Assets/shutterstock_1028004997 (1).jpg';

const home = () => {

    return (
        <Stack direction="vertical" gap={3}>
            <div>
                <Carousel pause="hover">
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={slide1}
                            alt="slide1"
                            height={'500px'}
                        />
                        <Carousel.Caption>
                            <h1>Welcome to QualiDII!</h1>
                            <p>Your one stop shop for test data management needs!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={slide2}
                            alt="slide2"
                            height={'500px'} />
                        <Carousel.Caption>
                            <h2>Find Defects</h2>
                            <p>Use our data to find defects in software</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src={slide3}
                            alt="slide3"
                            height={'500px'} />
                        <Carousel.Caption>
                            <h2>Trusted Data</h2>
                            <p>All data in use is protected and anonymous</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div><h2 style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "150px"
            }}>
                What is QualiDII?
            </h2></div>
            <Container>
                <Row style={{ height: "200px" }}>
                    <Col style={{
                        borderRadius: "5px",
                        borderBottomRightRadius: "30px",
                        backgroundColor: "#00A99D",
                        color: "whitesmoke",
                        fontWeight: "bold"
                    }}>
                        <p style={{ paddingTop: "10px" }}>
                            With QualiDII, you can have production-like data at the click of a button. We control access to the data, so you don't have to worry about it.
                        </p>
                    </Col>
                    <Col>
                        {/* <p style={{ paddingTop: "10px" }}>
                            One-Click checkout makes checking out data a snap! No need to manage access control, we do it for you!
                        </p> */}
                    </Col>
                    <Col style={{
                        borderRadius: "5px",
                        borderBottomLeftRadius: "30px",
                        backgroundColor: "#00A99D",
                        color: "whitesmoke",
                        fontWeight: "bold"
                    }}>
                        <p style={{ paddingTop: "10px" }}>
                            Self Service is a seemles, easy experience with QualiDII self service portal!
                        </p>
                    </Col>
                </Row>
                <Row style={{
                    backgroundColor: "#2a2559",
                    marginTop: "10px",
                    borderRadius: "5px"
                }}>
                    <Col md={{ span: 6, offset: 1 }} style={{ color: "whiteSmoke" }}>
                        <h2 >Data Profiles!</h2>
                        <p>With use of the data profile system, you can request specific test data for your project!</p>
                    </Col>
                </Row>
            </Container>
        </Stack>
    );
}

export default home;
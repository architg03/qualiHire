import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import { LinkContainer } from "react-router-bootstrap";
import linkin from "../Assets/linkedin-svgrepo-com.svg";
import fb from "../Assets/facebook-svgrepo-com.svg";
import tw from "../Assets/twitter-svgrepo-com (1).svg";
import './Footer.css';


const Footer = () => {
    return (
        <Container fluid bg="light">
            <Row>
                <Nav className="justify-content-center">
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/support">
                        <Nav.Link>Support</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Row>
            <Row>
                <Stack className="justify-content-center" direction="horizontal" gap={3}>
                    <a href="https://www.linkedin.com/company/qualitest" className="socials">
                        <img style={{ height: "30px" }} src={linkin} alt="linkedin" />
                    </a>
                    <a href="https://www.facebook.com/Qualitestgroup" className="socials">
                        <img style={{ height: "31px" }}
                            alt="FaceBook"
                            src={fb}
                        />
                    </a>
                    <a href="https://twitter.com/qualitest" className="socials">
                        <img style={{height:"30px"}}
                        alt="Twitter"
                        src={tw}
                        />
                    </a>
                </Stack>
            </Row>
            <div>
            </div>
        </Container>
    );
}

export default Footer;
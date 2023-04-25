import React from "react";
import NavB from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../Assets/Qualitest_Logo_RGB.svg";

const Navbar = (user) => {

    const SignInText = user ? "Sign Out" : "Sign In";

    return (
        <NavB collapseOnSelect fixed="top" bg="light" expand='md'>
            <Container fluid>
                <NavB.Brand>
                    <LinkContainer to="/home">
                        <Nav.Link>
                            <img alt="qlogo" src={logo} height="30px" className="d-inline-block align-top"></img>
                        </Nav.Link>
                    </LinkContainer>
                </NavB.Brand>
                <NavB.Toggle aria-controls='responsive-navbar-nav' />
                <NavB.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="">
//                            <NavDropdown.Item href="/productsearch">
//                                <LinkContainer to="/productsearch">
//                                    <Nav.Link>Company Search</Nav.Link>
//                                </LinkContainer>
//                            </NavDropdown.Item>
//                            <NavDropdown.Item>
//                                <LinkContainer to="/dataprofiles">
//                                    <Nav.Link>Data Profiles</Nav.Link>
//                                </LinkContainer>
//                            </NavDropdown.Item>
//                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-auto">
                        <a href="http://localhost:8501/"></a>
                        <LinkContainer to="">
                            <Nav.Link>{SignInText}</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </NavB.Collapse>
            </Container>
        </NavB>
    );
}

export default Navbar;
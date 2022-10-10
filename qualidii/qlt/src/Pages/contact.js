import React from "react";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import image from "../Assets/shutterstock_790399120.jpg"
import Navbar from "../Components/Navbar";


const Contact = () => {
    return (
        <Stack gap={3}>
            <div><Navbar /></div>
            <img src={image} style={{height: "500px"}} alt="header" />
            <Container fluid>
                <h1>Contact Us!</h1>
            </Container>
        </Stack>
    );
}

export default Contact;
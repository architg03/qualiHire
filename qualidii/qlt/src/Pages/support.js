import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";


const Support = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                    <Form.Text className="text-muted">
                        We use your email to follow up.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Description of problem</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Start typing..."/>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Support;
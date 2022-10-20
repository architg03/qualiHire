import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProfileCard = (props) => {

    return(
        <Container style={{border: "1px solid black"}}>
            <Row> 
                {props.title}
            </Row>
            <Row>
                {props.desc}
            </Row>

        </Container>
    );

}

export default ProfileCard;
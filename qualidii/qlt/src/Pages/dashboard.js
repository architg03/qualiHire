import React from "react";
import DataCard from "../Components/datacard";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../Components/dummyResponse.json";



const Dashboard = (props) => {

    let response = require('../Components/dummyResponse.json');


    const myDataCards = response.response.map((result) => {
        if (props.user.userId === result.userID) {
            return (
                <div key={result.id}>
                    <DataCard
                        {...result}
                        userLoggedIn={props.user}
                    />
                </div>);
        }
        return null;
    });

    return (
        <Container>
            <Row>
                <Col>
                    <Container>
                        <div style={{ height: "60px" }}></div>
                        <Container >
                            <h2>Data Checked Out</h2>
                            {myDataCards}
                        </Container>
                    </Container>
                </Col>
                <Col>
                    <div style={{ height: "60px" }}></div>
                    <Container>
                        <h2>My Data Profile Progress</h2>
                        <p>To be added</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );

}

export default Dashboard;
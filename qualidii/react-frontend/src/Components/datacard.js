import React from "react";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import DataCardButton from "./datacardbutton";

const DataCard = (props) => {

    //TODO: send request to server for locking of data
    return (
        <div style={{ padding: "5px" }}>
            <Stack style={{ width: "500px", height: "60px", borderRadius: "5px" }} direction="horizontal" className="border" gap={3}>
                <Col md={4} style={{ marginLeft: "10px", justifyContent: "center" }}>
                    <Row>
                        <div>
                            <Badge bg="secondary">
                                {props.token}
                            </Badge>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            {props.name}
                        </div>
                    </Row>
                </Col>
                <Col>
                </Col>
                <div className="ms-auto">
                    <DataCardButton
                        userLoggedIn={props.userLoggedIn}
                        productOwner={props.userID}
                        ownerName={props.user}
                    />
                </div>
            </Stack>
        </div>
    );
}

export default DataCard;
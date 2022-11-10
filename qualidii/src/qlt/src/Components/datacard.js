import React from "react";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import DataCardButton from "./datacardbutton";

const DataCard = (props) => {
    return (
        <div style={{ padding: "5px" }}>
            <Stack style={{ width: "500px", height: "60px", borderRadius: "5px" }} direction="horizontal" className="border" gap={3}>
                <Col md={4} style={{ marginLeft: "10px", justifyContent: "center" }}>
                    <Row>
                        <div>
                            <Badge bg="secondary">
                                {props.type}
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
                        productOwner={props.ownerID}
                        ownerName={props.user}
                        productId = {props.id}
                        productName={props.name}
                        productType={props.type}
                    />
                </div>
            </Stack>
        </div>
    );
}

export default DataCard;
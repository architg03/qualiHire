import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordian from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

const DataProfiles = () => {

    const profile = {
        profiles: [
            {
                UUID: 0,
                type: "Retail",
                returns: "A product with name and department",
                title: "Big Mart test data",
                desc: "Big Mart test items for online storefront."
            },
            {
                UUID: 1,
                type: "Bank",
                returns: "An account number, name, and balence",
                title: "Big Bank Maxing",
                desc: "Big bank test accounts for their new mobile application."
            }
        ]
    };

    const listProfiles = profile.profiles.map((profile) =>
        <div key={profile.UUID}>
            <Accordian.Item eventKey={profile.UUID}>
                <Accordian.Header>
                    {profile.title}
                    <Badge style={{marginLeft: "10px"}}>{profile.type}</Badge>
                </Accordian.Header>
                <Accordian.Body>
                    Description: {profile.desc}
                    <br/>
                    Returns: {profile.returns}
                </Accordian.Body>
            </Accordian.Item>
        </div>
    );


    return (
        <Container style={{ marginTop: "50px" }}>
            <Row>
                <Col>
                    <h2>Manage Profiles</h2>
                    <Accordian>
                        {listProfiles}
                    </Accordian>
                </Col>
                <Col>
                    <h2>Create Profiles</h2>
                    <p>Working on it...</p>
                </Col>
            </Row>
        </Container>
    );
}

export default DataProfiles;
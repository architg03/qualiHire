import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import NavBar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataCard from "../Components/datacard";
import SearchBar from "../Components/searchbar";
import "../Components/dummyResponse.json";


const Product = (props) => {

    const profileEx = {
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

    //dummy response and state management
    let response = require('../Components/dummyResponse.json');
    const [searchResult, setSearchResult] = useState(response);
    const [inputText, setInputText] = useState("");
    const [profile, setProfile] = useState(null);
    const [profiles, setProfiles] = useState(profileEx);

    //mapping response from json to data cards
    const listDataCards = searchResult.response.map((result) =>
        <div key={result.id}>
            <DataCard
                {...result}
                userLoggedIn={props.user}
            />
        </div>
    );

    return (
        <>
            <NavBar style={{
                backgroundColor: "#2a2559",
                color: "white",
                marginTop: "50px",
                zIndex: "9"
            }}
                fixed="top">
                <Container>
                    <Stack>
                        <p>QualiDII Product Search</p>
                        <SearchBar
                            inputText={inputText}
                            setInputText={setInputText}
                            profile={profile}
                            setProfile={setProfile}
                            profiles = {profiles}
                        />
                    </Stack>
                </Container>
            </NavBar>
            <Container fluid style={{ marginTop: "95px" }}>
                <Row>
                    <Col></Col>
                    <Col>
                        <p className="text-muted">Search Results:</p>
                        {listDataCards}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

export default Product;
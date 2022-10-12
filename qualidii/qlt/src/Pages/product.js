import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import NavBar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import DataCard from "../Components/datacard";
import SearchBar from "../Components/searchbar";
import "../Components/dummyResponse.json";


const Product = (props) => {

    //dummy response and state management
    let response = require('../Components/dummyResponse.json');
    const [searchResult, setSearchResult] = useState(response);
    const [inputText, setInputText] = useState("");

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
                        <p>1TDM Product Search</p>
                        <InputGroup size="sm" className="mb-3">
                            <SearchBar
                                inputText={inputText}
                                setInputText={setInputText}
                            />
                        </InputGroup>
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
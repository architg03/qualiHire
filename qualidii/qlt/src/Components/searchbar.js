import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from "react-bootstrap/Badge";


const SearchBar = ({ inputText, setInputText, profile, setProfile, profiles }) => {

let listProfiles;
try {
    listProfiles = profiles.profiles.map((p) =>
            <Dropdown.Item key={p.UUID} onClick={() => setProfile(p)}>
                {p.title}
                {" "}
                <Badge>{p.type}</Badge>
            </Dropdown.Item>    
        );
} catch(e) {
    console.log(e);
}
let onSearchSubmit = () => {
    var Tokens = inputText.toLowerCase().split(" ");
    var JsonTokens = JSON.stringify(Tokens);
    console.log(JsonTokens);
};

let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
};

return (
    <InputGroup size="sm" className="mb-3">
        <Dropdown>
            <Dropdown.Toggle variant="secondary">
                {profile != null ? profile.title : "Select Profile"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {listProfiles}
            </Dropdown.Menu>
        </Dropdown>
        <Form.Control
            onChange={inputHandler}
            placeholder="Enter search term"
            aria-label="productSearch"
            aria-describedby="basic-addon1"
        />

        <Button
            onClick={onSearchSubmit}
            variant="secondary"
            id="button-addon1"
            title="Search"
        >
            Search
        </Button>

    </InputGroup>
);
};

export default SearchBar; 

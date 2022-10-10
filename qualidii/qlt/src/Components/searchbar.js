import React from "react";
import Form from 'react-bootstrap/Form';
import SplitButton from 'react-bootstrap/SplitButton';
import Button from 'react-bootstrap/Button';


const SearchBar = ({ inputText, setInputText }) => {

    let onSearchSubmit = () => {
        //search logic would go here
        var Tokens = inputText.toLowerCase().split(" ");
        var JsonTokens = JSON.stringify(Tokens);
        console.log(JsonTokens);

        //NLP stemming test
    }

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    return (
        <>
            <Form.Control
                onChange={inputHandler}
                placeholder="Enter search term Ex: Drone"
                aria-label="productSearch"
                aria-describedby="basic-addon1"
            />

            <SplitButton
                onClick={onSearchSubmit}
                variant="secondary"
                id="button-addon1"
                title="Search"
                >
            
            </SplitButton>
        </>
    );
};

export default SearchBar; 

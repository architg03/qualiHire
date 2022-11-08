import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import DataCard from "../Components/datacard";
import SearchBar from "../Components/searchbar";
import "../API/axiosconfig";
import "../Components/dummyResponse.json";
import axios from "../API/axiosconfig";

const Product = (props) => {
  //result state management
  const [searchResult, setSearchResult] = useState([]);
  const [resultLoading, setResultLoading] = useState(true);

  //state held here, managed in searchbar
  const [inputText, setInputText] = useState("");

  //profiles fetched on page load,TODO: need to add handler to search within profile
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("products/search", {
        params: { productName: "", productType: "" },
      });
      setSearchResult(JSON.parse(result.request.response));
      setResultLoading(false);
    };
    getData();
  }, [profile]);

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const getProfiles = async () => {
      const result = await axios.get("profile/search", { data: { title: "" } });
      setProfiles(JSON.parse(result.request.response));
    };
    getProfiles();
  }, []);

  //API call to fetch all products on page load

  //some JSX to make the loading spinner look better
  const loadingPage = (
    <div style={{ padding: "100px", marginLeft: "20px" }}>
      <Spinner
        style={{ marginLeft: "40px" }}
        animation="border"
        variant="secondary"
      />
      <p className="text-muted">Fetching results...</p>
    </div>
  );

  //maps search data to data within profile
  const profileDataHandler = () => {
    //if user has a profile selected
    if (profile) {
      //force render objects
      setSearchResult(profile.data);
    }
  };

  //
  // try/catch for filtered results when searching within a profile or all data
  // TODO: return unfiltered after filtered results
  //
  let filterData;
  let listDataCards;
  try {
    profileDataHandler();
    filterData = searchResult.filter((el) => {
      if (inputText === "") {
        return el;
      } else {
        return el.name.toLowerCase().includes(inputText);
      }
    });

    //mapping response from json to data cards
    listDataCards = filterData.map((result) => (
      <div key={result.id}>
        <DataCard
          id={result.id}
          type={result.type}
          name={result.name}
          userLoggedIn={props.user.userID}
          ownerID={result.userID}
        />
      </div>
    ));
  } catch (e) {
    console.error(e);
  }

  return (
    <Container style={{ marginTop: "60px", paddingBottom: "50px" }}>
      <NavBar
        style={{
          backgroundColor: "#2a2559",
          color: "white",
          marginTop: "50px",
          zIndex: "9",
        }}
        fixed="top"
      >
        <Container>
          <Stack>
            <p>QualiDII Data Search</p>
            <SearchBar
              inputText={inputText}
              setInputText={setInputText}
              profile={profile}
              setProfile={setProfile}
              profiles={profiles}
            />
          </Stack>
        </Container>
      </NavBar>
      <Container fluid style={{ marginTop: "95px" }}>
        <Row>
          <Col></Col>
          <Col>
            <p className="text-muted">Search Results:</p>
            {resultLoading ? loadingPage : listDataCards}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Product;

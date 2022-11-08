import React from "react";
import {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import DataCard from "../Components/datacard";
import Container from "react-bootstrap/Container";
import axios from "../API/axiosconfig"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Dashboard = (props) => {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const checkData = async () => {
      const res = await axios.get("/users/search", {
        data: {firstName: `${props.user.fname}`, lName: `${props.user.lname}`}
      })
      const user = JSON.parse(res.request.response)[0];
      setProducts(user.products);
    }
    checkData();
  }, []);
 

  const myDataCards = products.map((product) => {
       return (
         <div key={product.id}>
           <DataCard 
           ownerID={props.user.userID}  
           userLoggedIn={props.user.userID}
           id={product.id}
           name={product.name}
           type={product.type}
            />
         </div>
      );
  });

  return (
    <Container style={{ marginTop: "60px", paddingBottom: "50px" }}>
      <Row>
        <Col>
          <Container>
            <div style={{ height: "60px" }}></div>
            <Container>
              <h2>My Data</h2>
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
};

export default Dashboard;

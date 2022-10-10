import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Stack from "react-bootstrap/esm/Stack";
import Container from "react-bootstrap/esm/Container";
import Home from "../Pages/home";
import Navbar from "./Navbar";
import Dashboard from "../Pages/dashboard";
import Support from "../Pages/support";
import Contact from "../Pages/contact";
import Product from "../Pages/product";
import SignIn from "../Pages/signin";
import DataProfiles from "../Pages/dataprofiles";


const NavbarController = () => {

  //Login Status must be tracked here, and passed down to pages
  let userLoggedIn = {
    userId: 0,
    userFName: "John",
    userLName: "Doe",
    data: [0, 5]
  }
  let noUser = {
    userId: null,
    userFName: null,
    userLName: null,
    data: null
  }

  const [user, setUser] = useState(userLoggedIn);

  return (
    <BrowserRouter>
      <Stack gap={3}>
        <Navbar />
        <Container style={{ marginTop: "60px", paddingBottom: "50px" }}>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/SignIn" element={<SignIn user={user} />} />
            <Route path="/contact" element={<Contact user={user} />} />
            <Route path="/support" element={<Support user={user} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/productsearch" element={<Product user={user} />} />
            <Route path="/dataprofiles" element={<DataProfiles user={user}/>}/>
          </Routes>
        </Container>
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default NavbarController;
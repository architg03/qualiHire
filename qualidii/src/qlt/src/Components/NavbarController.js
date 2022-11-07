import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
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
import axios from "../API/axiosconfig";




const NavbarController = () => {
  //Login Status must be tracked here, and passed down to pages
  const fetchUser = async () => {
    const res = await axios.get("users/search", {
      data: { firstName: "John", lastName: "Doe" },
    });
    setUser(JSON.parse(res.request.response)[0]);
  };

  const [user, setUser] = useState(fetchUser);

  return (
    <HashRouter style={{ backgroundColor: "whitesmoke" }}>
      <Stack gap={3}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/SignIn" element={<SignIn user={user} />} />
            <Route path="/contact" element={<Contact user={user} />} />
            <Route path="/support" element={<Support user={user} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/productsearch" element={<Product user={user} />} />
            <Route
              path="/dataprofiles"
              element={<DataProfiles user={user} />}
            />
          </Routes>
        <Footer />
      </Stack>
    </HashRouter>
  );
};

export default NavbarController;

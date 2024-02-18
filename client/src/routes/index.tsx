import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import AllCategory from "../views/home/AllCategory";
import Products from "../views/home/Products";
import { Box } from "@mui/material";
import Cart from "../components/cart/Cart";

const Index = () => {
  return (
    <Box height={"100vh"} >
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/categorys" element={<AllCategory />} />
          <Route path="/categorys/:categoryID" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default Index;

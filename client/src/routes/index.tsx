import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import AllCategory from "../views/categorys/AllCategory";
import Products from "../views/categorys/Products";
import { Box } from "@mui/material";
import Cart from "../components/cart/Cart";
import Product from "../views/categorys/Product";

const Index = () => {
  return (
    <Box  >
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/categorys" element={<AllCategory />} />
          <Route path="/categorys/:categoryID" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categorys/product/:productID" element={<Product/>} />
        </Route>
      </Routes>
    </Box>
  );
};

export default Index;

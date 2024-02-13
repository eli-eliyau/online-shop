import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Category from "../views/categorys/Category";
import { category } from "../config/card";
import Cards from "../components/cards/Cards";
import AllCategory from "../views/home/AllCategory";
import Products from "../views/home/Products";
import { Box } from "@mui/material";

const Index = () => {
  return (
    <Box height={'100vh'}>
    <Routes>
      {/* <Route path="/" element={<Outlet />} /> */}
      <Route path="/" element={<Home />}>
        <Route path="/categorys" element={<AllCategory />} />
        <Route path="/categorys/:categoryID"  element={<Products />}/>
        {/* <Route path="/categorys" element={<Cards data={category} />} /> */}
      </Route>
      {/* <Route index element={<Home />} /> */}
      {/* </Route> */}
    </Routes>
    </Box>
  );
};

export default Index;

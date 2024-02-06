import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import Category from "../views/categorys/Category";
import { category } from "../config/card";
import Cards from "../components/cards/Cards";

const Index = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Outlet />} /> */}
      <Route path="/" element={<Home />}>
        <Route path="/categorys/:categoryID"  />
        {/* <Route path="/categorys" element={<Cards data={category} />} /> */}
      </Route>
      {/* <Route index element={<Home />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default Index;

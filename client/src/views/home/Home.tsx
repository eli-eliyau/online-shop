import React from "react";
import Bar from "../../components/bars/Bar";
import { Box, Container } from "@mui/material";
import PlaygroundSpeedDial from "../../components/plus/PlaygroundSpeedDial";
import BasicPagination from "../../components/basicPagination/BasicPagination";
import BasicTabs from "../../components/basicTabs/BasicTabs";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import { category } from "../../config/card";

const Home = () => {
  

 
  return (
    <Box>
      <Bar />
      <BasicTabs />

      <Container>
        <Outlet />

        <PlaygroundSpeedDial />
        <BasicPagination />
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;

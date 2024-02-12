import React from "react";
import Bar from "../../components/bars/Bar";
import { Box, Container, Grid } from "@mui/material";
import PlaygroundSpeedDial from "../../components/plus/PlaygroundSpeedDial";
import BasicPagination from "../../components/basicPagination/BasicPagination";
import BasicTabs, { imges } from "../../components/basicTabs/BasicTabs";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import { category } from "../../config/card";
import ImageCarousel from "../../components/cards/ImageCarousel";

const Home = () => {
  return (<>
    
    <Box>
    <Bar />
      <BasicTabs />
     
      <Container>
        <Outlet />
        <PlaygroundSpeedDial />
        {/* <Footer /> */}
      </Container>
    </Box>
    </>
  );
};

export default Home;

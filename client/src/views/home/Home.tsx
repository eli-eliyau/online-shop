import React from "react";
import Bar, { StyledAppBar } from "../../components/bars/Bar";
import { Box, Container, Grid } from "@mui/material";
import PlaygroundSpeedDial from "../../components/plus/PlaygroundSpeedDial";
import BasicTabs from "../../components/basicTabs/BasicTabs";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

import Img from "../../components/cards/Img";
import ImageCarousel from "../../components/cards/ImageCarousel";

export const imges = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybe7R8Y4SoQoCPKD6WSDx4Y1CCfv8e4UUug&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPS3Eh81cDImUl-w7PC3GNPCnS3bQ-WjyB3w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qJFIoZNg8yNK3gOuheiELUdrMzTtF816rA&usqp=CAU",
];

const Home = () => {
 

  return (
    <Box sx={{ height: "100vh" }}>
      <StyledAppBar>
        <Bar />
        <BasicTabs />
      </StyledAppBar>
      <Box sx={{ mt: 19, height: "100%" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          width={"100%"}
          sx={{
            pt: 2,
            height: {
              xs: "50%",
              sm: "60%",
            },
          }}
        >
          <ImageCarousel images={imges} interval={8000} />
          {/* <Img /> */}

        </Grid>
        <Box sx={{ background: "#f1faee0" }}>
          <Container>
            <Outlet />
            <PlaygroundSpeedDial />
          </Container>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

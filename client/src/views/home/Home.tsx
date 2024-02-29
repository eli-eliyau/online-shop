import React from "react";
import Bar, { StyledAppBar } from "../../components/bars/Bar";
import { Box, Container, Grid } from "@mui/material";
import PlaygroundSpeedDial from "../../components/plus/PlaygroundSpeedDial";
import BasicTabs from "../../components/basicTabs/BasicTabs";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Gallery from "../../components/gallery/Gallery";
import Whtasapp from "../../components/buttons/Whatsapp";

export const imges = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybe7R8Y4SoQoCPKD6WSDx4Y1CCfv8e4UUug&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPS3Eh81cDImUl-w7PC3GNPCnS3bQ-WjyB3w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qJFIoZNg8yNK3gOuheiELUdrMzTtF816rA&usqp=CAU",
];

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledAppBar>
        <Bar />
        <BasicTabs />
      </StyledAppBar>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(221,190,168,0.9108018207282913) 100%)",
          flex: "1", 
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          width={"100%"}
          sx={{
       
            mt: 22,
          }}
        >
          <Gallery />
        </Grid>
        <Box>
          <Container>
            <Outlet />
            {/* <PlaygroundSpeedDial /> */}
            <Whtasapp />
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

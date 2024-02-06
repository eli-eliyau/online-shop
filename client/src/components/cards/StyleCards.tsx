import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Divider,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";


export const GridContainer = styled(Grid)`
  direction: 'column';
  justify-content: 'center';
  align-items: "center";
  padding-top: 2;

`;

export const StyledCard = styled(Card)({
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
});

export const StyledButtonWrapper = styled(Button)({
  width: "100%",
  textTransform: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

    // "&:hover": {
    //   backgroundColor: "green", // ניתן לשנות את הצבע כרצונך
    // },
    // "&:active": {
    //   backgroundColor: "red", // צבע לאחר לחיצה
    // },
});

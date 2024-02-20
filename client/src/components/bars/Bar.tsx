import React from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../assets/logo.png";
import CartButton from "../buttons/CartButton";
import SearchInput from "./SearchInput";
import { useRecoilValue } from "recoil";
import { cart } from "../../atom";
import { quantity } from "../../config/functions";

const Bar = () => {
  const getCart = useRecoilValue(cart);

  return (
    <Box
      sx={{
        background: "#fcc7b5",
      }}
    >
      <Container>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={3} md={4}>
              <SearchInput />
            </Grid>
            <Grid item xs={3} md={4} style={{ textAlign: "center" }}>
              <Typography variant="h6" component="div">
                <img src={Logo} alt="Logo" width={100} />
              </Typography>
            </Grid>
            <Grid item xs={3} md={4} style={{ textAlign: "left" }}>
              <CartButton cartItems={quantity(getCart)} />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </Box>
  );
};

export const StyledAppBar = styled(AppBar)`
  height: "10%";
  background: rgb(255, 255, 255);
  box-shadow: 0px 5px 10px rgb(255, 255, 255);
`;

export default Bar;

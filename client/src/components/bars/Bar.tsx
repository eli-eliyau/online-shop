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

const Bar = () => {
  let quantityProducts = 0;
  const getCart = useRecoilValue(cart);

  getCart?.forEach((element) => {
    quantityProducts += element.quantity;
  });
console.log(getCart);

  return (
    <Box
      sx={{
        background: "rgb(253, 239, 205)",
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
              <CartButton cartItems={quantityProducts} />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </Box>
  );
};

export const StyledAppBar = styled(AppBar)`
  /* position: fixed; */
  background: rgb(255, 255, 255);
  box-shadow: 0px 5px 10px rgb(255, 255, 255);
`;

export default Bar;

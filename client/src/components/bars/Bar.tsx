import React from "react";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../assets/logo.png";
import CartButton from "../buttons/CartButton";
import SearchInput from "./SearchInput";
import { cartButton } from "../../config/buttons";
import BasicTabs from "../basicTabs/BasicTabs";
import { useRecoilValue } from "recoil";
import { cart } from "../../atom";

const Bar = () => {
  let quantityProducts=0
  const getCart =useRecoilValue(cart)
  
      getCart.forEach(element => {
    quantityProducts+=element.amount
   })

  return (
    <StyledAppBar>
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
    

    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  position: sticky;
  background: rgba(253, 239, 205, 0.676);
  box-shadow: 0px 5px 10px rgb(255, 255, 255);
`;

export default Bar;

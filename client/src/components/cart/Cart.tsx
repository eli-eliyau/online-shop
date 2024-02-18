import { Grid, Typography } from "@mui/material";
import React from "react";
import Cards from "../cards/Cards";
import { cart } from "../../atom";
import { useRecoilValue } from "recoil";
import { quantity, totalPrice } from "../../config/functions";

const Cart = () => {
  const getCart = useRecoilValue(cart);

  return (
    <div>
      <h1>עגלת קניות</h1>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sm={12}
        sx={{ background: "#ffffffbc",pb:4 }}
      >
        <Typography sx={{pr:2}}>{` כמות מוצרים:${quantity(getCart)}`}</Typography>
        <Typography>{`לתשלום:${totalPrice(getCart)} ש"ח`}</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        spacing={2}
      >
        {getCart.map((e, i) => {
          return (
            <Grid
              item
              xs={6}
              sm={3}
              width={"0%"}
              //   sx={{ background: "#f5c3c3" }}
            >
              <Cards data={e} key={i} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cart;

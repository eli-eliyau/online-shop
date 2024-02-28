import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Cards from "../../components/cards/Cards";
import { cart } from "../../atom";
import { useRecoilValue } from "recoil";
import { quantity, totalPrice } from "../../config/functions";
import Title from "../../components/title/Title";

const Cart = () => {
  const getCart = useRecoilValue(cart);
  const productsRef = useRef<HTMLDivElement>(null); // יצירת הרפרנס של הקומפוננטה

  // useEffect(() => {
  //   if (productsRef.current) {
  //     productsRef.current.scrollIntoView({ behavior: "smooth" }); // מעבר לקומפוננטה בצורה אוטומטית כאשר היא מתרנדרת
  //   }
  // }, []);

  return (
    <Box sx={{ pt: 5}}>
      <Title name="עגלת קניות" />
      <Grid container direction="row" spacing={2}>
        {getCart.map((e, i) => {
          return (
            <Grid item xs={6} sm={3} key={i}>
              <Cards data={e} key={i} />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
        sx={{ pt: 4 ,  fontWeight: "bold"}}
      >
        <Typography sx={{color:'#273e47de'}} variant="inherit">{` כמות מוצרים:${quantity(
          getCart
        )}`}</Typography>
        <Typography sx={{ color:'#273e47de',pt:2}} variant="inherit">{`לתשלום:${totalPrice(
          getCart
        )} ש"ח`}</Typography>
      </Grid>
    </Box>
  );
};

export default Cart;

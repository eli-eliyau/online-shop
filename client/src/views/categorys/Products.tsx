import { Box, Grid, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { IProduct } from "../../config/interface";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_SERVER } from "../../App";
import { GridContainer } from "../../components/cards/StyleCards";
import Cards from "../../components/cards/Cards";

const Products = () => {
  const [products, setProducts] = React.useState<IProduct[]>();
  const { categoryID } = useParams();
  const productsRef = useRef<HTMLDivElement>(null); // יצירת הרפרנס של הקומפוננטה

  useEffect(() => {
    const cleanId = categoryID?.split(":")[1];
    categoryID &&
      axios
        .post(`${API_SERVER}/getCategoryProducts`, { categoryId: cleanId })
        .then((res) => {
          res.data && setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [categoryID]);

  useEffect(() => {
    if (productsRef.current && products && products.length > 0) {
      const lastBox = productsRef.current.querySelector('div.MuiBox-root:last-child');
      if (lastBox) {
        lastBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [products]);

  return (
    <Box sx={{mt:5}}>
       <Typography
        variant="h4"
        sx={{
          textShadow: " 2px 2px 5px #a51d1d96, 0px 7px 8px #ffffff",
          fontWeight: 'bold'
        }}
        color={"#A51D1D"}
      >{`${products?.[0]?.nameCategory}`}</Typography>

      <Grid container spacing={2} ref={productsRef}>
        {products?.map((e, i) => (
          <GridContainer item xs={6} sm={4} md={3} key={i}>
            <Cards data={e} key={i}/>
          </GridContainer>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;

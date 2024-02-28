import { Box, Grid, Grow, Slide, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { IProduct } from "../../config/interface";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_SERVER } from "../../App";
import { GridContainer } from "../../components/cards/StyleCards";
import Cards from "../../components/cards/Cards";
import Title from "../../components/title/Title";
import Skeletons from "../../components/cards/Skeletons";

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

  // useEffect(() => {
  //   if (productsRef.current && products && products.length > 0) {
  //     const lastBox = productsRef.current.querySelector(
  //       "div.MuiBox-root:last-child"
  //     );
  //     if (lastBox) {
  //       lastBox.scrollIntoView({ behavior: "smooth", block: "center" });
  //     }
  //   }
  // }, [products]);



  return (
    <Box sx={{ mt: 5,pb:2 }}>
      <Title name={products?.[0]?.nameCategory} />
      <Grid container spacing={2} ref={productsRef}>
        {products ? (
          products.map((e, i) => (
            <Grow
              key={i}
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              timeout={1000}
            >
              <GridContainer item xs={6} sm={4} md={3}>
                <Cards data={e} />
              </GridContainer>
            </Grow>
          ))
        ) : (
          <Skeletons num={12} />
        )}
      </Grid>
    </Box>
  );
};

export default Products;

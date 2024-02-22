import { Box, Grid } from "@mui/material";
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
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" }); // מעבר לקומפוננטה בצורה אוטומטית כאשר היא מתרנדרת
    }
  }, [products]);

  return (
    <Box>
      <h1>{`${products?.[0]?.nameCategory}`}</h1>

      <Grid container spacing={2} ref={productsRef}>
        {products?.map((e, i) => (
          <GridContainer item xs={12} sm={4} md={3} key={i}>
            <Cards data={e} key={i}/>
          </GridContainer>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;

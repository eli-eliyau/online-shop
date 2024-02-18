import { Box, Grid } from "@mui/material";
import React from "react";
import { IProducts } from "../../config/interface";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_SERVER } from "../../App";
import { GridContainer } from "../../components/cards/StyleCards";
import Cards from "../../components/cards/Cards";

const Products = () => {
  const [products, setProducts] = React.useState<IProducts[]>();
  const { categoryID } = useParams();
  
  React.useEffect(() => {
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
  
  return (
    <Box  >
      <h1>{`${products?.[0]?.nameCategory}`}</h1>

      <Grid container spacing={2}>
        {products?.map((e, i) => (
          <GridContainer item xs={12} sm={4} md={3} key={i}>
            <Cards data={e} />
          </GridContainer>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;

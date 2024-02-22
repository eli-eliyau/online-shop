import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import QuantitySelection from "../../components/buttons/QuantitySelection";
import { useSetRecoilState } from "recoil";
import { cart } from "../../atom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_SERVER } from "../../App";
import { IProduct } from "../../config/interface";

const Product = () => {
  const [product, setProduct] = useState<IProduct>();
  const setPushCart = useSetRecoilState(cart);
  const navigate = useNavigate();
  const { productID } = useParams();

  useEffect(() => {
    const cleanId = productID?.split(":")[1];
    productID &&
      axios
        .post(`${API_SERVER}/getProduct`, { productId: cleanId })
        .then((res) => {
          res.data && setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [productID]);

  const addCart = (quantity: number) => {
    let newProduct = {};
    if (product) {
      newProduct = {
        id: Math.floor(Math.random() * 1000000).toString(),
        name: product.name,
        img: product.img,
        categoryId: product.categoryId,
        productId: product.id,
        price: product.price,
        quantity,
      };
      setPushCart((prevCart: any) => {
        if (Array.isArray(prevCart)) {
          return [...prevCart, newProduct];
        } else {
          console.error("prevCart is not an array");
          return prevCart;
        }
      });
    }
  };
  //     else if("quantity" in data){
  //       setPushCart((prevCart) =>
  //     prevCart.map((product) =>
  //       product.id === data.id ? { ...product, quantity: quantity } : product
  //     )
  //   );
  //     }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={6} sx={{ background: "red" }}></Grid>
      <Grid item xs={6} sx={{ background: "red" }}>
        <h1>מוצר</h1>
        <QuantitySelection onQuantity={addCart} />
      </Grid>
    </Grid>
  );
};

export default Product;

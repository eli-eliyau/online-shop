import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import QuantitySelection from "../../components/buttons/QuantitySelection";
import { useSetRecoilState } from "recoil";
import { cart } from "../../atom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_SERVER } from "../../App";
import { IProduct } from "../../config/interface";
import Img from "../../components/gallery/Img";
import Title from "../../components/title/Title";

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
          console.log(res.data);
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
      // alignItems="center"
      sx={{ pt: 5 }}
    >
      <Grid item xs={6}>
      <Title name={product?.name} />
       

        <Img img={product?.img} />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        xs={6}
        sx={{ background: "#ffffff" }}
      >
        <Typography
          variant="h6"
          sx={{
            textShadow: " 2px 2px 5px #a51d1d96, 0px 7px 8px #ffffff",
            fontWeight: "bold",
            textAlign:"center"
          }}
          color={"#A51D1D"}
        >{`תיאור המוצר ${product?.name}`}</Typography>
        <QuantitySelection onQuantity={addCart} />
      </Grid>
    </Grid>
  );
};

export default Product;

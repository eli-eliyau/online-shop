import React from "react";
import { Typography, Grid, CardMedia, Box } from "@mui/material";
import QuantitySelection from "../buttons/QuantitySelection";
import { useSetRecoilState } from "recoil";
import { ICart, cart } from "../../atom";
import { useNavigate } from "react-router-dom";
import { ICategory, IProduct } from "../../config/interface";

interface IProps {
  data: ICategory | IProduct | ICart;
}

const Cards = ({ data }: IProps) => {
  const setPushCart = useSetRecoilState(cart);
  const navigate = useNavigate();

  const addCart = (quantity: number) => {
    if ("nameCategory" in data) {
      const newProduct = {
        id: Math.floor(Math.random() * 1000000).toString(),
        name: data.name,
        img: data.img,
        categoryId: data.categoryId,
        productId: data.id,
        price: data.price,
        quantity,
      };

      setPushCart((prevCart) => {
        if (Array.isArray(prevCart)) {
          return [...prevCart, newProduct];
        } else {
          console.error("prevCart is not an array");
          return prevCart;
        }
      });
    } else if ("quantity" in data) {
      setPushCart((prevCart) =>
        prevCart.map((product) =>
          product.id === data.id ? { ...product, quantity: quantity } : product
        )
      );
    }
  };

  const handleCategoryClick = (id: string) => {
    !("categoryId" in data) && navigate(`/categorys/:${id}`);
    "nameCategory" in data && navigate(`/categorys/product/:${id}`);
  };

  return (
    <Box
      sx={{
        borderRadius: "15px",
        background: "#ffffff",
        height: "100%",
        // border: "1px solid #237979",
        boxShadow:"10px 7px 17px -3px rgba(207,150,150,0.79)",


      }}
    >
      <Box onClick={() => handleCategoryClick(data.id)}>
        <CardMedia
          component="img"
          alt="תיאור תמונה"
          sx={{
            objectFit: "cover",
            borderRadius: "15px 15px 0px 0px",
            height: "auto",
            width: "100%",
          }}
          src={`data:image/png;base64,${data.img}`}
        />
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ pt: 2 }}
        >
          <Typography variant="inherit" sx={{fontWeight: 'bold'}}  color={"#A51D1D"} textAlign="center">
            {data.name}
          </Typography>

          {"price" in data && (
            <Typography variant="inherit" sx={{fontWeight: 'bold'}} color={"#A51D1D"} textAlign="center">
              {`${data.price} $`}
            </Typography>
          )}
        </Grid>
      </Box>
      {"nameCategory" in data && <QuantitySelection onQuantity={addCart} />}
      {"quantity" in data && (
        <QuantitySelection onQuantity={addCart} quantity={data.quantity} />
      )}
    </Box>
  );
};

export default Cards;

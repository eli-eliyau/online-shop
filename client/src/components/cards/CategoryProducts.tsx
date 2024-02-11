import React, { useState } from "react";
import {
  Typography,
  Grid,
  Divider,
  CardContent,
  CardMedia,
  Box,
  Card,
} from "@mui/material";
import { GridContainer, StyledButtonWrapper } from "./StyleCards";
import QuantitySelection from "../buttons/QuantitySelection";
import { useSetRecoilState } from "recoil";
import { cart } from "../../atom";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useNavigate } from "react-router-dom";
import { ICategory, IProducts } from "../../config/interface";

interface IProps {

  data: ICategory | IProducts;
}

const Cards2 = ({ data }: IProps) => {

  const pushCart = useSetRecoilState(cart);
  const navigate = useNavigate();

  const addCart = (quantity: number) => {
    if ("categoryId" in data) {
      const newProduct = {
        id: Math.floor(Math.random() * 1000000).toString(),
        categoryId: data.categoryId,
        productId: data.id,
        quantity,
      };
      pushCart((prevCart) => [...prevCart, newProduct]);
    }
  };

  const handleCategoryClick = (id: string) => {
    navigate(`/categorys/:${id}`);
  };

  return (
    <Box sx={{  borderRadius: "15px",background: "#edecebc5" ,height:'100%' }}>
      <Box  onClick={() => handleCategoryClick(data.id)}>
        <CardMedia
          component="img"
          alt="תיאור תמונה"
          sx={{
            objectFit: "cover",
            borderRadius: "15px",
            height: "auto",
            width: '100%',
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
          <Typography variant="h5" textAlign="center">
            {data.name}
          </Typography>

          {"price" in data && (
            <Typography variant="h5" textAlign="center">
              {`${data.price} $`}
            </Typography>
          )}
        </Grid>
      </Box>
      {"categoryId" in data && <QuantitySelection onQuantity={addCart} />}
    </Box>
  );
};

export default Cards2;

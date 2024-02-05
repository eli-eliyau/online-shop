import React, { useState } from "react";
import {
  Typography,
  Grid,
  Divider,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { GridContainerS, StyledButtonWrapper } from "./StyleCards";
import { useNavigate } from "react-router-dom";
import BasicSpeedDial from "../plus/PlaygroundSpeedDial";
import QuantitySelection from "../buttons/QuantitySelection";
import { useSetRecoilState } from "recoil";
import { cart } from "../../atom";

interface IProps {
  data: {
    id: string;
    name: string;
    img: string;
    categoryId?: string;
    price?: number;
  }[];
}

const Cards = ({ data }: IProps) => {
  const navigate = useNavigate();
  const pushCart = useSetRecoilState(cart);
  const [index, setIndex] = useState(0);

  const addCart = (amount: number) => {
    if (data[index].categoryId) {
      const newProduct = {
        id: Math.floor(Math.random() * 1000000).toString(),
        categoryId: data[index].categoryId,
        productId: data[index].id,
        amount,
      };
      pushCart((prevCart) => [...prevCart, newProduct]);
    }
  };

  const handleCategoryClick = (id: string, i: number) => {
    setIndex(i);
    navigate(`/categorys/:${id}`);
  };

  return (
    <Grid container spacing={2}>
      {data.map((e, i) => (
        <GridContainerS item xs={12} sm={4} md={3} key={i}>
          <StyledButtonWrapper onClick={() => handleCategoryClick(e.id, i)}>
            <CardMedia
              component="img"
              alt="תיאור תמונה"
              sx={{
                objectFit: "cover",
                borderRadius: "5%",
                height: "auto",
                width: 100,
              }}
              src={`data:image/png;base64,${e.img}`}
            />
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" textAlign="center">
                  {e.name}
                </Typography>
                <Typography variant="h5" textAlign="center">
                  {`${e.price} $`}
                </Typography>
              </Box>
              <QuantitySelection amount={addCart} />
            </CardContent>
          </StyledButtonWrapper>
        </GridContainerS>
      ))}
    </Grid>
  );
};

export default Cards;

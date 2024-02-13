import React from "react";
import { Typography, Grid, CardMedia, Box } from "@mui/material";
import QuantitySelection from "../buttons/QuantitySelection";
import { useSetRecoilState } from "recoil";
import { cart } from "../../atom";
import { useNavigate } from "react-router-dom";
import { ICategory, IProducts } from "../../config/interface";

interface IProps {
  data: ICategory | IProducts;
}

const Cards = ({ data }: IProps) => {
  const setPushCart = useSetRecoilState(cart);
  const navigate = useNavigate();

  const addCart = (quantity: number) => {
    if ("categoryId" in data) {
      const newProduct = {
        id: Math.floor(Math.random() * 1000000).toString(),
        categoryId: data.categoryId,
        productId: data.id,
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
    }
  };

  const handleCategoryClick = (id: string) => {
    !("categoryId" in data) && navigate(`/categorys/:${id}`);
  };

  return (
    <Box sx={{ borderRadius: "15px", background: "#edecebc5", height: "100%" }}>
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

export default Cards;

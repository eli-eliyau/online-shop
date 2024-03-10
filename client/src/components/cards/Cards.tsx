import React from "react";
import { Typography, Grid, CardMedia, Box, Grow } from "@mui/material";
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
      quantity !== 0
        ? setPushCart((prevCart) =>
            prevCart.map((product) =>
              product.id === data.id
                ? { ...product, quantity: quantity }
                : product
            )
          )
        : setPushCart((prevCart) =>
            prevCart.filter(
              (product) => product.id !== data.id || quantity !== 0
            )
          );
    }
  };

  const handleCategoryClick = (id: string) => {
    const element = document.querySelector(".MuiBox-root:last-child");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    !("categoryId" in data) && navigate(`/categorys/:${id}`);
    "nameCategory" in data && navigate(`/categorys/product/:${id}`);
  };

  return (
    <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
      <Box
        sx={{
          backdropFilter: "blur(5px)",
          borderRadius: "15px",
          background: "#ffffff",
          height: "100%",
          boxShadow: "10px 7px 17px -3px rgba(207,150,150,0.79)",
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
            sx={{ p: 1 }}
          >
            <Typography
              variant="inherit"
              sx={{ fontWeight: "bold" }}
              color={"#273e47"}
              textAlign="center"
            >
              {data.name}
            </Typography>

            {"price" in data && (
              <Typography
                variant="inherit"
                sx={{ fontWeight: "bold" }}
                color={"#273e47"}
                textAlign="center"
              >
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
    </Grow>
  );
};

export default Cards;

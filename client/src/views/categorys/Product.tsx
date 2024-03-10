import { Box, Grid, Grow, Typography } from "@mui/material";
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
import { LayoutGrid } from "../../components/gallery/layoutGrid";

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
const img = [
  {
    id: 1,
    content:'123',
    className: '',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1_M6ZSxrdMfK0B3bJk43tmU1blRO1r_-pg&usqp=CAU'
  },
  {
    id: 2,
    content:'123',
    className: '',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1_M6ZSxrdMfK0B3bJk43tmU1blRO1r_-pg&usqp=CAU'
  },
  {
    id: 3,
    content:'123',
    className: '',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1_M6ZSxrdMfK0B3bJk43tmU1blRO1r_-pg&usqp=CAU'
  }
]
  return (
    <Box>
      <Grow in={true} style={{ transformOrigin: "0 0 0", }} timeout={1000}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          sx={{ pt: 5, pb: 2 }}
        >
          <Grid item xs={6} >
          
          {/* <LayoutGrid cards={img}></LayoutGrid> */}
            <Img img={product?.img} />
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            xs={6}
            
          >
            <Grid
              item
              width={"80%"}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",  
                backdropFilter: "blur(5px)", 
                borderRadius: "15px", 
                padding: "20px", 
              }}
            >
                <Title name={product?.name} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                color={"#273e47de"}
              >{`תיאור המוצר`}</Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                }}
                color={"#273e47de"}
              >{`${product?.name}`}</Typography>
            </Grid>
            <QuantitySelection onQuantity={addCart} />
          </Grid>
        </Grid>
      </Grow>
    </Box>
  );
};

export default Product;

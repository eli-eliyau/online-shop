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

interface IProps {
  onTabs?:Function
  data: {
    id: string;
    name: string;
    img: string;
    categoryId?: string;
    price?: number;
  }[];
}

const Cards = ({ data,onTabs }: IProps) => {
  // console.log(data);
  
  const pushCart = useSetRecoilState(cart);
  const navigate = useNavigate()
  const [index, setIndex] = useState(0);


  
  const addCart = (quantity: number) => {
    console.log(data[index].categoryId);

    if ( data[index].categoryId) {
      const newProduct = {
        id: Math.floor(Math.random() * 1000000).toString(),
        categoryId: data[index].categoryId,
        productId: data[index].id,
        quantity,
      };
      pushCart((prevCart) => [...prevCart, newProduct]);
    }
  };

  const handleCategoryClick = (id: string, i: number) => {
    navigate(`/categorys/:${id}`);
    setIndex(i);
    onTabs &&  onTabs(i+1)
  };

  return (
    <Grid container spacing={2}>
      {data.map((e, i) => (
        <GridContainer
          item
          xs={12}
          sm={4}
          md={3}
          key={i}
        >
          <Card style={{background:"#edecebc5"}}>
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
            {/* <CardContent> */}
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{pt:2}}
              >
                <Typography variant="h5" textAlign="center">
                  {e.name}
                </Typography>
                
                {data[0].categoryId && (
                  <Typography variant="h5" textAlign="center">
                    {`${e.price} $`}
                  </Typography>
                )}
              </Grid>
            {/* </CardContent> */}
          </StyledButtonWrapper>
          {data[0].categoryId && <QuantitySelection onQuantity={addCart} />}
          </Card>
        </GridContainer>
      ))}
    </Grid>
  );
};

export default Cards;

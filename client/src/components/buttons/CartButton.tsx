import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

interface CartButtonProps {
  cartItems: number;
}

const CartButton = ({ cartItems }: CartButtonProps) => {
  const navigate = useNavigate();

  return (
    <IconButton
      color="inherit"
      size="large"
      sx={{color:'#ffffff'}}
      onClick={() =>{
        navigate("/cart")
        const element = document.querySelector(".MuiBox-root:last-child"); 
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
       }}
    >
      <Badge badgeContent={cartItems}  color="info" max={1000}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartButton;

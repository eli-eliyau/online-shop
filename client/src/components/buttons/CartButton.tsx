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
      sx={{ background: "#e63946" }}
      onClick={() => navigate("/cart")}
    >
      <Badge badgeContent={cartItems} color="error" max={1000}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartButton;

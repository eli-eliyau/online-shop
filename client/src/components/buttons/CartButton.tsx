import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRecoilValue } from "recoil";
import { ICart, cart } from "../../atom";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

interface CartButtonProps {
  // cartItems: CartItem[];
  cartItems: number;
}

const CartButton = ({ cartItems }:CartButtonProps) => {
  // const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);




  return (
    <IconButton color="inherit"  size="large"  sx={{background:'#a71f1f'}}>
      <Badge badgeContent={cartItems} color="error" max={1000}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartButton;

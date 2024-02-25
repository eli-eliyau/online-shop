import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface IProps {
  onQuantity: any;
  quantity?: number;
}

const QuantitySelection = ({ onQuantity, quantity }: IProps) => {
  const [count, setCount] = React.useState(quantity ? quantity : 0);

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 1,
        mb: 1,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 1 }}
      >
        <Button
          aria-label="reduce"
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }}
          sx={{ color: "#A51D1D" }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        {quantity !== undefined && (
          <Badge
            color="secondary"
            badgeContent={count}
            showZero={false}
            sx={{ p: 1 }}
          >
            <ProductionQuantityLimitsIcon />
            {/* <AddShoppingCartIcon /> */}
          </Badge>
        )}
        <Button
          aria-label="increase"
          onClick={() => {
            setCount(count + 1);
          }}
          sx={{
            color: "#A51D1D",
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
        <Button
          variant="outlined"
          aria-label="increase"
          onClick={() => {
            count > 0 && onQuantity(count);
            quantity ? setCount(count) : setCount(0);
          }}
          sx={{
            background: "#a51d1d9a",
            color: "#ffffff",
            "&:hover": {
              color: "#A51D1D",
              border: "1px solid #237979",
            },
            "& .MuiTab-root.Mui-selected": {
              border: "2px solid #237979", // צבע הטקסט כאשר התווית נבחרת
            },
          }}
        >
          {quantity ? (
            "שמור שינוי"
          ) : (
            <Badge
              color="secondary"
              badgeContent={count}
              showZero={false}
              sx={{ p: 1 }}
            >
              <AddShoppingCartIcon />
            </Badge>
          )}
        </Button>
      </Grid>
    </Box>
  );
};

export default QuantitySelection;

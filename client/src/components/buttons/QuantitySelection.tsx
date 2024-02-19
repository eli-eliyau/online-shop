import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Grid } from "@mui/material";

interface IProps {
  onQuantity:any;
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
          sx={{ color: "#3a5069"}}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Badge
          color="secondary"
          badgeContent={count}
          showZero={false}
          sx={{ p: 1 }}
        >
          <ProductionQuantityLimitsIcon />
        </Badge>
        <Button
          aria-label="increase"
          onClick={() => {
            setCount(count + 1);
          }}
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: "#3950e6", // צבע הטקסט כאשר התווית נבחרת
            },
           
         
            color: "#3a5069"
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </Grid>
      <Button
        variant="outlined"
        aria-label="increase"
        onClick={() => {
          count > 0 && onQuantity(count)
          quantity  ? setCount(count) : setCount(0)
        }}
        sx={{background:'#3a5069' , color:'#ffffff',
        '&:hover': { 
          color:'#3a5069'
        },
      }}
      >
        {quantity ? "שמור שינוי" : "הוסף לסל"}
      </Button>
    </Box>
  );
};

export default QuantitySelection;

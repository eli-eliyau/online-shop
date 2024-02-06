import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

interface IProps {
  quantity: Function;
}

const QuantitySelection = ({ quantity }: IProps) => {
  const [count, setCount] = React.useState(0);

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
        mb: 2,

        
       
      }}
    >
        <Badge
          color="secondary"
          badgeContent={count}
          showZero={false}
          sx={{ pb: 1 }}
        >
          <ProductionQuantityLimitsIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
              quantity(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
              quantity(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {          
              quantity(count);
              setCount(0)
            }}
          >
            הוסף לסל
          </Button>
        </ButtonGroup>
    </Box>
  );
};

export default QuantitySelection;

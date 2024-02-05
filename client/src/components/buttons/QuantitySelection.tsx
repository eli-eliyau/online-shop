import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

interface IProps {
  amount: Function;
}

const QuantitySelection = ({ amount }: IProps) => {
  const [count, setCount] = React.useState(0);

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 2,

        "& > *": {
          //   marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <div>
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
              amount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
              amount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </Box>
  );
};

export default QuantitySelection;

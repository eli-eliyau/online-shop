import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  name: string | undefined;
}

const Title = ({ name = "" }: IProps) => {
  return (
    <Typography
      textAlign={"center"}
      sx={{
        fontSize: {
          xs: "1.5rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
          xl: "3rem",
        },
        fontWeight: "bold",
        mb: 2,
      }}
      color={"#273e47de"}
    >{`${name}`}</Typography>
  );
};

export default Title;

import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

interface IProps {
  buttons: string[];
}

const ButtonContainer = ({ buttons }: IProps) => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        
      >
        {buttons.map((elemnt, index) => {
          return (
            <Grid item key={index}>
              <StyledButton variant="contained" style={{ margin: "8px" }}>
                {elemnt}
              </StyledButton>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export const StyledButton = styled(Button)`
  border-radius: 40px 40px 40px 40px;
  transition: background-color 0.3s ease, border 0.3s ease;
  background-color: #a0a5a1;

  &:hover {
    background-color: #00000071;
    /* border: 2px solid red; */
  }
`;
export default ButtonContainer;

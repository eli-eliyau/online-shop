import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { API_SERVER } from "../../App";
import { ICategory } from "../../config/interface";
import { Box, Grid, Typography } from "@mui/material";
import { GridContainer } from "../../components/cards/StyleCards";
import Cards2 from "../../components/cards/Cards";
import { useRecoilState, useRecoilValue } from "recoil";
import { indexTab } from "../../atom";

const AllCategory = () => {
  const isMounted = React.useRef(true);
  const navigate = useNavigate();
  const [tabs, setTabs] = React.useState<ICategory[]>();
  const [iTab, setITab] = useRecoilState(indexTab);

  React.useEffect(() => {
    if (isMounted.current) {
      axios
        .get(`${API_SERVER}/getCategoryTabs`)
        .then((res) => {
          res.data && setTabs(res.data);
        })
        .catch((err) => console.log(err));
      isMounted.current = false;
    }
  }, []);

  return (
    <Box sx={{pt:5}}>
      <Typography
        variant="h4"
        sx={{
          textShadow: " 2px 2px 5px #a51d1d96, 0px 7px 8px #ffffff",
          fontWeight: 'bold'
        }}
        color={"#A51D1D"}
      >
        כל הבלונים
      </Typography>

      <Grid container spacing={2}>
        {tabs &&
          iTab === 0 &&
          tabs.map((e, i) => {
            return (
              <GridContainer
                item
                xs={12}
                sm={4}
                md={3}
                key={i}
                onClick={() => setITab(i + 1)}
              >
                <Cards2 data={e} />
              </GridContainer>
            );
          })}
      </Grid>
    </Box>
  );
};

export default AllCategory;

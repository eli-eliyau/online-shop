import axios from "axios";
import React from "react";
import { API_SERVER } from "../../App";
import { ICategory } from "../../config/interface";
import { Box, Grid, Typography } from "@mui/material";
import { GridContainer } from "../../components/cards/StyleCards";
import Cards2 from "../../components/cards/Cards";
import { useRecoilState } from "recoil";
import { indexTab } from "../../atom";
import Title from "../../components/title/Title";

const AllCategory = () => {
  const isMounted = React.useRef(true);
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
    <Box sx={{ pt: 5 }}>
      <Title name="כל הבלונים" />
      <Grid container spacing={2}>
        {tabs &&
          iTab === 0 &&
          tabs.map((e, i) => {
            return (
              <GridContainer
                item
                xs={6}
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

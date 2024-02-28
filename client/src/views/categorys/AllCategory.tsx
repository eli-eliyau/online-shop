import axios from "axios";
import React from "react";
import { API_SERVER } from "../../App";
import { ICategory } from "../../config/interface";
import { Box, Grid, Grow, Skeleton, Typography } from "@mui/material";
import { GridContainer } from "../../components/cards/StyleCards";
import Cards from "../../components/cards/Cards";
import { useRecoilState } from "recoil";
import { indexTab } from "../../atom";
import Title from "../../components/title/Title";
import Skeletons from "../../components/cards/Skeletons";
import { useNavigate } from "react-router-dom";

const AllCategory = () => {
  const isMounted = React.useRef(true);
  const [tabs, setTabs] = React.useState<ICategory[]>();
  const [iTab, setITab] = useRecoilState(indexTab);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isMounted.current) {
      axios
        .get(`${API_SERVER}/getCategoryTabs`)
        .then((res) => {
          res.data && setTabs(res.data);
          navigate('/categorys');
        })
        .catch((err) => console.log(err));
      isMounted.current = false;
    }
  }, []);

  return (
    <Box sx={{ pt: 5 ,pb:2}}>
      <Title name="כל הבלונים" />
      <Grid container spacing={2}>
        {(tabs && iTab === 0) ? (
          tabs.map((e, i) => {
            return (
              <Grow
                key={i}
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                timeout={1000}
              >
                <GridContainer
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  key={i}
                  onClick={() => setITab(i + 1)}
                >
                  <Cards data={e} />
                </GridContainer>
              </Grow>
            );
          })
        ) : (
          <Skeletons num={12} />
        )}
       
      </Grid>
    </Box>
  );
};

export default AllCategory;

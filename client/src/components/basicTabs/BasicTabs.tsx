import * as React from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid, Skeleton, Stack } from "@mui/material";
import Cards from "../../components/cards/Cards";
import { IProducts, ICategory, TabPanelProps } from "../../config/interface";
import axios from "axios";
import { API_SERVER } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { TabsS } from "./BasicTabsStyles";
import BasicPagination from "../basicPagination/BasicPagination";
import { GridContainer } from "../cards/StyleCards";
import Cards2 from "../cards/CategoryProducts";
import ImageCarousel from "../cards/ImageCarousel";

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};


export const imges = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybe7R8Y4SoQoCPKD6WSDx4Y1CCfv8e4UUug&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPS3Eh81cDImUl-w7PC3GNPCnS3bQ-WjyB3w&usqp=CAU",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qJFIoZNg8yNK3gOuheiELUdrMzTtF816rA&usqp=CAU'
];

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState<ICategory[]>();
  const [products, setProducts] = React.useState<IProducts[]>();
  const isMounted = React.useRef(true);
  const navigate = useNavigate();
  const { categoryID } = useParams();

  React.useEffect(() => {
    navigate("/");
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

  React.useEffect(() => {
    const cleanId = categoryID?.split(":")[1];
    categoryID &&
      axios
        .post(`${API_SERVER}/getCategoryProducts`, { categoryId: cleanId })
        .then((res) => {
          res.data && setProducts(res.data);

          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [categoryID]);

  const handleTabClick = (id: string, index?: number) => {
    navigate(`/categorys/:${id}`);

    console.log(`Tab ${id} נלחץ`);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Container>
      <Box sx={{ width: "100%", height:'100vh' ,mt:14}}>
        <TabsS
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
        >
          <Tab
            label="תראה לי הכל"
            onClick={() => {
              navigate("/");
            }}
          />
          {tabs?.map((e, i) => (
            <Tab
              label={`${e.name}`}
              key={i}
              onClick={() => {
                handleTabClick(e.id, i);
              }}
            />
          ))}
        </TabsS>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          width={"100%"}
          height={"40%"}
          sx={{pt:5}}
        >
          <ImageCarousel images={imges} interval={3000} />
        </Grid>
        <CustomTabPanel value={value} index={value} >
          <h1>מכירת מוצרים</h1>

          <Grid container spacing={2}>
            {tabs && value === 0 ? (
              tabs.map((e, i) => {
                return (
                  <GridContainer
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    key={i}
                    onClick={() => setValue(i + 1)}
                  >
                    <Cards2 data={e} />
                  </GridContainer>
                );
              })
            ) : products ? (
              products.map((e, i) => (
                <GridContainer item xs={12} sm={4} md={3} key={i}>
                  <Cards2 data={e} />
                </GridContainer>
              ))
            ) : (
              <Skeleton
                variant="rounded"
                sx={{
                  width: {
                    xs: "50%",
                    sm: "50%",
                    md: "20%",
                  },
                }}
                height={200}
                animation="wave"
              />
            )}
          </Grid>

          <BasicPagination />
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default BasicTabs;

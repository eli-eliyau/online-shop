import * as React from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Cards from "../../components/cards/Cards";
import { IProducts, ITabs, TabPanelProps } from "../../config/interface";
import axios from "axios";
import { API_SERVER } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { TabsS } from "./BasicTabsStyles";
import BasicPagination from "../basicPagination/BasicPagination";

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

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState<ITabs[]>();
  const [products, setProducts] = React.useState<IProducts[]>();
  const [products2, setProduct2] = React.useState<string>();
  const isMounted = React.useRef(true);
  const navigate = useNavigate();
  const {categoryID} = useParams()

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
  React.useEffect(()=>{
    const cleanId = categoryID?.split(':')[1];
    axios
      .post(`${API_SERVER}/getCategoryProducts`, { categoryId: cleanId })
      .then((res) => {
        res.data && setProducts(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[categoryID])

const g = (v:number)=>{
  setValue(v);

}
  const handleTabClick = (id: string,index?:number  ) => {
    navigate(`/categorys/:${id}`);

    
    console.log(`Tab ${id} נלחץ`);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
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

                handleTabClick(e.id,i)

              }
              }
            />
          ))}
        </TabsS>
        <h1>מכירת מוצרים</h1>
        <CustomTabPanel value={value} index={value}>
          {tabs && value === 0 ? (
            <Cards data={tabs} onTabs={g}/>
          ) : products ? (
            <Cards data={products} />
          ) : (
            <h1>אין מה להציג</h1>
          )}
        <BasicPagination />

        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default BasicTabs;

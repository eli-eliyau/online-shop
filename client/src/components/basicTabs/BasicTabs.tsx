import * as React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { categoriesProducts, category } from "../../config/card";
import Cards from "../../components/cards/Cards";
import { IProducts, ITabs } from "../../config/interface";
import axios from "axios";
import { API_SERVER } from "../../App";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
  const isMounted = React.useRef(true);

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

  const handleTabClick = (id: string) => {
    axios
      .post(`${API_SERVER}/getCategoryProducts`, { categoryId: id })
      .then((res) => {
        res.data && setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`Tab ${id} נלחץ`);
  };
  const a11yProps = (id: string) => {
    const handleTabClick = () => {
      axios
        .post(`${API_SERVER}/getCategoryProducts`, { categoryId: id })
        .then((res) => {
          res.data && setProducts(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(`Tab ${id} נלחץ`);
    };

    return {
      id: `simple-tab-${id}`,
      "aria-controls": `simple-tabpanel-${id}`,
      onClick: handleTabClick,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
            direction: "rtl",
            background: "#edecec7a",
            py: "1rem",
          }}
        >
          <Tab label="תראה לי הכל" />
          {tabs?.map((e, i) => (
            <Tab
              label={`${e.name}`}
              key={i}
              onClick={() => handleTabClick(e.id)}
            />
          ))}
        </Tabs>
        <h1>מכירת מוצרים</h1>
        <CustomTabPanel value={value} index={value}>
          {tabs && value === 0 ? (
            <Cards data={tabs} />
          ) : products ? (
            <Cards data={products} />
          ) : (
            <h1>אין מה להציג</h1>
          )}
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default BasicTabs;

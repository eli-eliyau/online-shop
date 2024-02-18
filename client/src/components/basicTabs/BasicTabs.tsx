import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ICategory } from "../../config/interface";
import axios from "axios";
import { API_SERVER } from "../../App";
import { useNavigate } from "react-router-dom";
import { TabsS } from "./BasicTabsStyles";
import { useRecoilState } from "recoil";
import { indexTab } from "../../atom";

const BasicTabs = () => {
  const [tabs, setTabs] = React.useState<ICategory[]>();
  const [iTab,setItab] =useRecoilState(indexTab)
  const isMounted = React.useRef(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/categorys");
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
    navigate(`/categorys/:${id}`);
    console.log(`Tab ${id} נלחץ`);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setItab(newValue);
  };

  return (
    <TabsS
      value={iTab}
      onChange={handleChange}
      aria-label="basic tabs example"
      variant="scrollable"
      scrollButtons="auto"
      
    >
      <Tab
        label="תראה לי הכל"
        onClick={() => {
          navigate("/categorys");
        }}
       
      />
      {tabs?.map((e, i) => (
        <Tab
          key={i}
          label={
            <Box sx={{ position: "relative" }}>
              {/* <span
                style={{
                  position: "absolute",
                  top: -25,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                SELL
              </span> */}
              <div>{e.name}</div>
            </Box>
          }
          // sx={{
          //   position: "relative",
          //   pt: 4,
          //   "&::before": {
          //     content: '""',
          //     position: "absolute",
          //     top: 5,
          //     left: "50%",
          //     transform: "translateX(-50%)",
          //     width: 50,
          //     height: 20,
          //     borderRadius: "50%",
          //     backgroundColor: "red",
          //   },
          // }}
          onClick={() => {
            handleTabClick(e.id);
          }}
        ></Tab>
      ))}
    </TabsS>
  );
};

export default BasicTabs;

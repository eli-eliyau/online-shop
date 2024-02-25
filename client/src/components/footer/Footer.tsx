import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{mt:5, background: "#237979" }}
    >
      <BottomNavigationAction
        label="בית"
        style={{ color: value === 0 ? "#A51D1D" : "#ffffff" }}
        icon={<LocationOnIcon htmlColor={value === 0 ? "#A51D1D" : "#ffffff"} />}
      />
      <BottomNavigationAction
        label="גלישה"
        style={{ color: value === 1 ? "#A51D1D" : "#ffffff" }}
        icon={<ExploreIcon htmlColor={value === 1 ? "#A51D1D" : "#ffffff"} />}
      />
      <BottomNavigationAction
        label="חשבון"
        style={{ color: value === 2 ? "#A51D1D" : "#ffffff" }}
        icon={
          <PhoneIcon htmlColor={value === 2 ? "#A51D1D" : "#ffffff"} />
        }
      />
    </BottomNavigation>
  );
};
export default Footer;

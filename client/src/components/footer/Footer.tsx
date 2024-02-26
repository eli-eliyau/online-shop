import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number ) => {
    newValue && setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{ mt: 5, background: "#237979" }}
    >
      <BottomNavigationAction
        label="מזרחי 4 פתח תקווה"
        style={{ color: value === 0 ? "#ffffff" : "#ffffff" }}
        icon={
          <LocationOnIcon htmlColor={value === 0 ? "#ffffff" : "#ffffff"} />
        }
      />
      <BottomNavigationAction
        label="גלישה"
        style={{ color: value === 1 ? "#ffffff" : "#ffffff" }}
        icon={<ExploreIcon htmlColor={value === 1 ? "#ffffff" : "#ffffff"} />}
      />
    
        <BottomNavigationAction
          label="054222222"
          type="button"
          style={{ color: value === 2 ? "#ffffff" : "#ffffff" }}
          icon={<a href="tel:054222222" style={{ textDecoration: "none" }}><PhoneIcon htmlColor={value === 2 ? "#ffffff" : "#ffffff"} /></a>}
        />
      
    </BottomNavigation>
  );
};
export default Footer;

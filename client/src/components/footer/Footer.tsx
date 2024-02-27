import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    newValue && setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{ mt: 5, background: "#273e47" }}
    >
      <BottomNavigationAction
        label="גלישה"
        style={{ color: value === "favorites" ? "#ffffff" : "#ffffff" }}
        value="favorites"
        icon={
          <ExploreIcon
            htmlColor={value === "favorites" ? "#ffffff" : "#ffffff"}
          />
        }
      />
      <BottomNavigationAction
        label="מזרחי 4 פתח תקווה"
        style={{ color: value === "location" ? "#ffffff" : "#ffffff" }}
        value="location"
        icon={
          <LocationOnIcon
            htmlColor={value === "location" ? "#ffffff" : "#ffffff"}
          />
        }
      />
      <BottomNavigationAction
        label="054222222"
        type="button"
        style={{ color: value === "call" ? "#ffffff" : "#ffffff" }}
        value="call"
        icon={
          <a href="tel:054222222" style={{ textDecoration: "none" }}>
            <PhoneIcon htmlColor={value === "call" ? "#ffffff" : "#ffffff"} />
          </a>
        }
      />
    </BottomNavigation>
  );
};
export default Footer;

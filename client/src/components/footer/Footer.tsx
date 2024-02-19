import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Footer = () => {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} sx={{background:" #fdefcdac" ,mt:5}}>
        <BottomNavigationAction label="בית" icon={<HomeIcon />} />
        <BottomNavigationAction label="גלישה" icon={<ExploreIcon />} />
        <BottomNavigationAction label="חשבון" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    );
  };
 export default Footer  
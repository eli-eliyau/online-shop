import { tabsClasses, Tabs } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled('div')({
  backgroundColor: '#f0f0f0',
  padding: '20px',
  border: '1px solid #ccc',
});

export const Title = styled('h1')({
  color: '#333',
  fontSize: '24px',
});

export const Button = styled('button')({
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px',
  border: 'none',
  cursor: 'pointer',
});

export const TabsS = styled(Tabs)({
  [`& .${tabsClasses.scrollButtons}`]: {
    "&.Mui-disabled": { opacity: 1 },
    color:"#160f29"
  },
  "& .MuiTab-root.Mui-selected": {
    color: "#160f29", // צבע הטקסט כאשר התווית נבחרת
  },
  "& .MuiTabs-indicator": {
    background: '#160f29', // צבע הקן התחתון כאשר התווית נבחרת
  },
  "& .MuiTab-root": {
    color: "#160f29", // צבע הטקסט כאשר התווית לא נבחרת
  },
  direction: "rtl",
  color: '#160f29',



})
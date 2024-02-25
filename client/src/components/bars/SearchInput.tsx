import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const SearchField = () => {
  return (
    // <StyledTextField
    //   id="outlined-basic"
    //   label="חפש"
    //   variant="outlined"
    //   InputProps={{
    //     endAdornment: (
    //       <IconButton
    //         size="large"
    //         edge="end"
    //         color="inherit"
    //         aria-label="search"
    //       >
    //         <SearchIcon />
    //       </IconButton>
    //     ),
    //   }}
    // />
    <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="search"
            sx={{background:'#a51d1d0',
           
          }}
          >
            <SearchIcon />
          </IconButton>
  );
};

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red', // צבע המסגרת החיצונית
      },
      '&:hover fieldset': {
        borderColor: 'orange', // צבע המסגרת החיצונית במצב החיפוש
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green', // צבע המסגרת החיצונית כאשר הקלט במצב פעיל
      },
    },
  });

export default SearchField;

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack
    sx={{  direction: "rtl"}}
    direction="row"  // שינוי הכיוון מימין לשמאל
    justifyContent="center"
    alignItems="flex-end"
    spacing={2}
  >
    <Pagination count={10} color="primary" size='large'/>
  </Stack>
  
  );
}
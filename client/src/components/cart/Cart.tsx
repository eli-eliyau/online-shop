import { Grid, Typography } from '@mui/material'
import React from 'react'
import Cards from '../cards/Cards'
import { cart } from '../../atom';
import { useRecoilValue } from 'recoil';

const Cart = () => {

    const getCart = useRecoilValue(cart);

  return (
    <div>
        <h1>עגלת קניות</h1>
        <Grid container
  direction="row"
//   justifyContent="center"
//   alignItems="center" 
// width={'100%'}
spacing={2}
    >

{getCart.map((e,i)=>{
    return <Grid item xs={6}  sm={2}width={'0%'} sx={{background:'#f5c3c3'}}>
           <Cards data={e}  key={i}/> 
    </Grid>
})}
        
        <Grid item sm={4} sx={{background:'#988f8fbd'}}>
            <Typography>{`סך כמות מוצרים: 5`}</Typography>
            <Typography>{`לתשלום: 50 ש"ח`}</Typography>
        </Grid>
        {/* <Grid item sm={4} sx={{background:'#2e1f1f'}}>sss </Grid>
        <Grid item sm={4} sx={{background:'#a69595'}}>sss </Grid> */}

        </Grid>
        
    </div>
  )
}

export default Cart
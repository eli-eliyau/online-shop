import { Typography } from '@mui/material'
import React from 'react'

interface IProps {
    name:string |undefined
}

const Title = ({name}:IProps) => {
  return (
    <Typography
    variant="h4"
    sx={{
      textShadow: " 2px 2px 5px #a51d1d96, 0px 7px 8px #ffffff",
      fontWeight: "bold",
     
    }}
    color={"#273e47"}
  >{`${name}`}</Typography>
  )
}

export default Title
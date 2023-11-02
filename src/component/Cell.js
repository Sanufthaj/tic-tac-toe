import { Button, Typography } from '@mui/material'
import React from 'react'

function Cell({sign,onClick}) {
  return (
    <div>
      <Button variant='outlined' sx={{height:"100px",width:"100px"}} onClick={onClick} >
        <Typography variant='h1' fontWeight={700} color={sign==="O"? "red": "blue" } >
          {sign}
        </Typography>
      </Button>
    </div>
  )
}

export default Cell
import React from 'react'
import Sidenav from './Sidenav'
import { Box } from '@mui/material'
function Home() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <h1 style={{marginTop:55}}>
      Home
    </h1>
    </Box>
    </>
  )
}

export default Home

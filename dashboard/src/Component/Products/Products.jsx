import React from 'react'
import Navbar from '../Navbar'
import { border, Box, padding } from '@mui/system'
import ProductPage from './ProductPage'

function Products() {
  return (
    <div style={{ width: '100%' ,background: "linear-gradient(135deg, #090933, #1a1541, #51218c)"}}>
        <Navbar/>
        <Box height={25}/>
        <Box style={{width:"90%"}}>
        <ProductPage/>
        </Box>
        
    </div>
  )
}

export default Products

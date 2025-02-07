import React from 'react'
import ProductList from './Product/ProductList'
import Navbar from './Navbar'
import { Box,padding,styled } from '@mui/system'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'




const TableBox = styled(Box)`
     width:80%;
     margin-left:18vh;
     margin-top:14vh;
`
const Parent = styled(Box)`
     background-color:#edeff1;
     width:100%;
     height:99vh;
`
function Product() {
  return (
    <Parent>
      <Navbar/>
      <TableBox>
        <Box style={{backgroundColor:"white",paddingLeft:"15px",paddingBottom:"20px",paddingTop:"20px"}}>
            <Typography variant='h4'>Product List</Typography>
        </Box>
        <Divider/>
        <Box>
        <ProductList/>
        </Box>
      </TableBox>
    </Parent>
  )
}

export default Product

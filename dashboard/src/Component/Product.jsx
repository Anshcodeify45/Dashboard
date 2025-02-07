import React from 'react'
import ProductList from './Product/ProductList'
import Navbar from './Navbar'
import { Box,styled } from '@mui/system'




const TableBox = styled(Box)`
     border:2px solid;
     width:80%;
     margin-left:18vh;
     margin-top:18vh;
     background-color:red;
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
        <ProductList/>
      </TableBox>
    </Parent>
  )
}

export default Product

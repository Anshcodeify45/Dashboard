import React from 'react'
import Navbar from './Navbar'
import List from './Setting/List'
import { Box, height, width } from '@mui/system'
function Settings() {
  return (
    <div style={{paddingTop:30,width:"100%",paddingLeft:50,paddingRight:90,paddingBottom:33,background: "linear-gradient(135deg, #090933, #1a1541, #51218c)"}}>
      <Navbar/>
      <Box style={{height:'10vh'}}/>
          <List/>
    </div>
  )
}

export default Settings

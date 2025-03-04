import React from 'react'
import Navbar from './Navbar'
import List from './Setting/List'
import { Box, width } from '@mui/system'
function Settings() {
  return (
    <div style={{marginTop:48,width:"80%",marginLeft:30}}>
      <Navbar/>
      <Box height={70}/>
          <List/>
    </div>
  )
}

export default Settings

import React from 'react'
import { Box } from '@mui/system'
import { Typography ,Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useState,useEffect } from 'react';
import {Grid} from '@mui/material';
import {TextField} from '@mui/material';



function Addproduct({closeEvent}) {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("");

  const handleNameChange = (event) =>{
    setName(event.target.value);
  }

  const handlePriceChange = (event) =>{
    setPrice(event.target.value);
  }
  const handleCategoryChange = (event) =>{
    setCategory(event.target.value);
  }
  const createUser = () => {
  
  }
  return (
    <>
      <Box sx={{m:2}} />
        <Typography>
          Add Product 
        </Typography>
        <IconButton style={{position:'absolute',top:"0",right:"0"}} onClick={closeEvent}>
          <CloseIcon/>
        </IconButton>
        <Box height={20}/>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField id='outlined-basic' value={name} onChange={handleNameChange} label="Name" variant='outlined' size='small' sx={{minWidth:"100%"}}/>
          </Grid>
          <Grid item  xs={6}>
            <TextField id='outlined-basic' type="number" value={price} onChange={handlePriceChange}  label="Price" variant='outlined' size='small' sx={{minWidth:"100%"}}/>
          </Grid>
          <Grid item  xs={6}>
            <TextField id='outlined-basic' value={category} onChange={handleCategoryChange}  label="Category" variant='outlined' size='small' sx={{minWidth:"100%"}}/>
          </Grid>
          <Grid item  xs={6}>
            <Typography variant='h5' align='center'>
              <Button variant="contained" onClick={createUser}>
                Submit
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{m:4}}/>
    </>
  )
}
export default Addproduct

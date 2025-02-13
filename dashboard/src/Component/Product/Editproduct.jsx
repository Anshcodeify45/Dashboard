import React from 'react'
import { Box } from '@mui/system'
import { Typography ,Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useState,useEffect } from 'react';
import {Grid} from '@mui/material';
import {TextField} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InputAdornment from '@mui/material/InputAdornment';
import {collection,addDoc,getDocs,updateDoc,doc} from "firebase/firestore"
import { db } from '../../FireBase-config';
import Swal from 'sweetalert2';
import { useAppstore } from '../Appstore';


const currencies = [
  {
    value: 'Mobile',
    label: 'Mobile',
  },
  {
    value: 'Laptop',
    label: 'Laptop',
  },
  {
    value: 'Electronics',
    label: 'Electronics',
  },
  {
    value: 'Cloths',
    label: 'Cloths',
  },
];

function Editproduct({fid,closeEvent}) {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("");
  const setRows = useAppstore((state) => state.setRows);
  const empCollectionRef = collection(db,"products");



  useEffect(() => {
    console.log("FID:" + fid.id);
    setName(fid.name);
    setCategory(fid.category);
    setPrice(fid.price);
  },[])

  const handleNameChange = (event) =>{
    setName(event.target.value);
  }

  const handlePriceChange = (event) =>{
    setPrice(event.target.value);
  }
  const handleCategoryChange = (event) =>{
    setCategory(event.target.value);
  }
  const createUser = async () => {
        const userDoc = doc(db,"products",fid.id);
        const newData = {
            Name:name,
            Price:Number(price),
            Category:category,
            Date:String(new Date()),
        }
        await updateDoc(userDoc,newData);
        getUsers();
        closeEvent();
        Swal.fire("Submitted","Your file has been submitted.","success");
  }
   const getUsers = async () => {
      try {
        const querySnapshot = await getDocs(empCollectionRef);
    
        // Check if Firestore returns any documents
        if (querySnapshot.empty) {
          console.log("No documents found in Firestore ❌");
        } else {
          console.log("Documents found ✅");
          querySnapshot.forEach((doc) => {
            console.log(`Document ID: ${doc.id}`, doc.data()); // Log each document
          });
        }
        setRows([]);
        // Store in state
        setRows(querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })));
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };
  return (
    <>
      <Box sx={{m:2}} />
        <Typography>
          Edit Product 
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
            <TextField id='outlined-basic' 
             InputProps={{ 
              startAdornment: (
              <InputAdornment position="start">
              <CurrencyRupeeIcon />
            </InputAdornment>
             )}}       
             type="number" value={price} onChange={handlePriceChange}  label="Price" variant='outlined' size='small' sx={{minWidth:"100%"}}/>
          </Grid>
          <Grid item  xs={6}>
            <TextField id='outlined-basic' select value={category} onChange={handleCategoryChange}  label="Category" variant='outlined' size='small' sx={{minWidth:"100%"}}>
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Grid>
          <Grid item  xs={6} style={{marginLeft:"78px"}}>
            <Typography variant='h5' align='center'>
              <Button variant="contained" onClick={createUser} >
                Submit
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{m:4}}/>
    </>
  )
}
export default Editproduct

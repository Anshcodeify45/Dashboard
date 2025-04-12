import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle'
import { display, height, styled, width } from '@mui/system';
import { Button } from '@mui/material';



const Formstyle = styled('Box')`
    margin-left:15px;
`

const Font = styled(Typography)`
      font-family: 'Poppins', sans-serif;
      font-size: 36px;
      color: #ffffff;
      font-weight: 600;
      line-height: 1.2;
      text-align: left;
      padding: 10px 20px;
`
export default function MediaCard() {
  return (
    <Box style={{display:"flex"}}>
    <Card sx={{width:"78%" ,paddingLeft:5 ,marginRight:28  ,backgroundColor: "#131033",height:"67vh"}}>
      <Box height={40}/>
      <TextField id="outlined-basic"
       label="First Name" 
       variant="outlined" 
       style={{width:"85%"}}
       InputLabelProps={{ style: { color: "#ccc" } }} 
       InputProps={{ style: { color: "#fff" } }}/>

      <Box height={10}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width:"85%"}}
      InputLabelProps={{ style: { color: "#ccc" } }} 
      InputProps={{ style: { color: "#fff" } }} />
      <Box height={10}/>
      <TextField id="outlined-basic" label="Gmail" variant="outlined"  style={{width:"85%"}}
      InputLabelProps={{ style: { color: "#ccc" } }} 
      InputProps={{ style: { color: "#fff" } }}/>
      <Box height={10}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:"85%"}} 
      InputLabelProps={{ style: { color: "#ccc" } }} 
      InputProps={{ style: { color: "#fff" } }}/>
      <Box height={10}/>
      <TextField id="outlined-basic" label="Set Password" variant="outlined" style={{width:"85%"}}
      InputLabelProps={{ style: { color: "#ccc" } }} 
      InputProps={{ style: { color: "#fff" } }}/>
      <Box height={10}/>
      <Button variant="contained" style={{width:"85%",backgroundColor:"#7B1FA2"}}>Submit</Button>
    </Card>
    <Card sx={{ maxWidth: 685 ,paddingRight:50 ,backgroundColor: "#151244",boxShadow:"none",height:"67vh"}}>
      <Box height={40}/>
        <Box style={{height:"25vh",width:"50%"}}>
        <img src="https://media.istockphoto.com/id/1216116106/vector/call-center-assistants.jpg?s=612x612&w=0&k=20&c=Pmygr_IZhCJN89JOgB3u1SsLTWt0WKUj9y8x7jfE-I8=" alt="" />
        </Box>
        <Box>
          <Font variant='h3'style={{ color: '#fff',marginTop:"40px",paddingLeft:10}}>Get in <br /> Touch <br /> With Us....</Font>
        </Box>
    </Card>
    </Box>
  );
}

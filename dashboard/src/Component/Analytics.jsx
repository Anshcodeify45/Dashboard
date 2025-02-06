import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar'
import { Box, padding, textAlign} from '@mui/system';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import ChartGraph from './ChartGraph';
import GeoChart from './Charts/Geochart';
import Pie from './Charts/Pie';
import Linergraph from './Charts/Linergraph';



const Container = styled(Box)`
  margin-top:48px;
  height:40vh;


  `
  const ParentBox = styled(Box)`
 display:flex;
 align-items:center;
 justify-content:space-evenly;

`

export default function Analytics() {
  return (
    <Box style={{marginTop:15,width:"100%",height:"97vh" ,backgroundColor:"#edeff1"}}>
        <Navbar/>
        <Container>
        <Grid container spacing={2} >
        <Grid item xs={4}>
        <Stack spacing={2} direction="row">
        <Stack spacing={2} style={{marginTop:"55px",marginLeft:"25px"}}>
         <Card sx={{ width:"27vh",height:"14vh"}}>
         <CardContent style={{backgroundColor:" #4E228E",color:"white"}}>
        <ParentBox>
        <Box style={{alignItems:"start",paddingBottom:"10px"}}>
            <Box><Typography style={{fontSize:"13px",paddingBottom:"2px"}}>Visitors</Typography></Box>
            <Box><Typography style={{fontSize:"20px"}}>20300</Typography></Box>
            <Box><Typography variant='p' style={{fontSize:"13px"}}>Since last week</Typography></Box>
          </Box>
        </ParentBox>
       
      </CardContent>     
       </Card>
       <Card sx={{width:"27vh",height:"14vh" }}>
       <CardContent style={{backgroundColor:" #4E228E",color:"white"}}>
        <ParentBox>
        <Box style={{alignItems:"start",paddingBottom:"10px"}}>
            <Box><Typography style={{fontSize:"13px",paddingBottom:"2px"}}>Visitors</Typography></Box>
            <Box><Typography style={{fontSize:"20px"}}>20300</Typography></Box>
            <Box><Typography variant='p' style={{fontSize:"13px"}}>Since last week</Typography></Box>
          </Box>
        </ParentBox>
       
      </CardContent>    
       </Card>
       </Stack>
       <Stack spacing={2} style={{marginTop:"55px"}}>
            <Card sx={{width:"27vh",height:"14vh" }}>
            <CardContent style={{backgroundColor:" #4E228E",color:"white"}}>
        <ParentBox>
           <Box style={{alignItems:"start",paddingBottom:"10px"}}>
            <Box><Typography style={{fontSize:"13px",paddingBottom:"2px"}}>Visitors</Typography></Box>
            <Box><Typography style={{fontSize:"20px"}}>20300</Typography></Box>
            <Box><Typography variant='p' style={{fontSize:"13px"}}>Since last week</Typography></Box>
          </Box>
        </ParentBox>
       
      </CardContent>   
       </Card>
       <Card sx={{ width:"27vh",height:"14vh" }}>
       <CardContent style={{backgroundColor:" #4E228E",color:"white"}}>
        <ParentBox>
          <Box style={{alignItems:"start",paddingBottom:"10px"}}>
            <Box><Typography style={{fontSize:"13px",paddingBottom:"2px"}}>Visitors</Typography></Box>
            <Box><Typography style={{fontSize:"20px"}}>20300</Typography></Box>
            <Box><Typography variant='p' style={{fontSize:"13px"}}>Since last week</Typography></Box>
          </Box>
        </ParentBox>
       
      </CardContent>     
       </Card>
       </Stack>
        </Stack>
        </Grid>
        <Grid item xs={8} style={{paddingLeft:"15px"}}>
        <Card sx={{width:"90%",height:"43vh" ,border:"none",marginLeft:"25px"}}>
        <CardContent >
        <Linergraph />
        </CardContent>     
       </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{marginTop:"8px"}}>
        <Grid item xs={7} style={{marginLeft:19}}>
        <Stack spacing={2}>
        <Card sx={{ height:43 + "vh"}}>
      <CardContent>
        <Box >
        <GeoChart />
        </Box>
      </CardContent>
        </Card>
        </Stack>
        </Grid>
        <Grid item xs={4} style={{marginLeft:25}}>
        <Card sx={{ height:43 + "vh"}}>
      <CardContent >
        <Box>
        <Pie />
        </Box>
      </CardContent>
        </Card> 
        </Grid>
        </Grid>
        </Container>
    </Box>
  );
}
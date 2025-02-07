import React from 'react'
import Navbar from './Navbar'
import { Box,Typography,styled} from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Accordionn from './Accordionn';
import ChartGraph from './ChartGraph';
import CountUp from 'react-countup';



const ParentBox = styled(Box)`
 display:flex;
 align-items:center;
 justify-content:space-evenly;
 width:70%;
`

const Leftcard = styled(Box)`
 width:100%; 
`

function Home() {
  return (
    <Box style={{marginTop:55,width:"100%",height:"91vh",backgroundColor:"#edeff1"}}>
    <Navbar/>
    <Box style={{backgroundColor:"#edeff1"}}>
    <Grid container spacing={2} style={{paddingTop:25,paddingLeft:25}}>
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ width: 99 +"%" ,height:130}}>
      <CardContent style={{backgroundColor:"#4E228E",color:"white"}}>
        <Leftcard >
          <Box><LocalAtmIcon/></Box>
          <Box>
          <Typography gutterBottom variant="h5" component="div">
           $<CountUp start={0} end={505} duration={2.75}/>
          </Typography>
          </Box>
          <Box>
          <Typography variant="body2">
            Total Earnings
        </Typography>
          </Box>
        </Leftcard>
      </CardContent>
    </Card>

    <Card sx={{ width: 99 +"%" ,height:130}}>
      <CardContent style={{backgroundColor:"#7D5AB1",color:"white"}}>
        <Leftcard >
          <Box><LocalAtmIcon/></Box>
          <Box>
          <Typography gutterBottom variant="h5" component="div">
          $<CountUp start={0} end={545} duration={2.75}/>
          </Typography>
          </Box>
          <Box>
          <Typography variant="body2">
            Total Earnings
        </Typography>
          </Box>
        </Leftcard>
      </CardContent>
    </Card>
          
   
    </Stack>
        </Grid>

        
        <Grid item xs={4}>
        <Stack spacing={1}>
        <Card sx={{ maxWidth: 300 }}>
      <CardContent style={{backgroundColor:" #4E228E",color:"white"}}>
        <ParentBox>
          <Box><AccountBalanceIcon/></Box>
          <Box>
            <Box><Typography style={{fontWeight:600}}>$<CountUp start={0} end={245} duration={2.75}/>K</Typography></Box>
            <Box><Typography>Total Income</Typography></Box>
          </Box>
        </ParentBox>
       
      </CardContent>
    </Card>
          
    <Card sx={{ maxWidth: 300 }}>
      <CardContent style={{backgroundColor:" #38146F",color:"white"}}>
      <ParentBox>
          <Box><AccountBalanceIcon/></Box>
          <Box>
            <Box><Typography style={{fontWeight:600}}>$<CountUp start={0} end={203} duration={2.75}/>K</Typography></Box>
            <Box><Typography>Total Income</Typography></Box>
          </Box>
        </ParentBox>
      </CardContent>
    </Card>
    </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{paddingTop:25,paddingLeft:"28px"}}>
        <Grid item xs={7}>
        <Stack spacing={2}>
        <Card sx={{ height:52 + "vh"}}>
      <CardContent>
        <Box >
        <ChartGraph/>
        </Box>
        
      </CardContent>
        </Card>
        </Stack>
        </Grid>

        
        <Grid item xs={4}>
        
        <Card sx={{ height:52 + "vh" }}>
      <CardContent>
        <Box>
        <Box>
        <Typography gutterBottom variant="h5" component="div">
          Popular Products
        </Typography>
        </Box>
        <Box>
        <Accordionn/>
        </Box>
        </Box>
        
        
      </CardContent>
    </Card>
    
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default Home

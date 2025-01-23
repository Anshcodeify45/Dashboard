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
    <Box style={{marginTop:78,marginLeft:10,border:"2px solid",width:"100%",height:"88vh"}}>
    <Navbar/>
    <Box>
    <Grid container spacing={2} style={{paddingTop:25,paddingLeft:10}}>
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ width: 99 +"%" ,height:130}}>
      <CardContent style={{backgroundColor:"#2459ab",color:"white"}}>
        <Leftcard >
          <Box><LocalAtmIcon/></Box>
          <Box>
          <Typography gutterBottom variant="h5" component="div">
            $500.00
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
      <CardContent style={{backgroundColor:"#2459ab",color:"white"}}>
        <Leftcard >
          <Box><LocalAtmIcon/></Box>
          <Box>
          <Typography gutterBottom variant="h5" component="div">
            $500.00
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
        <Stack spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
      <CardContent style={{backgroundColor:" #3d99b8",color:"white"}}>
        <ParentBox>
          <Box><AccountBalanceIcon/></Box>
          <Box>
            <Box><Typography style={{fontWeight:600}}>$203K</Typography></Box>
            <Box><Typography>Total Income</Typography></Box>
          </Box>
        </ParentBox>
       
      </CardContent>
    </Card>
          
    <Card sx={{ maxWidth: 345 }}>
      <CardContent style={{backgroundColor:" #3d99b8",color:"white"}}>
      <ParentBox>
          <Box><AccountBalanceIcon/></Box>
          <Box>
            <Box><Typography style={{fontWeight:600}}>$203K</Typography></Box>
            <Box><Typography>Total Income</Typography></Box>
          </Box>
        </ParentBox>
      </CardContent>
    </Card>
    </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{paddingTop:25}}>
        <Grid item xs={8}>
        <Stack spacing={2}>
        <Card sx={{ height:50 + "vh",border:"2px solid"}}>
      <CardContent>
        
      </CardContent>
    </Card>
        
    </Stack>
        </Grid>

        
        <Grid item xs={4}>
        
        <Card sx={{ height:50 + "vh" ,border:"2px solid"}}>
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

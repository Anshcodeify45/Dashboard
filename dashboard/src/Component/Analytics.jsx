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
import { border, height, width } from '@mui/system';




const ParentBox = styled(Box)`
 display:flex;
 align-items:center;
 justify-content:space-evenly;
 width:70%;
`

const Leftcard = styled(Box)`
 width:100%; 
`

function Analytics() {
  return (
    <Box style={{marginTop:70,width:"100%",height:"88vh",backgroundColor:"#633C9C"}}>
    <Navbar/>
    <Box style={{backgroundColor:"#633C9C"}}>
    <Grid container spacing={2} style={{paddingTop:25,paddingLeft:10}}>
        <Grid item xs={8}>
    <Stack spacing={2} direction="row">
        <Card sx={{ width: 30 +"%" ,height:130}}>
      <CardContent style={{backgroundColor:"#4E228E",color:"white"}}>
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

    <Card sx={{  width: 30 +"%",height:130}}>
      <CardContent style={{backgroundColor:"#7D5AB1",color:"white"}}>
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

    <Stack spacing={2} direction="row" style={{paddingTop:"10px"}}>
    <Card sx={{  width: 30 +"%" ,height:130}}>
      <CardContent style={{backgroundColor:"#4E228E",color:"white"}}>
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

    <Card sx={{ width: 30 +"%" ,height:130}}>
      <CardContent style={{backgroundColor:"#7D5AB1",color:"white"}}>
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

        
        <Grid item xs={7}>
        <Stack spacing={1}>
      <Card sx={{ backgroundColor:"#633C9C"}}>
      <CardContent>
        <Box >
        <ChartGraph style={{backgroundColor:"#633C9C"}}/>
        </Box>
        
      </CardContent>
    </Card>
          
  
    </Stack>
        </Grid>
    </Grid>

      <Grid container spacing={2} style={{paddingTop:25}}>
        <Grid item xs={8}>
        <Stack spacing={2}>
        <Card sx={{ height:52 + "vh",backgroundColor:"#633C9C"}}>
      <CardContent>
        <Box >
        <ChartGraph style={{backgroundColor:"#633C9C"}}/>
        </Box>
        
      </CardContent>
    </Card>
        
    </Stack>
        </Grid>

        
        <Grid item xs={4}>
        
        <Card sx={{ height:52 + "vh" ,backgroundColor:"#633C9C"}}>
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

export default Analytics

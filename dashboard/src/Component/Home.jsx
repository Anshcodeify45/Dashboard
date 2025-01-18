import React from 'react'
import Navbar from './Navbar'
import { Box,Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

function Home() {
  return (
    <Box style={{marginTop:78,marginLeft:10,border:"2px solid",width:"100%",height:"88vh"}}>
    <Navbar/>
    <Box>
    <Grid container spacing={2} style={{paddingTop:25}}>
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ maxWidth: 49 +"%" ,height:140 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
          
    <Card sx={{ maxWidth: 49 +"%" ,height:140 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </Stack>
        </Grid>

        
        <Grid item xs={4}>
        <Stack spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
      <CardContent>
       
      </CardContent>
    </Card>
          
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        
      </CardContent>
    </Card>
    </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{paddingTop:25}}>
        <Grid item xs={8}>
        <Stack spacing={2}>
        <Card sx={{ height:60 + "vh",border:"2px solid"}}>
      <CardContent>

      </CardContent>
    </Card>
        
    </Stack>
        </Grid>

        
        <Grid item xs={4}>
        
        <Card sx={{ height:60 + "vh" ,border:"2px solid"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
    </Card>
    
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default Home

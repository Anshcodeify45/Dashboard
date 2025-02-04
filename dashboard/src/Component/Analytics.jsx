import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from './Navbar'
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Container = styled(Box)`
  margin-top:55px;
  `

export default function Analytics() {
  return (
    <Box style={{marginTop:55,width:"100%",height:"92vh",backgroundColor:"#633C9C"}}>
        <Navbar/>
        <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        <Stack spacing={2}>
          <Item>1</Item>
          <Item>1</Item>
          </Stack>
        </Grid>
      </Grid>        
        </Grid>
        <Grid item xs={4}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        <Stack spacing={2}>
          <Item>1</Item>
          <Item>1</Item>
          </Stack>
        </Grid>
      </Grid>        
        </Grid>


      </Grid>
        </Container>
    </Box>
  );
}
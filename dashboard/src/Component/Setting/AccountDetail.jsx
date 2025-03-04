import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import { Box, padding} from '@mui/system';
import Stack from '@mui/system';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function AccountDetail() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1}}>
        <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    
                    title="Raj Kumar"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://cdn.corporatefinanceinstitute.com/assets/marketing.jpeg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="p" style={{ color: 'text.secondary',textAlign:"start" }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                    </Typography>
                </CardContent>
                </Card>
        </Grid>
        <Grid item xs={8}>
        <Card sx={{ width: "100%",height:"68vh" }}>
            <Typography variant='h5' style={{paddingTop:"15px",paddingLeft:25 }}>About Me</Typography>
            <hr/>
          <Box >
            <Box style={{paddingBottom:10}}>
                <Typography variant='p' style={{paddingLeft:"25px",textAlign:"center"}}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. 
                 </Typography>
            </Box>
            <hr/>
            <Box>
               <Typography variant='h5' style={{paddingLeft:"25px",paddingTop:15 }}>Details</Typography>
            </Box>
            <Box style={{paddingTop:15 , paddingBottom:5,paddingLeft:"25px" }}>
               <Typography><span style={{fontWeight:600 ,paddingRight:40}}>Full Name :</span>Raj Kumar</Typography>
            </Box>
            <hr/>
            <Box style={{paddingTop:5 , paddingBottom:5,paddingLeft:"25px" }}>
               <Typography><span style={{fontWeight:600 ,paddingRight:71}}>Email :</span> rajkumar@Gmail.com</Typography>
            </Box>
            <hr/>
            <Box style={{paddingTop:5 , paddingBottom:5,paddingLeft:"25px" }}>
               <Typography><span style={{fontWeight:600 ,paddingRight:50}}>Address :</span> bellmount,London</Typography>
            </Box>
            <hr/>
            <Box style={{paddingTop:5 , paddingBottom:5,paddingLeft:"25px" }}>
               <Typography><span style={{fontWeight:600 ,paddingRight:50}}>ZipCode :</span> 800885</Typography>
            </Box>
            <hr/>
            <Box style={{paddingTop:5 , paddingBottom:5,paddingLeft:"25px" }}>
               <Typography><span style={{fontWeight:600 ,paddingRight:50}}>Website :</span> http//:raj.dashboard.com</Typography>
            </Box>
          </Box>
        </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

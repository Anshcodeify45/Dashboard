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
import { Box} from '@mui/system';
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
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
                </Card>
        </Grid>
        <Grid item xs={8}>
        <Card sx={{ width: "100%",border:"2px solid",height:"68vh" }}>
            <Typography variant='h5' style={{paddingTop:"15px"}}>About Me</Typography>
            <hr/>
          <Box>
            <Box style={{paddingBottom:10}}>
                <Typography variant='p'>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. 
                 </Typography>
            </Box>
            <hr/>
            <Box>
               <Typography variant='h5'>Details</Typography>
            </Box>
            <Box>
               <Typography><span style={{fontWeight:600}}>Full Name :</span> Raj Kumar</Typography>
            </Box>
            <Box>
               <Typography><span style={{fontWeight:600}}>Email :</span> rajkumar@Gmail.com</Typography>
            </Box>
            <Box>
               <Typography><span style={{fontWeight:600}}>Address :</span> bellmount,London</Typography>
            </Box>
            <Box>
               <Typography><span style={{fontWeight:600}}>ZipCode :</span> 800885</Typography>
            </Box>
            <Box>
               <Typography><span style={{fontWeight:600}}>Website :</span> http//:raj.dashboard.com</Typography>
            </Box>
          </Box>
        </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

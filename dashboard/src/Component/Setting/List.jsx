import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import AccountDetail from './AccountDetail';
import Form from './Form';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{backgroundColor:'#151244'}}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function List() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ width: "100%" ,height:"80vh"}}>
           
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{backgroundColor:"#151244",color:"white"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)}  style={{color:'white'}}/>
          <Tab label="Contact us" {...a11yProps(1)} style={{color:'white'}}/>
          <Tab label="Item Three" {...a11yProps(2)}  style={{color:'white'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} style={{backgroundColor:"#151244",color:"white"}}>
        <AccountDetail/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Form/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    
    </Card>
  );
}
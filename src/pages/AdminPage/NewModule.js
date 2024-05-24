import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import Basicinfo from './Basicinfo';
import Photos from './Photos';
import Videos from './Videos';
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   




<Box paddingLeft={{ xs: '2%', sm: '3%', md: '5%' }} paddingRight={{ xs: '2%', sm: '3%', md: '5%' }}        

paddingTop={'5%'}



>
      <Typography
        color="textPrimary"
        fontWeight="800"
        sx={{
          fontFamily: 'Roboto',
          fontSize: '32px',
          lineHeight: '26px',
        }}
      >
        New Module
      </Typography>
     
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' ,paddingTop:'2%'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Basic info" value="1" />
            <Tab label="Photos" value="2" />
            <Tab label="Videos" value="3" />
            <Tab label="Documents" value="4" />
            <Tab label="Possible Extensions" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><Basicinfo/></TabPanel>
        <TabPanel value="2"><Photos/></TabPanel>
        <TabPanel value="3"><Videos/></TabPanel>
        <TabPanel value="4">Documents</TabPanel>
        <TabPanel value="5">Possible Extensions</TabPanel>
      </TabContext>
    </Box>
   


  );
}

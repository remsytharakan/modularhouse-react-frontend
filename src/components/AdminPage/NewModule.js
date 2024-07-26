import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography,Button } from '@mui/material';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';
import Basicinfo from './Basicinfo';
import Photos from './Photos';
import Videos from './Videos';


export default function LabTabs() {
  const [value, setValue] = useState('1');
  const [drawerOpen, setDrawerOpen] = useState(false);
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

 

  


  return (
    <Box sx={{  ml: [4, 25, 25], mt: [12, 15, 15],  mr: [1,1, 1]   }}>
        <Navbar onMenuOpen={handleDrawerOpen} />
        <Sidebar open={drawerOpen} onClose={handleDrawerClose} />
        <Typography variant="h5" gutterBottom sx={{fontWeight:'bold'}}>
        New Module
        </Typography>
      
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Basic info" value="1" />
              <Tab label="Photos" value="2" />
              <Tab label="Videos" value="3" />
              <Tab label="Documents" value="4" />
              <Tab label="Possible Extensions" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
          <Basicinfo  />  
        </TabPanel>
          <TabPanel value="2"><Photos /></TabPanel>
          <TabPanel value="3"><Videos /></TabPanel>
          <TabPanel value="4">Documents</TabPanel>
          <TabPanel value="5">Possible Extensions</TabPanel>
         
        </TabContext>


     
           
           
          </Box>


      
    
  );
}
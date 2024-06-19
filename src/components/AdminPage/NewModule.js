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
    <Box sx={{  ml: [4, 25, 25], mt: [12, 15, 15] }}>
        <Navbar onMenuOpen={handleDrawerOpen} />
        <Sidebar open={drawerOpen} onClose={handleDrawerClose} />
        <Typography
         sx={{
          fontFamily: 'Roboto',
          fontSize: '32px',
          fontWeight:"800"
        }}>
       
          New Module
        </Typography>
        <Button
              variant="contained"
              sx={{
                backgroundColor: '#f0f0f0',
                textTransform: 'none',
                color: '#000000',
               
                fontSize: '16px',
                fontWeight: 600,
               
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                color: '#ffffff',
               
                fontSize: '16px',
                fontWeight: 600,
               
              }}
            >
              Save
            </Button>
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
          <TabPanel value="1"><Basicinfo /></TabPanel>
          <TabPanel value="2"><Photos /></TabPanel>
          <TabPanel value="3"><Videos /></TabPanel>
          <TabPanel value="4">Documents</TabPanel>
          <TabPanel value="5">Possible Extensions</TabPanel>
         
        </TabContext>


     
           
           
          </Box>


      
    
  );
}

import React from 'react';
import { Typography, Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function MainSectionOne() {
  return (
    <div>
      <Box 
        sx={{
          mr: { xs: 2, md: 2, lg: 5 }, 
          mt: { xs: 3, md: 6, lg: 8 }, 
          ml: { xs: 2, md: 8, lg: 10 } 
        }}
      >
        <Typography variant="h1"  gutterBottom sx={{  fontSize: { xs: '32px', sm: '40px' }, fontWeight: 'bold',  }}>
          Experience The Future<br/>
          of <span style={{ color: '#388e3c' }}>Home Building</span> <br />With Modular Design.
        </Typography>
      
      <Box sx={{mt: "8%"}}>
        <Typography variant="h7" sx={{   lineHeight: '30px',color:'#757575' }}>
          Everything you need about finding your place to live will be here, where it will be easier for you
        </Typography>
      </Box>
      {/* Search Field */}
      <Box sx={{ mt: { xs: '10%', md: '5%', lg: '14%' },  mb: { xs: '35%'}, }}>
  <TextField
    variant="outlined"
    placeholder="Search for your dream home"
    fullWidth
    sx={{
      '& fieldset': {
        borderRadius: '32px', 
      },
      '& .MuiIconButton-root': {
        color: '#388e3c', 
      },
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
</Box>

      </Box>

    </div>
  );
}

export default MainSectionOne;

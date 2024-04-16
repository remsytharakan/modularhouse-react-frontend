import React from 'react';
import { Typography, Box, useMediaQuery, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function MainSection1() {
  const isMobile = useMediaQuery('(max-width:700px)');
  
  return (
    <Box
      paddingTop={isMobile ? '20px' : '150px'}
      paddingLeft={{ xs: '20px', sm: '40px', md: '80px', lg: '100px' }}
      paddingRight={isMobile ? '20px' : '100px'}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: 'black',
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: 'bold',
            lineHeight: isMobile ? '40px' : '50px',
            textTransform: 'capitalize',
          }}
        >
          Experience The Future<br/>
          of <span style={{ color: '#49dd7b' }}>Home Building</span> <br />With Modular Design.
        </Typography>
      </Box>
      {!isMobile && (
        <Box paddingTop='40px'>
          <Typography
            variant="h2"
            sx={{
              color: 'black',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '30px',
              textAlign: 'left',
              opacity: 0.75,
              zIndex: 31,
            }}
          >
            Everything you need about finding your place to live will be here, where it will be easier for you
          </Typography>
        </Box>
      )}
      {/* Search Field */}
      <Box paddingTop='70px'>
        <TextField
          variant="outlined"
          placeholder="Search for your dream home"
          fullWidth
          sx={{
            borderRadius: '32px', // Setting border radius to 32px
            '& fieldset': {
              borderRadius: '32px', // Setting border radius for the fieldset
            },
            '& .MuiIconButton-root': {
              color: '#49dd7b', // Setting color for the search icon button
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}

export default MainSection1;
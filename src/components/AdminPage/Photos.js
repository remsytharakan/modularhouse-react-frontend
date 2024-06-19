import {  Box,  Button } from '@mui/material';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Photo from '../../Assets/Images.png';

function Photos() {
  return (
    <div>
      <Box  paddingRight='3%'>
       
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '16%',
              paddingTop: '-5%',
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: '#1bc5bd',
                textTransform: 'none',
                color: '#ffffff',
                fontFamily: 'Poppins, var(--default-font-family)',
                fontSize: '16px',
                fontWeight: 600,
                width: { xs: '60%', sm: '50%', lg: '14%' }
              }}
            >
              Add Photos
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img src={Photo} alt="placeholder" style={{ maxWidth: '80%' }} />
          </Box>
      
      </Box>
    </div>
  );
}

export default Photos;

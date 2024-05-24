import { Typography, Box, Card, Button } from '@mui/material';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Video from '../../Assets/Images(1).png';

function Videos() {
  return (
    <div>
      <Box  paddingRight='3%'>
       
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', paddingLeft: '28%' }}>
            {/* Container for buttons */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f0f0f0',
                textTransform: 'none',
                color: '#000000',
                fontFamily: 'Poppins, var(--default-font-family)',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: { xs: '6%', sm: '3%', lg: '2%' },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                color: '#ffffff',
                fontFamily: 'Poppins, var(--default-font-family)',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: { xs: '6%', sm: '3%', lg: '2%' },
              }}
            >
              Save
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '16%',
              paddingTop: '-3%',
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
              Add Videos
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img src={Video} alt="placeholder" style={{ maxWidth: '80%' }} />
          </Box>
       
      </Box>
    </div>
  );
}

export default Videos;

import React from 'react'
import { Grid, Box, InputBase, IconButton, Button, } from '@mui/material';

import rectangle from '../../../Assets/Subscribe.png';
import EmailIcon from '@mui/icons-material/Email';
function SubscribeForSection() {
  return (
   

<div>
      
          <Box 
            sx={{ 
              position: 'relative', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { xs: '8%', md: '5%' }, 
              width: '100%', 
            }}
          >
            <img 
              src={rectangle} 
              alt="Description of Image" 
              style={{ 
                maxWidth: '100%',
                height: 'auto', 
                display: 'block' 
              }} 
            />
            <Box 
              sx={{ 
                position: 'absolute', 
                top: '60%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                display: 'flex',
            mt:{xs:'3px'},
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                padding: { xs: '-2px', md: '10px' }, 
                borderRadius: '28px',
                width: { xs: '50%', md: '40%' }, 
                maxWidth: '600px',
              }}
            >
              <IconButton>
                <EmailIcon />
              </IconButton>
              
              <InputBase
                placeholder=" your email here"
                sx={{ 
                  flex: 1,
                  ml: 1,
                  fontSize: { xs: '0.8rem', md: '1rem' }, 
                
                 
                 
                }}
              />
              
              <Button
                variant="contained"
                sx={{ 
                  ml: 1,
                  height: '40px',
                  width: { xs: '30%', md: '30%' }, 
                 
                  padding: { xs: '-6px' },
                  fontSize: { xs: '0.6rem', md: '1rem' }, 
                  backgroundColor: '#10B981', 
                  color: '#fff', 
                  borderRadius: '20px', 
                  textTransform: 'none', 
                  '&:hover': {
                    backgroundColor: '#0f9d6c', 
                  }
                }}
              >
                Subscribe Now
              </Button>
            </Box>
          </Box>
        


        

    </div>



    
  )
}

export default SubscribeForSection;
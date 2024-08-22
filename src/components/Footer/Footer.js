import { Grid,Typography,Box ,IconButton} from '@mui/material';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
        <Box 
            sx={{ 
              ml: { lg: '100px', xs: '10px' }, 
              mr: { lg: '280px', xs: '0' }, 
              display: 'flex',
              flexDirection: 'column',
              
              mt: {lg:'150px',sm:'70px',xs:'50px' },
              mb:{lg:'100px'},
            }}
          >
            <Typography variant="h6" sx={{ color: '#1b1c57', fontWeight: 'bold' }} gutterBottom>
              Modular House
            </Typography>
            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
              We provide information about properties such as houses, villas, and apartments to help people find their dream home
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                textAlign:'left',
                gap: '16px', // Space between icons
                mt: '16px' // Margin-top for spacing between text and icons
              }}
            >
              <IconButton href="https://facebook.com" target="_blank">
                <FacebookIcon sx={{ color: '#4267B2' }} />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank">
                <InstagramIcon sx={{ color: '#E4405F' }} />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank">
                <TwitterIcon sx={{ color: '#1DA1F2' }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid container>
            <Grid item xs={6} sm={6} md={4} lg={4}>
            <Box 
            sx={{ 
             
              ml: { xs: '10px' },
              mt: {lg:'150px',sm:'70px',xs:'50px' },
              mb: {lg:'100px' },
            }}
          >
            <Typography variant="h6" sx={{ color: '#1b1c57', fontWeight: 'bold' }} gutterBottom>
            Property
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
           House
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
          Apartment
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
          Villa
            </Typography>

            </Box>

            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
            <Box 
            sx={{ 
             
              
              mt: {lg:'150px',sm:'70px',xs:'50px' },
              mb: {lg:'100px'},
            }}
          >
            <Typography variant="h6" sx={{ color: '#1b1c57', fontWeight: 'bold' }} gutterBottom>
            Article
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
          New Article
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
         Popular Article
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
         Most Read
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
       Tips & Tricks
            </Typography>


            </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box 
            sx={{ 
             
              ml: { xs: '10px' },
              mt: {lg:'150px',sm:'70px',xs:'50px' },
              mb: '100px' 
            }}
          >
            <Typography variant="h6" sx={{ color: '#1b1c57', fontWeight: 'bold' }} gutterBottom>
           Contact
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
            2464 Royal Ln. Mesa, New Jersey 45463
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
            (671) 555-0110
            </Typography>

            <Typography variant="body2" sx={{ color: '#9e9e9e'}} gutterBottom>
            info@hounter.com
            </Typography>

            </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}

export default Footer;
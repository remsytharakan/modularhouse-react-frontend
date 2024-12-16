import React from 'react';

import { Grid, Box, TextField, Button, Checkbox, FormControlLabel, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import review from '../../Assets/review.png';
import border from '../../Assets/border.png';
import Footer from '../../components/Footer/Footer';
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '80vh', 
  backgroundImage: `url(${review})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', 
  color: '#fff',
  padding: theme.spacing(2), 
  [theme.breakpoints.down('sm')]: {
    height: '60vh', 
    padding: theme.spacing(1), 
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(56, 142, 60, 0.5)',
    zIndex: 1,
  },
}));

const TransparentCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'transparent',
  boxShadow: 'none',
  zIndex: 2,
  position: 'relative',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${border})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -1,
  },
}));

const WhiteBackgroundForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#fff',
  boxShadow: theme.shadows[3],
  zIndex: 2,
  
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#388e3c',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2e7d32',
  },
}));


const ContactUs = () => {
  return (
    <div>
      
      <HeroSection sx={{mt:2}}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} sx={{ zIndex: 2, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h2" component="h1" sx={{ mb: 2,mt:{md:10,xs:80,sm:25}, fontSize: { xs: '2rem', md: '3rem' } }}>
                Contact Modular House Professionals
              </Typography>
              <Typography variant="h5" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                You are in the right place
              </Typography>
              
              <Container maxWidth="md" sx={{ mt: 5 }}>
                <TransparentCard>
                  <Typography variant="h6" gutterBottom>
                    Our Contact Information
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Address:</strong> Lise-Meitner-Straße 7, 30926 Seelze, Germany
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Phone:</strong> +49 1234567
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Email:</strong> info@modularhouse.de
                  </Typography>
                </TransparentCard>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <WhiteBackgroundForm>
                <Typography variant="h4" gutterBottom>
                  Get in Touch
                </Typography>
                <form noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                   <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        margin="normal"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                        required
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <FormControlLabel
                    control={<Checkbox required />}
                    label="I have read and accept the privacy policy."
                  />
                  <SubmitButton variant="contained" sx={{ mt: 0 }}>
                    Submit
                  </SubmitButton>
                </form>
              </WhiteBackgroundForm>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

     
        
       
    </div>
  );
};

export default ContactUs;

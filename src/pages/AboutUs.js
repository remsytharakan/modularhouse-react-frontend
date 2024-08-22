// src/pages/AboutUsPage.js
import React from 'react';
import Grid from '@mui/material/Grid';
import AboutUsSectionOne from '../components/HomeSections/AboutUsSection/AboutUsSectionOne';
import AboutUsSectionTwo from  '../components/HomeSections/AboutUsSection/AboutUsSectionTwo';
import Footer from '../components/Footer/Footer';



const AboutUsPage = () => {
  return (
    <div>
    
    <Grid container spacing={2}>
     
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <AboutUsSectionOne />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <AboutUsSectionTwo />
      </Grid>
     

             <div>
          <Footer />
        </div> 




    </Grid>
    </div> 
  );
};

export default AboutUsPage;

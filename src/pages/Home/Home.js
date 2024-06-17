import React from 'react'
import MainSectionOne from '../../components/HomeSections/MainSection/MainSectionOne';
import OurRecommendation from '../../components/HomeSections/OurRecommendationSection/OurRecommendationSection';
import SeeOurReviewSection from '../../components/HomeSections/SeeOurReviewsSection/SeeOurReviewSection';
import SubscribeForSection from '../../components/HomeSections/SubscribeForSection/SubscribeForSection';
import MainSectionTwo from '../../components/HomeSections/MainSection/MainSectionTwo';
import ReadyToSellSectionTwo from '../../components/HomeSections/ReadyToSellSection/ReadyToSellSectionTwo';
import ReadyToSellSectionOne from '../../components/HomeSections/ReadyToSellSection/ReadyToSellSectionOne';
import AboutUsSectionOne from '../../components/HomeSections/AboutUsSection/AboutUsSectionOne';
import AboutUsSectionTwo from '../../components/HomeSections/AboutUsSection/AboutUsSectionTwo';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Grid } from '@mui/material';

function Home() {
    return (
        <div>
 <div>
          <Navbar />
        </div> 

              <div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <MainSectionOne />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={7}>
                        <MainSectionTwo />
                    </Grid>
                </Grid>
            </div>  
             <div>
                <OurRecommendation />
            </div> 
         <div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={7}>
                        <ReadyToSellSectionOne />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <ReadyToSellSectionTwo />
                    </Grid>
                </Grid>
            </div> 
             <div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <AboutUsSectionOne />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <AboutUsSectionTwo />
                    </Grid>
                </Grid>
            </div> 
             <div>
                <SeeOurReviewSection />
            </div> 
            <div>
                <SubscribeForSection />
            </div>  

             <div>
          <Footer />
        </div>  

        </div>
    )
}

export default Home;
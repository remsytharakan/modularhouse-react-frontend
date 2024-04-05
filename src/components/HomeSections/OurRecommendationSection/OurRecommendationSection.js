import React from 'react'
import ReactSwipe from 'react-swipe';
import { Box, Typography, Grid, Button } from '@mui/material';
import './HouseCard.css';
// import './HousePage.css';
import HouseCard from './HouseCard';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
function OurRecommendation() {
  let reactSwipeEl;
  return (
    <div>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div style={{ height: 500 }}>

        <Box   paddingLeft='120px'>
      {/* Common heading and buttons */}
      <Box className="heading-container">
        <Box className="heading">
          <Typography variant="h4" component="h1" gutterBottom>
            Featured Houses
          </Typography>
        </Box>
        <Box className="button-container">
        <button className="button-container">
        <IconButton>< HomeIcon/></IconButton>
          <span>Cube House</span>
        </button>
          <button className="button-container">
          <IconButton>< VillaIcon/></IconButton>
          <span>Standard</span>
        </button>
        <button className="button-container">
        <IconButton>< ApartmentIcon/></IconButton>
          <span>Premium</span>
        </button>
        </Box>
      </Box>

      {/* House cards */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <HouseCard
            imageSrc="/Image/house1.png"
            title="MH01"
            price="€ 24000.000"
            bedroomCount={2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HouseCard
            imageSrc="/Image/house2.png"
            title="MH02"
            price="€ 32000.000"
            bedroomCount={3}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HouseCard
            imageSrc="/Image/house3.png"
            title="MH03"
            price="€ 52000.000"
            bedroomCount={4}
          />
        </Grid>
      </Grid>
    </Box>
</div>
<div style={{ height: 500 }}>PANE 2</div>
        <div style={{ height: 500 }}>PANE 3</div>
      </ReactSwipe>
    </div>
    
  )
}

export default OurRecommendation;
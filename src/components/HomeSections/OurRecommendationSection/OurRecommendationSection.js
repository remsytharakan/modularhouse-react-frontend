import React from 'react'
import ReactSwipe from 'react-swipe';
import { Box, Typography, Grid, Button ,OutlinedInput} from '@mui/material';
import './HouseCard.css';
// import './HousePage.css';
import HouseCard from './HouseCard';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
function OurRecommendation() {

  
  // let reactSwipeEl;
  return (
    <div>
      {/* <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      > */}
      {/* <div style={{ height: 500 }}> */}

        <Box sx={{ marginTop: '20px',  paddingLeft:{ xs: '20px', sm: '40px', md: '80px', lg: '100px' },  paddingRight:{ xs: '35px', sm: '40px', md: '80px', lg: '100px' } }}>
          {/* Common heading and buttons */}
          <Box className="heading-container">
            <Box className="heading">
              <Typography variant="h4" component="h1" gutterBottom>
                Featured Houses
              </Typography>
            </Box>
            <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <OutlinedInput
        className="button-container"
        style={{ borderRadius: '32px',width:'160px', marginRight: '10px' }}
        startAdornment={<IconButton><HomeIcon /></IconButton>}
        endAdornment={<span>Cube</span>}
      />
      <OutlinedInput
        className="button-container"
        style={{ borderRadius: '32px', marginRight: '10px',width:'160px' }}
        startAdornment={<IconButton><VillaIcon /></IconButton>}
        endAdornment={<span>Standard</span>}
      />
      <OutlinedInput
        className="button-container"
        style={{ borderRadius: '32px', width: '160px' }}
        startAdornment={<IconButton><ApartmentIcon /></IconButton>}
        endAdornment={<span>Premium</span>}
      />
    </Box>

          </Box>

          {/* House cards */}
          <Grid container spacing={1} justifyContent="center">
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
      {/* </div> */}
      {/* <div style={{ height: 500 }}>PANE 2</div>
        <div style={{ height: 500 }}>PANE 3</div> */}
    {/* </ReactSwipe> */}
    </div >
    
  )
}

export default OurRecommendation;
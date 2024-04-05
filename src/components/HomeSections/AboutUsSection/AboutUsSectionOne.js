import React from 'react';
import { Box, Card, CardMedia, Grid } from '@mui/material';

function AboutUsSectionOne() {
  return (
    <div>
      <Box mt={4} sx={{ display: 'flex', justifyContent: 'center' ,top:100}}>
        <Card sx={{ maxWidth: 700,maxHeight:800 }}>
          <CardMedia
            component="img"
            height="auto"
            image="Image/decor.png"
            alt="Image description"
            sx={{  width: '100%' }} // Set width to '100%' to ensure the image takes up the entire width
          />
        </Card>
      </Box>
    </div>
  );
}
 
export default AboutUsSectionOne;

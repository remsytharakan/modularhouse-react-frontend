import React from 'react';
import { Box } from '@mui/material';
import './HouseCard.css'; // Import CSS file
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

function HouseCard({ imageSrc, title, price, bedroomCount }) {
  return (
    <Box className="house-card">
      <Box className="img" style={{position:'relative'}}>
        <img src={imageSrc} alt="House" style={{height:'100%'}} />
        <Box className="badge">
          <img src="/Image/home3.png" alt="Button Icon"/>
          <span>New House</span>
        </Box>
      </Box>

      <Box className="title">{title}</Box>
      <Box className="price">{price}</Box>
      <Box className="contact-info">
        <Box className="bedrooms">
          <Box className="bed">
            <img src="/Image/bed1.png" alt="House 1" />
          </Box>
          <span className="bedroom">{bedroomCount} Bedroom</span>
        </Box>
        <button className="customize">
          <IconButton>< HomeIcon /></IconButton>
          <span>Customize</span>
        </button>
      </Box>
    </Box>
  );
}

export default HouseCard;

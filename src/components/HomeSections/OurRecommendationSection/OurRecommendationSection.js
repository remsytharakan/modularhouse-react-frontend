import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import  BusinessIcon from '@mui/icons-material/Business'; 
import VillaIcon from '@mui/icons-material/Villa';
import { getAllCategories, getAllHouses } from '../../../Services/AdminServices';
import './HouseCard.css';
import { useNavigate } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import toast  from 'react-hot-toast';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


function OurRecommendation() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [houses, setHouses] = useState([]);  

  useEffect(() => {
    getHouses();
    getCategories();
  });

  const getHouses = async () => {
    setLoading(true);
    try {
      const response = await getAllHouses();
      setHouses(response?.data?.houses || []);
    } catch (error) {
      console.error('Error fetching houses:', error);
      toast.error('Failed to fetch houses.');
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    setLoading(true);
    try {
      const res = await getAllCategories();
      const response = res?.data?.categories;
      setCategories(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

 

  const navigate = useNavigate();
  const handleClickDetail = (houseId) => {
    navigate(`/housedetails/${houseId}`);
  };

  const handleClick = () => {
    navigate('/collection');
  };

  return (
    <Box sx={{ mt: 1, px: { xs: 4, sm: 4, md: 8, lg: 8 } }}>
      <Box>
        <Typography variant="h4" sx={{ color: '#1b1c57' }} gutterBottom>
          Featured Houses
        </Typography>

        <Box sx={{ mt:3}}>
        <Grid container spacing={2}>
          {categories.map((cat, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '40px',
                  textTransform: 'none',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  backgroundColor: '#388e3c',
                  color: 'white',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#388e3c',
                  },
                }}
                startIcon={cat.type === 'cube' ? <HomeIcon /> : cat.type === 'standard' ? <VillaIcon /> : <ApartmentIcon />}
              >
                {cat.categoryName}
              </Button>
            </Grid>
          ))}
      <Grid item xs={12}  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Button
    variant="text"
    sx={{
      color: '#388e3c',
      fontWeight: '600',
      textTransform: 'none',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',  // Set to auto to make the button fit its content
      '&:hover': {
        color: '#0D9C6F',
      },
    }}
    onClick={handleClick}
    endIcon={<DoubleArrowIcon sx={{ fontSize: 50 }} />}
  >
    View More
  </Button>
</Grid>


        </Grid>
      </Box>


      </Box>

      {/* House cards */}
      <Grid container spacing={2} justifyContent="center">
        {houses && houses.map((house, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={house._id || index}>
             <Box className="house-container">
      <Box className="house-card">
        <Box className="img" style={{ position: 'relative' }}>
          <img src={house.images[0].url} alt="House" style={{ height: '100%' }} />
          <Box className="badge">
            
            <span>For Sell</span>
          </Box>
        </Box>

       
        <Box className="price">€&nbsp;{house.basicPrice}</Box>
        <Box className="title">{house.name}</Box>
        <Box className="contact-info">
          <Box className="bedrooms">
            <Box className="bed">
            < BusinessIcon  style={{ color: 'black' }} />&nbsp;
            </Box>
            <span className="bedroom">
              {house.floors.length}<span className="gap">Floor</span>
            </span>
          </Box>
          <Box className="customize">
  <HomeIcon />&nbsp;
  <span
    onClick={() => handleClickDetail(house._id)} // Corrected onClick
    style={{ cursor: 'pointer' }}
  >
    Customize
  </span>
</Box>

        </Box>
      </Box>
    </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurRecommendation;

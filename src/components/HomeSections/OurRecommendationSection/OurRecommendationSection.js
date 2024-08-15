import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
import { getAllCategories, getAllHouses } from '../../../Services/AdminServices';
import './HouseCard.css';
import { useNavigate } from 'react-router-dom';

import toast  from 'react-hot-toast';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import IconButton from '@mui/material/IconButton';

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
    <Box sx={{ mt: 2, px: { xs: 4, sm: 4, md: 8, lg: 10 } }}>
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
                  backgroundColor: '#10B981',
                  color: 'white',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#10B981',
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
      color: '#10B981',
      fontWeight: '600',
      textTransform: 'none',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',  // Set to auto to make the button fit its content
      '&:hover': {
        color: '#0D9C6F',
      },
    }}
    onClick={handleClick}
    endIcon={<DoubleArrowIcon sx={{ fontSize: 30 }} />}
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
            <img src="/Image/home3.png" alt="Badge Icon" />
            <span>New House</span>
          </Box>
        </Box>

        <Box className="title">{house.name}</Box>
        <Box className="price">{house.basicPrice}</Box>
        <Box className="contact-info">
          <Box className="bedrooms">
            <Box className="bed">
              <img src="/Image/bed1.png" alt="Bed Icon" />
            </Box>
            <span className="bedroom">
              {house.floors.length}<span className="gap">Floors</span>
            </span>
          </Box>
          <Box className="customize">
  <IconButton><HomeIcon /></IconButton>
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

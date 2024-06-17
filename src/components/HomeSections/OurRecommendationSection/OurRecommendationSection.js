import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import HouseCard from './HouseCard';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
import { deleteCategoryById, getAllCategories } from '../../../Services/AdminServices';

function OurRecommendation() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box sx={{ mt: 2, px: { xs: 2, sm: 4, md: 8, lg: 10 } }}>
      <Box>
        <Typography variant="h4" sx={{ color: '#1b1c57' }} gutterBottom>
          Featured Houses
        </Typography>
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {categories && categories.map((cat, index) => (
            <Button
              key={index}
              variant="outlined"
              className="button-container"
              sx={{
                borderRadius: 4,
                width: { xs: 'auto' },
                mr: { xs: 1, sm: 1 },
                color: '#10B981',
                textTransform: 'none'
              }}
              startIcon={cat.type === 'cube' ? <HomeIcon /> : cat.type === 'standard' ? <VillaIcon /> : <ApartmentIcon />}
            >
              {cat?.categoryName}
            </Button>
          ))}
        </Box>
      </Box>

      {/* House cards */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <HouseCard
            imageSrc="/Image/house1.png"
            title="MH01"
            price="€ 24000.000"
            bedroomCount={2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <HouseCard
            imageSrc="/Image/house2.png"
            title="MH02"
            price="€ 32000.000"
            bedroomCount={3}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={6} lg={4}>
          <HouseCard
            imageSrc="/Image/house3.png"
            title="MH03"
            price="€ 52000.000"
            bedroomCount={4}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurRecommendation;

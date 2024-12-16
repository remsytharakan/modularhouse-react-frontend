import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { getHouseById } from '../../Services/AdminServices';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function CostDetail() {
  const { houseId } = useParams();
  const [houseImages, setHouseImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [house, setHouse] = useState({});

  useEffect(() => {
    if (houseId) {
      getData(houseId);
    }
  }, [houseId]);

  const getData = async (houseId) => {
    setLoading(true);
    try {
      const response = await getHouseById(houseId);
      const data = response?.data?.house || {};
      setHouse(data);
      setHouseImages(response?.data?.house.images || []);
      console.log('image')
    } catch (err) {
      console.error(err.response?.data?.message || 'Failed to fetch house');
      toast.error('Failed to fetch house.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={2} >
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <Typography
          variant="h2"
          sx={{
            color: '#1b1c57',
            fontFamily: 'Lexend, var(--default-font-family)',
            fontSize: { xs: '18px', sm: '32px',lg:'34px' },
            fontWeight: 600,
          }}
        >
          Estimated Cost Details
        </Typography>
      </Grid>

      <Grid item xs={12} lg={6} md={6} >
        <Box sx={{ ml: { xs: 3, md: 9, lg: 9 }, mr: { xs: 3 }, mt: 3, }}>
          {houseImages.length > 0 && (
            
            <img 
            src={houseImages[1].url}
              alt="main" 
              style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius:'30px' }} 
            />
          )}
        </Box>
      </Grid>

      <Grid item xs={12} lg={6} md={6} >
        <Box sx={{ ml: { xs: 3, }, mr: { xs: 3, md: 10, lg: 8 }, mt: 3 }} >
          <Typography variant="h4"   style={{  fontSize: '2em', fontWeight: 700 }}   >{house.name}</Typography>
          <Typography variant="h2"  style={{ color: '#10B981', fontSize: '2.5em', fontWeight: 700 }}    > €&nbsp;{house.basicPrice}</Typography>
          <Typography variant="body1" sx={{ lineHeight: 2, color: '#414141' }}>
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. <br />
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut 
            Lorem ipsum dolor sit amet,  euismod tincidunt ut 
            Lorem ipsum dolor sit amet,  euismod tincidunt ut 
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. 
          </Typography>
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <Button variant="contained" sx={{ borderRadius: '32px', backgroundColor: '#F1B66C', color: 'white', width: '100%' }}>
                Email Brochure
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" sx={{ borderRadius: '32px', backgroundColor: 'white',marginBottom:'20px', color: 'black', width: '100%' }}>
                Buy Now
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" >
            <Grid item>
              <LocalShippingIcon />
            </Grid>
            <Grid item sx={{ marginLeft: '10px' }}>
              <Typography variant="body2" sx={{ color: '#424242' }}>
                Free worldwide shipping on all orders over $100
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" >
            <Grid item>
              <EventAvailableIcon />
            </Grid>
            <Grid item sx={{ marginLeft: '10px' }}>
              <Typography variant="body2" sx={{ color: '#424242' }}>
                Delivers in: 3-7 Working Days Shipping & Return
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CostDetail;
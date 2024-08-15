import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import plan from '../../Assets/module.png';
import Customize from '../../components/DetailSection/Customize';
import CostDetails from '../../components/DetailSection/CostDetails';
import ProductDetails from '../../components/DetailSection/ProductDetails';
import { getHouseById } from '../../Services/AdminServices';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { houseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [house, setHouse] = useState({});
  const [houseImages, setHouseImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelect = (newSelectedCards) => {
    setSelectedCards(newSelectedCards);
  };

  const handleRemoveCard = (cardType) => {
    setSelectedCards(prevCards => prevCards.filter(card => card.type !== cardType));
  };



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
    } catch (err) {
      console.error(err.response?.data?.message || 'Failed to fetch house');
      toast.error('Failed to fetch house.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? houseImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === houseImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Grid item xs={12} sm={10} md={8} lg={6} sx={{ ml: { xs: 2, md: 8, lg: 9 }, mr: { xs: 2, md: 7, lg: 9 }, mt: 4 }}>
        {houseImages.length > 0 ? (
         <Box
         sx={{
           width: '100%',
           height: '640px', 
           borderRadius: '25px',
           overflow: 'hidden',
           position: 'relative',
         }}
       >
         <img 
           src={houseImages[0].url}
           style={{
             width: '100%',
             height: '100%',
             objectFit: 'cover',
             objectPosition: 'center',
           }}
           alt="First House"
         />
       </Box>
        ) : (
          
          <img src={plan} style={{ width: '100%', height: 'auto' }} alt="Default Plan" />
        )}
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Typography
              variant="h2"
              sx={{
                color: '#1b1c57',
                fontFamily: 'Lexend, var(--default-font-family)',
                fontSize: { xs: '38px', sm: '38px', lg: '38px' },
                fontWeight: 600,
              }}
            >
              {house.name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
          ml={{ xs: 4,lg:10 }} 
          mr={{ xs: 4, md: 6}}
         
          >
<Typography
variant="h2"
sx={{
  marginBottom:'20px',
  color: '#1b1c57',
  fontFamily: 'Lexend, var(--default-font-family)',
  fontSize: { xs: '26px', sm: '32px', lg: '30px' },
  fontWeight: 500,
}}


>Description</Typography>


<Typography>{house.description}</Typography>


</Box>
        </Grid>

        <Grid item xs={12} md={6}>
        <Box
  ml={{ xs: 4 }} 
  mr={{ xs: 4, md: 6, lg: 9 }}
  position="relative"
 
  sx={{ height: 600  }} 
>
  <Box
    sx={{
      borderRadius: 8,
      display: 'flex',
      overflowX: 'hidden',
      height: '100%',
      overflow: 'hidden',
    }}
  >
    {houseImages.length > 0 ? (
      houseImages.map((image, index) => (
        <Box
          key={index}
          sx={{
            minWidth: '100%',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`,
            height: '100%', // Ensure each image Box matches the height of the outer Box
          }}
        >
          <img 
            src={image.url} 
            alt={`Image ${index + 1}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} 
          />
        </Box>
      ))
    ) : (
      <img 
        src={plan} 
        alt="Module Plan" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    )}
  </Box>
  {houseImages.length > 1 && (
    <>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </>
  )}
</Box>

        </Grid>
      </Grid>
      <CostDetails />
      <Customize onCardSelect={handleCardSelect} />
      <ProductDetails selectedCards={selectedCards} onRemoveCard={handleRemoveCard} />
    </div>
  );
}

export default DetailPage;
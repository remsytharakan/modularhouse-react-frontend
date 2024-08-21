import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography,CircularProgress , TextField, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import m2 from '../../Assets/m2.png';
import { getCustomizationTypes,getCustomizationOptionsByType } from '../../Services/AdminServices'; 

const CustomCard = styled(Card)(({ theme, selected }) => ({
 
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: selected ? 'scale(1.05)' : 'none',
    boxShadow: selected ? theme.shadows[6] : theme.shadows[1],
  },
}));

export default function Customize({ onCardSelect }) {
  const [customizationTypes, setCustomizationTypes] = useState([]);
  const [customizationOptions, setCustomizationOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [cardLoading, setCardLoading] = useState(false);
  const [selectedCards, setSelectedCards] = useState({});
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleCardSelect = (option) => {
    setSelectedCards(prevSelected => {
      const newSelected = { ...prevSelected };
      newSelected[option.type] = option; // Update the selected card for the given type
      return newSelected;
    });
    onCardSelect(Object.values({ ...selectedCards, [option.type]: option })); // Pass updated list to parent
  };
  
  const fetchCustomizationOptions = async (type) => {
    setCardLoading(true);
    try {
      const response = await getCustomizationOptionsByType(type);
      setCustomizationOptions(response?.data?.customizationOptions || []);
    } catch (error) {
      console.error('Error fetching customization options:', error);
      setError('Failed to fetch customization options');
    } finally {
      setCardLoading(false);
    }
  };

  const fetchCustomizationTypes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCustomizationTypes();
      const types = response?.data?.types || [];
      setCustomizationTypes(types);
      
      if (types.length > 0) {
        setSelectedType(types[0]);
        await fetchCustomizationOptions(types[0]);
      }
    } catch (error) {
      console.error('Error fetching customization types:', error);
      setError('Failed to fetch customization types');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllCustomizationOptions = async () => {
    setCardLoading(true);
    try {
      const allOptions = await Promise.all(
        customizationTypes.map(async (type) => {
          const response = await getCustomizationOptionsByType(type);
          return response?.data?.customizationOptions || [];
        })
      );
      setCustomizationOptions(allOptions.flat());
    } catch (error) {
      console.error('Error fetching all customization options:', error);
      setError('Failed to fetch all customization options');
    } finally {
      setCardLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomizationTypes();
  }, []);

  const handleItemClick = async (type) => {
    if (type === selectedType && !showAllCategories) return;
    setSelectedType(type);
    setShowAllCategories(false);
    await fetchCustomizationOptions(type);
  };

  const handleAllCategoriesClick = async () => {
    setShowAllCategories(true);
    setSelectedType(null);
    await fetchAllCustomizationOptions();
  };


  



  return (
    <Box sx={{ ml: { xs: 2, md: 4, lg: 9 }, mr: { xs: 2, md: 4 }, mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
          <Typography
            variant="h2"
            sx={{
              color: '#1b1c57',
              fontFamily: 'Lexend, var(--default-font-family)',
              fontSize: { xs: '16px', sm: '32px' },
              fontWeight: 600,
            }}
          >
           Available Customization Options
          </Typography>
        </Grid>

        <Grid item xs={12} lg={3} sx={{ display: { xs: 'none', lg: 'block' }, marginTop: '2%' }}>
          <TextField
            label="Search"
            variant="filled"
            sx={{
              marginBottom: '8px',
              borderRadius: '15px',
              '& .MuiFilledInput-root': {
                background: '#f0f0f0',
                borderRadius: '18px',
              },
              '& .MuiFilledInput-underline:before': {
                borderBottom: 'none',
              },
            }}
            fullWidth
          />

<List sx={{ color: '#07484a', fontFamily: 'Roboto, var(--default-font-family)', fontSize: '24px', fontWeight: 400 }}>
  {customizationTypes.length > 0 ? (
    customizationTypes.map((item, index) => (
      <ListItem 
        key={index} 
        sx={{ 
          borderRadius: '15px',
          marginBottom: '8px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#f0f0f0', 
          },
          '&:active': {
            backgroundColor: '#f0f0f0', 
          },
          transition: 'background-color 0.3s',
        }} 
        onClick={() => handleItemClick(item)}
      >
        <ListItemText primary={item} />
      </ListItem>
    ))
  ) : (
    <ListItem sx={{ marginBottom: '8px' }}>
      <ListItemText primary="No customization types available" />
    </ListItem>
  )}
</List>
<Button
            variant="contained"
            sx={{
              padding: '12px 20px',
              background: showAllCategories ? '#5a7370' : '#70908b',
              borderRadius: '10px',
              '&:hover': {
                background: '#5a7370',
              },
            }}
            endIcon={<ArrowForwardIcon />}
            fullWidth
            onClick={handleAllCategoriesClick}
          >
            All Categories
          </Button>
        </Grid>

        <Grid item xs={12} lg={9}>
          <Box sx={{ padding: '4%' }}>
            {cardLoading ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                <CircularProgress />
              </Box>
            ) : (
              <Grid container spacing={2}>
                {customizationOptions.map((option, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={index}>
                    <CustomCard
          key={option.id}
          selected={selectedCards[option.type]?.id === option.id}
          onClick={() => handleCardSelect(option)}
        >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="300"
                          image={option.image?.url || m2}
                          alt={option.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {option.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="text.secondary">
                              {option.type}
                            </Typography>
                            <Typography variant="h5" color=" #10B981"style={{fontWeight:'bold'   }} >
                            €&nbsp;{option.price}
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </CustomCard>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

import React, { useState, useEffect } from 'react';
import {
  Typography, Box, Grid, Button, Menu, MenuItem, IconButton
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CabinTwoToneIcon from '@mui/icons-material/CabinTwoTone';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HomeIcon from '@mui/icons-material/Home';
import { getAllHouses, getAllCategories } from '../../Services/AdminServices';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './Collection.css';
import  BusinessIcon from '@mui/icons-material/Business';
// // GlitteringTypography Component
// const GlitteringTypography = styled(Typography)(({ theme }) => ({
//   position: 'relative',
//   display: 'inline-block',
//   color: theme.palette.text.primary,
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.5) 50%, transparent 55%)',
//     backgroundSize: '200% 200%',
//     animation: 'glitter 6s linear infinite',
//   },
//   '@keyframes glitter': {
//     '0%': { backgroundPosition: '0% 50%' },
//     '100%': { backgroundPosition: '200% 50%' },
//   },
// }));

// Collection Component
function Collection() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDimension, setSelectedDimension] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
 
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [anchorEl, setAnchorEl] = useState({ categories: null, dimensions: null, prices: null });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [housesResponse, categoriesResponse] = await Promise.all([
          getAllHouses(),
          getAllCategories()
        ]);
        const fetchedHouses = housesResponse?.data?.houses || [];
        setHouses(fetchedHouses);
        setFilteredHouses(fetchedHouses);

        const fetchedCategories = categoriesResponse?.data?.categories || [];
        const categoryNames = fetchedCategories.map(cat => cat.categoryName || cat.toString());
        setCategories(categoryNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = houses.filter(house => {
        const categoryMatch = !selectedCategory || house.category === selectedCategory;
        const dimensionMatch = !selectedDimension || house.dimension === selectedDimension;
        const priceMatch = !selectedPrice || house.priceRange === selectedPrice;
        return categoryMatch && dimensionMatch && priceMatch;
      });
      setFilteredHouses(filtered);
    };
    applyFilters();
  }, [selectedCategory, selectedDimension, selectedPrice, houses]);

  const handleMenuOpen = (event, menuType) => {
    setAnchorEl(prev => ({ ...prev, [menuType]: event.currentTarget }));
  };

  const handleMenuClose = (menuType) => {
    setAnchorEl(prev => ({ ...prev, [menuType]: null }));
  };

  const handleClickDetail = (houseId) => {
    navigate(`/housedetails/${houseId}`);
  };

  
      
  const getDisplayText = (menuType) => {
    if (menuType === 'categories') {
      return selectedCategory || ' category';
    }
    if (menuType === 'dimensions') {
      return selectedDimension || ' dimension';
    }
    if (menuType === 'prices') {
      return selectedPrice || ' price';
    }
    return '';
  };

  return (
    <Grid item xs={12} md={9}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', mt: 9 }}>
            <CabinTwoToneIcon sx={{ fontSize: '2rem', color: '#000' }} />
            <ArrowRightAltIcon sx={{ fontSize: '2rem', color: '#000', ml: 1 }} />
            <GlitteringTypography
              variant="body1"
              sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#10B981', cursor: 'pointer' }}
              onClick={handleTypographyClick}
            >
              Modular House
            </GlitteringTypography>
          </Box> */}
          <Box sx={{ mt: '5%', mb: '8%', ml: '5%', mr: '5%' }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                mb: '4%',
                fontSize: { xs: '26px', sm: '32px' },
                fontWeight: 600,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Our Collection Of Houses
            </Typography>

            <Box sx={{ flexGrow: 2, backgroundColor: '#388e3c', p: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {['categories', 'dimensions', 'prices'].map((menuType) => (
          <Grid item xs={12} sm={4} md={3} key={menuType}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button
                variant="contained"
                onClick={(e) => handleMenuOpen(e, menuType)}
                endIcon={<ArrowDropDownIcon />}
                sx={{
                  width: '90%',
                  height: 40,
                  color: '#1C2365',
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#1C2365',
                  },
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 16px',
                }}
              >
                {getDisplayText(menuType)}
              </Button>
              <Menu
                anchorEl={anchorEl[menuType]}
                open={Boolean(anchorEl[menuType])}
                onClose={() => handleMenuClose(menuType)}
              >
                {menuType === 'categories' && categories.map((item) => (
                  <MenuItem key={item} onClick={() => {
                    setSelectedCategory(item);
                    handleMenuClose('categories');
                  }}>
                    {item}
                  </MenuItem>
                ))}
                {menuType === 'dimensions' && ['Small', 'Medium', 'Large'].map((item) => (
                  <MenuItem key={item} onClick={() => {
                    setSelectedDimension(item);
                    handleMenuClose('dimensions');
                  }}>
                    {item}
                  </MenuItem>
                ))}
                {menuType === 'prices' && ['$0 - $50,000', '$50,000 - $100,000', '$100,000+'].map((item) => (
                  <MenuItem key={item} onClick={() => {
                    setSelectedPrice(item);
                    handleMenuClose('prices');
                  }}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} sm={4} md={3}>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              backgroundColor: '#1C2365',
              '&:hover': {
                backgroundColor: '#1C2365',
                color: 'white',
              },
              width: '90%',
              height: 40,
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>

            {loading ? (
              <Typography>Loading...</Typography>
            ) : (
              <>
                <Box sx={{ mt: '1%' }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                    Showing 1–{filteredHouses.length} of {filteredHouses.length} item(s)
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Typography>
                </Box>

                <Grid container spacing={2} justifyContent="center">
                  {filteredHouses.map((house, index) => (
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
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Collection;

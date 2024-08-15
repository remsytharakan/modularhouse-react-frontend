import React, { useState, useEffect } from 'react';
import {
  Typography, Box, Grid, TextField, InputAdornment, Drawer,
  useMediaQuery, useTheme, IconButton, Button, Card, CardContent,
  List, ListItem, Checkbox, FormControlLabel, Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CabinTwoToneIcon from '@mui/icons-material/CabinTwoTone';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MenuIcon from '@mui/icons-material/Menu';
import { getAllHouses, getAllCategories } from '../../Services/AdminServices';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import './Collection.css';

// CheckboxList Component
const CheckboxList = ({ checkedItems, handleChange, items }) => (
  <List>
    {items.map((item) => (
      <ListItem key={item}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems[item]}
              onChange={handleChange}
              name={item}
            />
          }
          label={typeof item === 'string' ? item.charAt(0).toUpperCase() + item.slice(1) : item}
        />
      </ListItem>
    ))}
  </List>
);

// GlitteringTypography Component
const GlitteringTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  color: theme.palette.text.primary,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.5) 50%, transparent 55%)',
    backgroundSize: '200% 200%',
    animation: 'glitter 6s linear infinite',
  },
  '@keyframes glitter': {
    '0%': { backgroundPosition: '0% 50%' },
    '100%': { backgroundPosition: '200% 50%' },
  },
}));

// Collection Component
function Collection() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});
  const [categories, setCategories] = useState([]);
  const [checkedDimensions, setCheckedDimensions] = useState({});
  const [checkedPrices, setCheckedPrices] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const [filteredHouses, setFilteredHouses] = useState([]);
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

        const initialCheckedItems = Object.fromEntries(
          categoryNames.map(cat => [cat, false])
        );
        setCheckedItems(initialCheckedItems);
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
      const selectedCategories = Object.keys(checkedItems).filter(item => checkedItems[item]);
      const filtered = selectedCategories.length === 0 
        ? houses 
        : houses.filter(house => selectedCategories.includes(house.category));
      setFilteredHouses(filtered);
    };
    applyFilters();
  }, [checkedItems, houses]);

  const handleClickDetail = (houseId) => {
    navigate(`/housedetails/${houseId}`);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDimensionChange = (event) => {
    setCheckedDimensions(prev => ({
      ...prev,
      [event.target.name]: event.target.checked
    }));
  };

  const handlePriceChange = (event) => {
    setCheckedPrices(prev => ({
      ...prev,
      [event.target.name]: event.target.checked
    }));
  };

  const handleChange = (event) => {
    setCheckedItems(prev => ({
      ...prev,
      [event.target.name]: event.target.checked
    }));
  };

  const handleTypographyClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 9 }}>
            <CabinTwoToneIcon sx={{ fontSize: '2rem', color: '#000' }} />
            <ArrowRightAltIcon sx={{ fontSize: '2rem', color: '#000', ml: 1 }} />
            <GlitteringTypography
              variant="body1"
              sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#10B981', cursor: 'pointer' }}
              onClick={handleTypographyClick}
            >
              Modular House
            </GlitteringTypography>
          </Box>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            <Box
              sx={{
                width: 250,
                padding: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Filters
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Categories
              </Typography>
              <CheckboxList
                items={categories}
                checkedItems={checkedItems}
                handleChange={handleChange}
              />
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Dimensions
              </Typography>
              <CheckboxList
                items={['Small', 'Medium', 'Large']}
                checkedItems={checkedDimensions}
                handleChange={handleDimensionChange}
              />
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Prices
              </Typography>
              <CheckboxList
                items={['$0 - $50,000', '$50,000 - $100,000', '$100,000+']}
                checkedItems={checkedPrices}
                handleChange={handlePriceChange}
              />
              <Button
                onClick={handleDrawerToggle}
                sx={{ mt: 'auto', backgroundColor: '#10B981', color: '#fff' }}
              >
                Close
              </Button>
            </Box>
          </Drawer>

          {isXs && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1201 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {!isXs && (
            <Box sx={{ mt: 3, mr: 3, ml: 4 }}>
              <Card sx={{ boxShadow: 3, borderRadius: 2, height: '500px', overflowY: 'auto' }}>
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#616161', mb: 2 }}>
                    Categories
                  </Typography>
                  <CheckboxList
                    items={categories}
                    checkedItems={checkedItems}
                    handleChange={handleChange}
                  />
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#616161', mb: 2 }}>
                    Dimensions
                  </Typography>
                  <CheckboxList
                    items={['Small', 'Medium', 'Large']}
                    checkedItems={checkedDimensions}
                    handleChange={handleDimensionChange}
                  />
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#616161', mb: 2 }}>
                    Prices
                  </Typography>
                  <CheckboxList
                    items={['$0 - $50,000', '$50,000 - $100,000', '$100,000+']}
                    checkedItems={checkedPrices}
                    handleChange={handlePriceChange}
                  />
                </CardContent>
              </Card>
            </Box>
          )}
        </Grid>

        <Grid item xs={12} md={9}>
          <Box sx={{ mt: '6%', mb: '5%', ml: '5%' ,mr:'5%'}}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: '26px', sm: '32px' },
                fontWeight: 600,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Our Collection Of Houses
            </Typography>
            <Box sx={{ mr: '5%', mt: '1%' }}>
              <TextField
                variant="outlined"
                placeholder="Search an item"
                fullWidth
                sx={{
                  '& fieldset': {
                    borderRadius: '32px',
                  },
                  '& .MuiIconButton-root': {
                    color: '#49dd7b',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {loading ? (
              <Typography>Loading...</Typography>
            ) : (
              <>
                <Box sx={{ mt: '1%', ml: '5%' }}>
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
                                onClick={() => handleClickDetail(house._id)}
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
    </div>
  );
}

export default Collection;
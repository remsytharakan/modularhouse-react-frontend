import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, TextField, InputAdornment, Drawer, useMediaQuery, useTheme, IconButton, Button, Card, CardContent, List, ListItem, Checkbox, FormControlLabel, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KingBedIcon from '@mui/icons-material/KingBed';
import CabinTwoToneIcon from '@mui/icons-material/CabinTwoTone';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MenuIcon from '@mui/icons-material/Menu';
import { getAllHouses, getAllCategories,getHouseById } from '../../Services/AdminServices';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import toast, { Toaster } from 'react-hot-toast';

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
  const [loading, setLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [categories, setCategories] = useState([]);
  const [checkedDimensions, setCheckedDimensions] = useState({});
  const [checkedPrices, setCheckedPrices] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const [houseImage, setHouseImage] = useState('/Image/house1.png');
  const [houseName, setHouseName] = useState('MH01');
  const [housePrice, setHousePrice] = useState('€ 24000.000');
  const [houseFloors, setHouseFloors] = useState(0);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const navigate = useNavigate();
  const [selectedHouseId, setSelectedHouseId] = useState(null);

  const getData = (houseId) => {
    if (houseId) {
      getHouseById(houseId)
        .then((res) => {
          let data = res?.data?.house;
          setHouseImage(data?.image?.url || '/Image/house1.png');
          setHouseName(data?.name || 'MH01');
          setHousePrice(data?.basicPrice || '€ 24000.000');
          setHouseFloors(data?.floors?.length || 0);
        })
        .catch((err) => {
          toast.error(err.response?.data?.message || 'Failed to fetch house');
        });
    }
  };
  


  useEffect(() => {
    if (selectedHouseId) {
      getData(selectedHouseId);
    }
  }, [selectedHouseId]);


  useEffect(() => {
    getHouses();
    getCategories();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = filterHouses();
      setFilteredHouses(filtered);
    };

    applyFilters();
  }, [checkedItems, houses]);

  const filterHouses = () => {
    const selectedCategories = Object.keys(checkedItems).filter(item => checkedItems[item]);
    if (selectedCategories.length === 0) {
      return houses;
    }
    return houses.filter(house =>
      selectedCategories.includes(house.category)
    );
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDimensionChange = (event) => {
    setCheckedDimensions({
      ...checkedDimensions,
      [event.target.name]: event.target.checked
    });
  };

  const handlePriceChange = (event) => {
    setCheckedPrices({
      ...checkedPrices,
      [event.target.name]: event.target.checked
    });
  };

  const getHouses = async () => {
    setLoading(true);
    try {
      const response = await getAllHouses();
      setHouses(response?.data?.houses || []);
    } catch (error) {
      console.error('Error fetching houses:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await getAllCategories();
      const { categories = [] } = response?.data || {};
      setCategories(categories.map(cat => cat.categoryName || cat.toString()));

      // Initialize checkedItems state
      const initialCheckedItems = {};
      categories.forEach(cat => {
        initialCheckedItems[cat.categoryName || cat] = false;
      });
      setCheckedItems(initialCheckedItems);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  const handleClick = (houseId) => {
   
    navigate(`/house-details/${houseId}`);
  };
  
  
  const handleTypographyClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Grid container spacing={4}>
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

          {/* Filter Drawer for xs screens */}
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

          {/* Button to open the Drawer on xs screens */}
          {isXs && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1201 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Card for larger screens */}
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
          <Box sx={{ mt: '6%', mb: '5%', ml: '2%' }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: '26px', sm: '32px' },
                fontWeight: 600,
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

                <Grid container spacing={2}>
                  {filteredHouses.map((house) => (
                    <Grid item xs={12} sm={6} md={4} key={house.id}>
                      <Box sx={{ p: 5 }}>
                        <img
                          src={house.images[0]?.url || '/Image/house1.png'}
                          alt={house.name || 'House Image'}
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                        <Box sx={{ mt: '12%', ml: '5%' }}>
                          <Typography sx={{ mb: 2, fontWeight: 'bold' }}>{house.name || 'MH01'}</Typography>
                          <Typography sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{house.basicPrice || '€ 24000.000'}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <IconButton>
                            <KingBedIcon />
                          </IconButton>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: 'bold', fontSize: '0.9rem', mr: '6%' }}
                          >
                            {house.floors.length || 0}
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: '#10B981',
                              color: '#fff',
                              textTransform: 'none',
                              fontSize: '0.9rem',
                              borderRadius: '32px',
                            }}
                            onClick={() => handleClick(house.id)}
                          >
                            Customize
                          </Button>
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

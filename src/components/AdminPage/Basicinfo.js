import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  IconButton,
  OutlinedInput
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllCategories } from '../../Services/AdminServices';

const Basicinfo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryError, setCategoryError] = useState(false);
  const [subcategoryError, setSubcategoryError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accordionSelectedItem, setAccordionSelectedItem] = useState('');
  const [accordionSelectedArea, setAccordionSelectedArea] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        // Simulating API call
        const response = await getAllCategories();
        setCategories(response?.data?.categories || []);
      } catch (err) {
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setCategory(categoryId);
    setSubcategory('');
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleAccordionChange = (event) => {
    setAccordionSelectedItem(event.target.value);
  };

  const handleAccordionAreaChange = (event) => {
    setAccordionSelectedArea(event.target.value);
  };

  const handleAddItem = () => {
    if (accordionSelectedItem && accordionSelectedArea) {
      setSelectedItems([...selectedItems, { room: accordionSelectedItem, area: accordionSelectedArea }]);
      setAccordionSelectedItem('');
      setAccordionSelectedArea('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems.splice(index, 1);
    setSelectedItems(updatedItems);
  };

  const items = ['Lower Floor', 'First Floor', 'Second Floor'];
  const lower = ['Service Room', 'Central Heating', 'Wine Cellar', 'Storage for equipment', 'Garage', 'Sauna', 'Parking Shelter'];
  const first = ['Hall', 'WC', 'Dinning Room', 'Living Room', 'Kitchen', 'Food Storage', 'Terrace'];
  const second = ['Anteroom', 'Bathroom', 'Room 1', 'Room 2', 'Room 3', 'Parents room', 'Closet', 'WC', 'Terrace'];

  return (
    <Box sx={{ mr: [0, 0, 4], ml: [-3, -2, -2] }}>
      <Typography variant="h5" component="h2" sx={{ fontSize: '24px', fontWeight: 440, mb: 2 }}>
        Basic Info
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
       <Box sx={{ display: 'flex', gap: '20px', border: 'none' }}>
          <FormControl fullWidth sx={{ width: '49%' }} required={true} error={categoryError} variant="outlined">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-input': {
                  padding: '12px 14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#808080',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover fieldset': {
                    border: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none',
                  },
                },
              }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat._id} value={cat._id}>
                  {cat.categoryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ width: '50%' }} required={true} error={subcategoryError} variant="outlined">
            <InputLabel id="subcategory-label">Subcategory</InputLabel>
            <Select
              labelId="subcategory-label"
              id="subcategory-select"
              value={subcategory}
              onChange={handleSubcategoryChange}
              disabled={!category}
              label="Subcategory"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-input': {
                  padding: '12px 14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#808080',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover fieldset': {
                    border: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none',
                  },
                },
              }}
            >
              {categories
                .find((cat) => cat._id === category)
                ?.subcategories.map((subcat) => (
                  <MenuItem key={subcat._id} value={subcat._id}>
                    {subcat.subcategoryName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>

        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            sx: {
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                border: 'none',
              },
              '& .MuiOutlinedInput-input': {
                padding: '12px 14px',
              },
              '& .MuiInputLabel-root': {
                color: '#808080',
              },
            },
          }}
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            sx: {
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                border: 'none',
              },
              '& .MuiOutlinedInput-input': {
                padding: '12px 14px',
              },
              '& .MuiInputLabel-root': {
                color: '#808080',
              },
            },
          }}
        />
        <TextField
          label="Basic Price"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            sx: {
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                border: 'none',
              },
              '& .MuiOutlinedInput-input': {
                padding: '12px 14px',
              },
              '& .MuiInputLabel-root': {
                color: '#808080',
              },
            },
          }}
        />

<TextField
  id="filled-number"
  label="No of Floors"
  type="number"
  InputLabelProps={{
    shrink: true,
  }}
  variant="outlined"
  fullWidth
  sx={{
    width: '100%', // Set the width to 100%
    maxWidth: '150px', // Set a maximum width if needed
    '& .MuiOutlinedInput-root': {
      border: 'none',
      borderRadius: '8px',
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px',
    },
    '& .MuiInputLabel-root': {
      color: '#808080',
    },
  }}
/>


        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            Lower Floor
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Select
                  value={accordionSelectedItem}
                  onChange={handleAccordionChange}
                  displayEmpty
                  fullWidth
                  sx={{ minWidth: 50 }}
                >
                  <MenuItem value="" disabled>
                    Select Rooms
                  </MenuItem>
                  {lower.map((room, index) => (
                    <MenuItem key={index} value={room}>
                      {room}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Area"
                  variant="outlined"
                  fullWidth
                  value={accordionSelectedArea}
                  onChange={handleAccordionAreaChange}
                  InputProps={{
                    sx: {
                      borderRadius: '8px',
                      '& .MuiOutlinedInput-root': {
                        border: 'none',
                      },
                      '& .MuiOutlinedInput-input': {
                        padding: '12px 14px',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#808080',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button variant="contained" color="primary" onClick={handleAddItem}>
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>

            <TableContainer component={Paper} style={{ marginTop: 20 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}>Selected Rooms</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Area</TableCell>
                    <TableCell ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.room}</TableCell>
                      <TableCell>{item.area}</TableCell>
                      <TableCell>
                        <IconButton color="danger" onClick={() => handleDeleteItem(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          </AccordionDetails>
        </Accordion>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
            Add
          </Button>
        </Box>
      </Box>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Select Floor</DialogTitle>
        <DialogContent>
          <Select value={selectedFloor} onChange={(e) => setSelectedFloor(e.target.value)} displayEmpty fullWidth>
            <MenuItem value="" disabled>
              Floor
            </MenuItem>
            {items.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setModalOpen(false)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Basicinfo;

import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
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
  useMediaQuery,
  useTheme,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { getHouseById, getAllCategories, createHouse, updateHouse } from '../../Services/AdminServices';

const Basicinfo = ({ basicInfo, updateBasicInfo, houseId }) => {
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('');
  const [floorSelected, setFloorSelected] = useState(false);
  const [accordionSelectedItem, setAccordionSelectedItem] = useState('');
  const [accordionSelectedArea, setAccordionSelectedArea] = useState('');
  const [loading, setLoading] = useState(false);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [lowerFloorItems, setLowerFloorItems] = useState([]);
  const [firstFloorItems, setFirstFloorItems] = useState([]);
  const [secondFloorItems, setSecondFloorItems] = useState([]);
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    if (basicInfo.categories && basicInfo.category) {
      console.log(basicInfo);
      const selectedCategory = basicInfo.categories.find(cat => cat._id === basicInfo.category);
      console.log(selectedCategory);
      if (selectedCategory) {
        updateBasicInfo({
          subcategories: selectedCategory.subcategories
        });
      }
    }
  }, [basicInfo.categories, basicInfo.category]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'category') {
      // Find the selected category
      const selectedCategory = basicInfo.categories.find(cat => cat._id === value);
  
      // Update the state with the new category and reset subcategory and subcategories
      updateBasicInfo(prevInfo => ({
        ...prevInfo,
        [name]: value,
        subcategory: '', // Reset subcategory when category changes
        subcategories: selectedCategory ? selectedCategory.subcategories : []
      }));
    } else {
      // For other fields, update the state normally
      updateBasicInfo(prevInfo => ({
        ...prevInfo,
        [name]: value
      }));
    }
  };
  

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    if (selectedFloor) {
      const floorType = selectedFloor.split(' ')[0].toLowerCase();
      if (!openAccordions.includes(floorType)) {
        setOpenAccordions(prev => [...prev, floorType]);
      }
      setFloorSelected(true);
      handleClose();
    }
  };

  const handleAccordionChange = (e) => {
    setAccordionSelectedItem(e.target.value);
  };

  const handleAccordionAreaChange = (e) => {
    setAccordionSelectedArea(e.target.value);
  };

  const handleAddItem = (floorType) => {
    if (accordionSelectedItem && accordionSelectedArea) {
      const newItem = { room: accordionSelectedItem, area: accordionSelectedArea };
      const floorItemsKey = `${floorType}FloorItems`;
      
      switch (floorType) {
        case 'lower':
          setLowerFloorItems([...lowerFloorItems, newItem]);
          break;
        case 'first':
          setFirstFloorItems([...firstFloorItems, newItem]);
          break;
        case 'second':
          setSecondFloorItems([...secondFloorItems, newItem]);
          break;
        default:
          // Handle default case or error
          break;
      }
  
      updateBasicInfo(prevBasicInfo => {
        const updatedInfo = {
          ...prevBasicInfo,
          [floorItemsKey]: [...prevBasicInfo[floorItemsKey], newItem]
        };
        console.log('Updated basicInfo:', updatedInfo);
        return updatedInfo;
      });
  
      setAccordionSelectedItem('');
      setAccordionSelectedArea('');
    }
  };

  const handleDeleteItem = (floorType, index) => {
    const floorItemsKey = `${floorType}FloorItems`;
    const updatedItems = [...basicInfo[floorItemsKey]];
    updatedItems.splice(index, 1);
    updateBasicInfo({ [floorItemsKey]: updatedItems });
  };


 

  const handleDeleteFloor = (floorType) => {
    setOpenAccordions(prev => prev.filter(floor => floor !== floorType));
    updateBasicInfo({ [`${floorType}FloorItems`]: [] });
  };

  const items = ['Lower Floor', 'First Floor', 'Second Floor'];
  const lower = ['Service Room', 'Central Heating', 'Wine Cellar', 'Storage for equipment', 'Garage', 'Sauna', 'Parking Shelter'];
  const first = ['Hall', 'WC', 'Dining Room', 'Living Room', 'Kitchen', 'Food Storage', 'Terrace'];
  const second = ['Anteroom', 'Bathroom', 'Room 1', 'Room 2', 'Room 3', 'Parents room', 'Closet', 'WC', 'Terrace'];

  return (
    <Box sx={{ mr: [0, 0, 4], ml: [-3, -2, -2], px: [2, 3, 4] }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#fafafa'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <FormControl fullWidth sx={{ backgroundColor: 'white' }} required={true} variant="outlined">
              <InputLabel id="category-label" sx={{ color: '#9e9e9e' }}>Category</InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={basicInfo.category || ''}
                onChange={handleInputChange}
                name="category"
                label="Category"
                fullWidth
              >
                {basicInfo.categories?.map((cat) => (
                  <MenuItem key={cat._id} value={cat._id}>
                    {cat.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} >
            <FormControl fullWidth sx={{ backgroundColor: 'white' }} required={true} variant="outlined">
              <InputLabel id="subcategory-label" sx={{ color: '#9e9e9e' }}>Subcategory</InputLabel>
              <Select
                labelId="subcategory-label"
                id="subcategory-select"
                value={basicInfo.subcategory || ''}
                onChange={handleInputChange}
                name="subcategory"
                disabled={!basicInfo.category}
                label="Subcategory"
                fullWidth
              >
                {basicInfo.subcategories?.map((subcat) => (
                  <MenuItem key={subcat._id} value={subcat._id}>
                    {subcat.subcategoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}  lg={4} >
            <Typography variant="body1" sx={{color:'#757575'}}>House Name</Typography>
          </Grid>
          <Grid item xs={12} sm={8}  lg={4}  >
            <TextField
              id="outlined-basic"
              label=""
              name="name"
              value={basicInfo.name}
              onChange={handleInputChange}
              sx={{ backgroundColor: 'white' }}
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} lg={4} >
            <Typography variant="body1" sx={{ color: '#757575' }}>Description</Typography>
          </Grid>
          <Grid item xs={12} sm={8}  lg={4} >
            <TextField
              id="outlined-multiline-static"
              label=""
              multiline
              rows={4}
              name="description"
              value={basicInfo.description}
              onChange={handleInputChange}
              sx={{ backgroundColor: 'white' }}
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} lg={4}  >
            <Typography variant="body1" sx={{color:'#757575'}}>Basic Price</Typography>
          </Grid>
          <Grid item xs={12} sm={8} lg={4}  >
            <TextField
              id="outlined-basic"
              label=""
              name="basicPrice"
              value={basicInfo.basicPrice}
              onChange={handleInputChange}
              sx={{ backgroundColor: 'white' }}
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}  lg={4} >
            <Typography variant="body1" sx={{ color: '#757575' }}>Custom Floor</Typography>
          </Grid>
          <Grid item xs={12} sm={8 }  lg={4} >
            <TextField
              id="outlined-basic"
              label=""
              name="customfloor"
              value={basicInfo.customfloor}
              onChange={handleInputChange}
              sx={{ backgroundColor: 'white' }}
              variant="outlined"
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <IconButton
                    sx={{
                      color: 'blue',
                      marginRight: '8px',
                      fontSize: 'small',
                      padding: '8px',
                    }}
                    onClick={() => setModalOpen(true)}
                  >
                    <AddIcon />
                    <span>Add</span>
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Dialog open={modalOpen} onClose={handleClose}>
          <DialogTitle>Select Floor</DialogTitle>
          <DialogContent>
            <Select
              value={selectedFloor}
              onChange={(e) => setSelectedFloor(e.target.value)}
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled>
                Floor
              </MenuItem>
              {items.filter(item => !openAccordions.includes(item.split(' ')[0].toLowerCase())).map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}  lg={4} >

          <Typography></Typography>
        </Grid>
        <Grid item xs={12} sm={4}  lg={4} >


        {openAccordions.map((floorType, index) => (
          <Box key={floorType} sx={{ width: '100%', mb: 5 }}>
          <Accordion defaultExpanded={accordionExpanded}>
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon />} 
                aria-controls={`panel${floorType}-content`} 
                id={`panel${floorType}-header`}
              >
                <Typography>{`${floorType.charAt(0).toUpperCase() + floorType.slice(1)} Floor`}</Typography>
                <Typography style={{ marginLeft: 'auto' }} component="p">
                 
                </Typography>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteFloor(floorType);
                  }}
                  sx={{ marginLeft: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </AccordionSummary>
              <AccordionDetails>
              <Grid container spacing={2}>
              <Grid item xs={6} sm={8} lg={6} >
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="select-room">Room</InputLabel>
                      <Select
                        labelId="select-room"
                        id="select-room"
                        value={accordionSelectedItem}
                        onChange={handleAccordionChange}
                        label="Room"
                        fullWidth
                      >
                        {(floorType === 'lower' ? lower : floorType === 'first' ? first : second).map((room, index) => (
                          <MenuItem key={index} value={room}>
                            {room}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}  lg={6}  >
                    <TextField
                      id="outlined-basic"
                      label="Area"
                      variant="outlined"
                      value={accordionSelectedArea}
                      onChange={handleAccordionAreaChange}
                    />
                  </Grid>
                </Grid>
                <IconButton
                  sx={{
                    color: 'black',
                    marginRight: '8px',
                    fontSize: 'medium',
                    padding: '8px',
                  }}
                  onClick={() => handleAddItem(floorType)}
                >
                  <AddIcon />
                  <span>Add</span>
                </IconButton>
              </AccordionDetails>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Room</TableCell>
                        <TableCell align="right">Area</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        {floorType === 'lower' && lowerFloorItems.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {item.room}
                            </TableCell>
                            <TableCell align="right">{item.area}</TableCell>
                            <TableCell align="right">
                              <IconButton
                                sx={{
                                  color: 'primary',
                                  fontSize: 'small',
                                }}
                                onClick={() => handleDeleteItem(floorType, index)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                        {floorType === 'first' && firstFloorItems.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {item.room}
                            </TableCell>
                            <TableCell align="right">{item.area}</TableCell>
                            <TableCell align="right">
                              <IconButton
                                sx={{
                                  color: 'primary',
                                  fontSize: 'small',
                                }}
                                onClick={() => handleDeleteItem(floorType, index)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                        {floorType === 'second' && secondFloorItems.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {item.room}
                            </TableCell>
                            <TableCell align="right">{item.area}</TableCell>
                            <TableCell align="right">
                              <IconButton
                                sx={{
                                  color: 'primary',
                                  fontSize: 'small',
                                }}
                                onClick={() => handleDeleteItem(floorType, index)}
                              >
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
          </Box>
        ))}

</Grid>
</Grid>
      </Box>
    </Box>
  );
};

export default Basicinfo;
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
  IconButton
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import toast, { Toaster } from 'react-hot-toast';
import {   getHouseById ,getAllCategories, createHouse, updateHouse  } from '../../Services/AdminServices';
const Basicinfo = () => {


  const { houseId } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [basicPrice, setBasicPrice] = useState("");
  const [customfloor, setCustomfloor] = useState("");
  

  const [imageError, setImageError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [basicPriceError, setBasicPriceError] = useState(false);
  const [customfloorError, setCustomfloorError] = useState(false);




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
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const [floorSelected, setFloorSelected] = useState(false);
  const [lowerFloorItems, setLowerFloorItems] = useState([]);
  const [firstFloorItems, setFirstFloorItems] = useState([]);
  const [secondFloorItems, setSecondFloorItems] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
       
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

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    if (selectedFloor) {
      setAccordionExpanded(true);
      setFloorSelected(true); // Mark floor as selected
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

      setAccordionSelectedItem('');
      setAccordionSelectedArea('');
    }
  };

  const handleDeleteItem = (floorType, index) => {
    switch (floorType) {
      case 'lower':
        const updatedLowerItems = [...lowerFloorItems];
        updatedLowerItems.splice(index, 1);
        setLowerFloorItems(updatedLowerItems);
        break;
      case 'first':
        const updatedFirstItems = [...firstFloorItems];
        updatedFirstItems.splice(index, 1);
        setFirstFloorItems(updatedFirstItems);
        break;
      case 'second':
        const updatedSecondItems = [...secondFloorItems];
        updatedSecondItems.splice(index, 1);
        setSecondFloorItems(updatedSecondItems);
        break;
      default:
        // Handle default case or error
        break;
    }
  };

  const saveClick = async () => {
    let error = false;
    if (!houseId && image) {
        if (image == null) {
            setImageError(true);
            error = true;
        } else {
            setImageError(false);
        }
    }





    if (name === "") {
        setNameError(true);
        error = true;
    } else {
        setNameError(false);
    }
    if (description === "") {
        setDescriptionError(true);
        error = true;
    } else {
        setDescriptionError(false);
    }
    if (basicPrice === "") {
        setBasicPriceError(true);
        error = true;
    } else {
        setBasicPriceError(false);
    }
    if (customfloor == null) {
        setCustomfloorError(true);
        error = true;
    } else {
        setCustomfloorError(false);
    }
    if (error) return;

   
      if (category === "") {
        setCategoryError(true);
          error = true;
      } else {
        setCategoryError(false);
      }
      if (error) return;


      if (subcategory === "") {
        setSubcategoryError(true);
        error = true;
    } else {
      setSubcategoryError(false);
    }
    if (error) return;


    const formData = new FormData();
    if (!houseId || image) {
        formData.append("image", image);
    }
    formData.append("name", name);
    formData.append("description", description);
    formData.append("basicPrice",basicPrice);
    formData.append("customfloor", customfloor);
    formData.append("category", category);
    formData.append("subcategory", subcategory);

    if (houseId) {
        await updateHouse(houseId, formData).then((res) => {
            toast.success(res?.data?.message);
            setTimeout(() => {
                navigate('/admin/modules');
            }, 2000);
        }).catch((err) => { toast.error(err.response.data.message) })
    } else {
        await createHouse(formData).then((res) => {
            toast.success(res?.data?.message);
            setTimeout(() => {
                navigate('/admin/modules');
            }, 2000);
        }).catch((err) => { toast.error(err.response.data.message) })
    }
}

useEffect(() => {
    if (houseId) {
      getHouseById(houseId).then((res) => {
            let data = res?.data?.ad;
            setSelectedImage(data?.image?.url);
            setName(data?.housename);
            setDescription(data?.description);
           
            
            setBasicPrice(data?.basicPrice);
            setCustomfloor(data?.customfloor);
        })
    }
}, []);





  const items = ['Lower Floor', 'First Floor', 'Second Floor'];
  const lower = ['Service Room', 'Central Heating', 'Wine Cellar', 'Storage for equipment', 'Garage', 'Sauna', 'Parking Shelter'];
  const first = ['Hall', 'WC', 'Dining Room', 'Living Room', 'Kitchen', 'Food Storage', 'Terrace'];
  const second = ['Anteroom', 'Bathroom', 'Room 1', 'Room 2', 'Room 3', 'Parents room', 'Closet', 'WC', 'Terrace'];

  return (
    <Box sx={{ mr: [0, 0, 4], ml: [-3, -2, -2] }}>
     <div style={{ display: 'flex', alignItems: 'center', gap: 840 }}>
    <Typography variant="h5" gutterBottom>
        {houseId ? "Edit Basic Info" : "Basic Info"}
    </Typography>
    <Button
        variant='contained'
        style={{ backgroundColor: "#2A85FF", color: "white", borderRadius: 10, fontSize: 15 }}
        onClick={() => { saveClick() }}
    >
        {houseId ? "Update" : "Save"}
    </Button>
</div>

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
        <div style={{ display: 'flex', gap: '16px' }}>
          <FormControl fullWidth sx={{ width: 'calc(25% - 8px)', backgroundColor: 'white' }} required={true} error={categoryError} variant="outlined">
            <InputLabel id="category-label" sx={{ color: '#9e9e9e' }}>Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              fullWidth
            >
              {categories.map((cat) => (
                <MenuItem key={cat._id} value={cat._id}>
                  {cat.categoryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ width: 'calc(25% - 8px)', backgroundColor: 'white' }} required={true} error={subcategoryError} variant="outlined">
            <InputLabel id="subcategory-label" sx={{ color: '#9e9e9e' }}>Subcategory</InputLabel>
            <Select
              labelId="subcategory-label"
              id="subcategory-select"
              value={subcategory}
              onChange={handleSubcategoryChange}
              disabled={!category}
              label="Subcategory"
              fullWidth
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
        </div>


       
        <Box style={{ display: 'flex', gap: '17.5%', alignItems: 'center' }}>
  <Typography variant="h7" sx={{color:'#757575'}} >House Name</Typography>
  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '33.3ch' },
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      
    }}
    noValidate
    autoComplete="off"
  >
   <TextField
  id="outlined-basic"
  label=""
  value={name}
  onChange={(e) => setName(e.target.value)}
  sx={{ backgroundColor: 'white' }}
  variant="outlined"
  required
  error={nameError}
  helperText={nameError ? 'House name is required' : ''}
/>

  
</Box>

     
    </Box>





  
<Box style={{ display: 'flex', gap: '18.7%', alignItems: 'center' }}>
  <Typography variant="h7" sx={{ color: '#757575' }}>Description</Typography>
  <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '33.2ch' },
    }}
    noValidate
    autoComplete="off"
  >
       <TextField
  id="outlined-multiline-static"
  label=""
  multiline
  rows={4}
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  sx={{ backgroundColor: 'white', flexGrow: 1 }}
  variant="outlined"
  required
  error={descriptionError}
  helperText={descriptionError ? 'Description is required' : ''}
/>
  </Box>
</Box>


<Box style={{ display: 'flex', gap: '19.5%', alignItems: 'center' }}>
  <Typography variant="h7" sx={{color:'#757575'}} >Basic Price</Typography>
  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '33.3ch' },
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      
    }}
    noValidate
    autoComplete="off"
  >
  <TextField
  id="outlined-basic"
  label="$"
  value={basicPrice}
  onChange={(e) => setBasicPrice(e.target.value)}
  sx={{ backgroundColor: 'white' }}
  variant="outlined"
  required
  error={basicPriceError}
  helperText={basicPriceError ? 'Basic Price is required' : ''}
/>
  
</Box>

     
    </Box>









        {/* Custom Floor Input */}
        <Box style={{ display: 'flex', gap: '18%', alignItems: 'center' }}>
          <Typography variant="h7" sx={{ color: '#757575' }}>Custom Floor</Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '33.3ch' },
              display: 'flex',
              alignItems: 'center',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label=""
              value={customfloor}
              onChange={(e) => setCustomfloor(e.target.value)}
              sx={{ backgroundColor: 'white', flexGrow: 1 }}
              variant="outlined"
              required
              error={customfloorError}
              helperText={customfloorError ? 'Custom floor is required' : ''}
             
            
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
          </Box>
        </Box>

        {/* Modal for selecting floor */}
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
              {items.map((item, index) => (
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

        {/* Floor Accordions */}
        {['lower', 'first', 'second'].map((floorType, index) => (
          <Box key={index} sx={{ width: '45%', marginLeft: '26.8%', marginBottom: 5 }}>
            {floorSelected && (
              <Accordion defaultExpanded={accordionExpanded}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
                  {`${floorType.charAt(0).toUpperCase() + floorType.slice(1)} Floor`}
                  <Typography style={{ marginLeft: 'auto' }} component="p">
                    Add Room
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
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
                          {floorType === 'lower' && lower.map((room, index) => (
                            <MenuItem key={index} value={room}>
                              {room}
                            </MenuItem>
                          ))}
                          {floorType === 'first' && first.map((room, index) => (
                            <MenuItem key={index} value={room}>
                              {room}
                            </MenuItem>
                          ))}
                          {floorType === 'second' && second.map((room, index) => (
                            <MenuItem key={index} value={room}>
                              {room}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
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
                                  color: 'red',
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
                                  color: 'red',
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
                                  color: 'red',
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
            )}
          </Box>
        ))}
 <Box >
                    {/* <Button
                        variant='contained'
                        style={{ backgroundColor: "#2A85FF", color: "white", borderRadius: 10, fontSize: 15 }}
                        onClick={() => { saveClick() }}
                    >{houseId ? "Update" : "Save"}</Button> */}
                </Box>

                <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    success: {
                        style: {
                            background: 'rgb(46, 125, 50)',
                            color: 'white'
                        },
                        iconTheme: {
                            primary: 'rgb(46, 125, 50)',
                            secondary: 'white',
                        },

                    },
                    error: {
                        style: {
                            background: 'rgb(211, 47, 47)',
                            color: 'white'
                        },
                        iconTheme: {
                            primary: 'rgb(211, 47, 47)',
                            secondary: 'white',
                        },

                    },
                }}
            />

      </Box>
    </Box>
  );
};

export default Basicinfo;

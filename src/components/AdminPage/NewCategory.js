import React, { useState, useEffect } from 'react';
import {
  Typography,
  Popover,
  Box,
  Paper,
  Button,
  Grid,
  IconButton,
  Tooltip,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Newcat from '../../Assets/Newcat.png';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';
import { getCategoryById, postCategory, updateCategory } from '../../Services/AdminServices';
import toast, { Toaster } from 'react-hot-toast';

const rows = [
  { id: 1, firstName: 'Villa', image: Newcat },
  { id: 2, firstName: 'A Roof', image: Newcat },
  { id: 3, firstName: 'Villa 2', image: Newcat },
  { id: 4, firstName: 'Tiny House', image: Newcat },
];

function NewCategory() {
  const navigate = useNavigate();
  const { catId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [selectedCategoryImage, setSelectedCategoryImage] = useState(Newcat);
  const [selectedSubcategoryImage, setSelectedSubcategoryImage] = useState(Newcat);
  const [categoryId, setCategoryId] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [categoryNameError, setCategoryNameError] = useState(false);
  const [image, setImage] = useState(null);
  const [subImage, setSubImage] = useState(null);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleEdit = (id) => console.log('Edit:', id);
  const handleDelete = (id) => console.log('Delete:', id);
  const handleCategoryNameChange = (event) => setCategoryName(event.target.value);
  const handleSubcategoryNameChange = (event) => setSubcategoryName(event.target.value);

  const handleImageUpload = (event, isSubcategory) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (isSubcategory) {
          setSelectedSubcategoryImage(e.target.result);
          setSubImage(event.target.files[0]);
        } else {
          setSelectedCategoryImage(e.target.result);
          setImage(event.target.files[0]);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const saveClick = async () => {
    let error = false;

    if (!catId && !image) {
      setImageError(true);
      error = true;
    } else {
      setImageError(false);
    }

    if (categoryName === "") {
      setCategoryNameError(true);
      error = true;
    } else {
      setCategoryNameError(false);
    }

    if (error) return;

    const formData = new FormData();
    if (!categoryId || image) {
      formData.append("image", image);
    }
    formData.append("categoryName", categoryName);

    try {
      if (catId) {
        await updateCategory(catId, formData);
      } else {
        await postCategory(formData);
      }
      toast.success('Category saved successfully');
    } catch (err) {
      toast.error(err.response.data.message);
    }
    let data = {
      categoryName: categoryName,
      type: image,
    }
    if (catId) {
      console.log("updateee");
      await updateCategory(catId, data).then((res) => {
        toast.success(res?.data?.message);
        setTimeout(() => {
          navigate('/admin/Category');
        }, 2000);
      }).catch((err) => { toast.error(err.response.data.message) })
    } else {
      await postCategory(data).then((res) => {
        toast.success(res?.data?.message);
        setTimeout(() => {
          navigate('/admin/Category');
        }, 2000);
      }).catch((err) => { toast.error(err.response.data.message) })
    }
  }
  

  useEffect(() => {
    if (catId) {
      getCategoryById(catId).then((res) => {
        let data = res?.data?.category;
        setCategoryName(data?.categoryName);
        setSelectedCategoryImage(data?.image?.url);
      })
    }
  }, []);
 

  return (
    <Box sx={{ ml: [4, 25, 25], mr: [12, 6, 8], mt: [12, 15, 15] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />
      <Toaster />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography 
            sx={{
              fontFamily: 'Roboto',
              fontSize: '32px',
              fontWeight:"800"
            }}>
            New Category
          </Typography>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, width: '100%' }}>
                <img src={selectedCategoryImage} alt="Category" style={{ maxWidth: '100%', borderRadius: '10%' }} />
                <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" onChange={(e) => handleImageUpload(e, false)} />
                <label htmlFor="icon-button-file" style={{ position: 'absolute' }}>
                  <IconButton
                    color="primary"
                    component="span"
                    sx={{
                      color: 'darkblue',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                      fontSize: '2rem'
                    }}
                  >
                    <PhotoCamera fontSize="inherit" />
                  </IconButton>
                </label>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1 }}>
              <Button
  variant="contained"
  color="primary"
  sx={{
    ml: 2,
    ...(theme) => ({
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.75rem', // Adjust font size for xs screens
      },
    }),
  }}
  onClick={saveClick}
>
  {catId ? "Update" : "Save"}
</Button>
<Button
  variant="contained"
  sx={{
    color: 'white',
    borderColor: 'white',
    ml: 2,
    ...(theme) => ({
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.75rem', // Adjust font size for xs screens
      },
    }),
  }}
  onClick={() => navigate('/admin/category')}
>
  Cancel
</Button>

              </Box>
            </Box>
            <TextField
  variant="outlined"
  label="Category Name"
  value={categoryName}
  onChange={handleCategoryNameChange}
  error={categoryNameError}
  helperText={categoryNameError ? 'Category name is required' : ''}
  sx={{
    ...(theme) => ({
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.875rem', // Adjust font size for xs screens
      },
    }),
  }}
/>

          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ backgroundColor: '#1bc5bd', textTransform: 'none', color: '#ffffff',
              fontSize: '0.875rem', fontWeight: 600 }}
          onClick={handleClick}
        >
          Add Sub Category
        </Button>
      </Box>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ bgcolor: "#f0f0f0", borderRadius: 2, p: 2, border: 1, borderColor: '#ccc', boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              Sub Category
            </Typography>
            <Box sx={{ bgcolor: "white", borderRadius: 2, p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField label="Name" variant="outlined" value={subcategoryName} onChange={handleSubcategoryNameChange} fullWidth />
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, width: '100%' }}>
              <img src={selectedSubcategoryImage} alt="Sub" style={{ maxWidth: '100%', borderRadius: '10%' }} />
              <input accept="image/*" style={{ display: 'none' }} id="icon-button-file-sub" type="file" onChange={(e) => handleImageUpload(e, true)} />
              <label htmlFor="icon-button-file-sub" style={{ position: 'absolute' }}>
                <IconButton
                  color="primary"
                  component="span"
                  sx={{
                    color: 'darkblue',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                    fontSize: '2rem'
                  }}
                >
                  <PhotoCamera fontSize="inherit" />
                </IconButton>
              </label>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button variant="contained" sx={{ backgroundColor: '#f0f0f0', color: '#000000' }} onClick={handleClose}>
                Cancel
              </Button>
              <Button
            variant='contained'
            style={{ backgroundColor: "#2A85FF", color: "white", borderRadius: 10, fontSize: 15 }}
            onClick={() => { saveClick() }}
          >{catId ? "Update" : "Save"}</Button>
            </Box>
          </Box>
        </Box>
      </Popover>

      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <img src={row.image} alt="category" style={{ width: 120, height: 80, borderRadius: '5%' }} />
                </TableCell>
                <TableCell>
                  <span style={{ fontWeight: 'bold' }}>{row.firstName}</span>
                </TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(row.id)} color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(row.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default NewCategory;

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
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Newcat from '../../Assets/Newcat.png';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';
import { getCategoryById, postCategory, updateCategory, postSubCategory, updateSubCategory, deleteSubCategoryById } from '../../Services/AdminServices';
import toast, { Toaster } from 'react-hot-toast';

function NewCategory() {
  const navigate = useNavigate();
  const { catId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryImage, setSelectedCategoryImage] = useState(Newcat);
  const [selectedSubcategoryImage, setSelectedSubcategoryImage] = useState(Newcat);
  const [categoryId, setCategoryId] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [categoryNameError, setCategoryNameError] = useState(false);
  const [image, setImage] = useState(null);
  const [subImage, setSubImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editSubcategory, setEditSubcategory] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteCategoryId, setDeleteCategoryId] = useState(null); 

  const deleteDialogOpen = (id) => {
    setDeleteCategoryId(id);
    setDeleteDialog(true);
  };

  const deleteDialogCancel = () => {
    setDeleteCategoryId(null);
    setDeleteDialog(false);
  };

  const deleteSubcategory = (id) => {
    deleteSubCategoryById(id)
      .then((res) => {
        toast.success(res?.data?.message);
        const updatedSubcategories = subcategories.filter(sub => sub._id !== id);
        setSubcategories(updatedSubcategories);
        deleteDialogCancel();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
    setEditMode(false);
    setEditSubcategory(null);
    setSubcategoryName('');
    setSelectedSubcategoryImage(Newcat);
    setSubImage(null);
  };

  const handleEdit = (subcategory, event) => {
    setEditMode(true);
    setEditSubcategory(subcategory);
    setSubcategoryName(subcategory.subcategoryName);
    setSelectedSubcategoryImage(subcategory?.image?.url || Newcat);
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = (id) => {
    deleteDialogOpen(id); 
  };

  const handleCategoryNameChange = (event) => setCategoryName(event.target.value);
  const handleSubcategoryNameChange = (event) => setSubcategoryName(event.target.value);

  const handleImageUpload = (e, isSubcategory) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;
      if (isSubcategory) {
        setSelectedSubcategoryImage(imageData);
        setSubImage(file);
      } else {
        setSelectedCategoryImage(imageData);
        setImage(file);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const saveCategory = async () => {
    let error = false;

    if (!catId && !image) {
      setImageError(true);
      error = true;
    } else {
      setImageError(false);
    }

    if (categoryName === '') {
      setCategoryNameError(true);
      error = true;
    } else {
      setCategoryNameError(false);
    }

    if (error) return;

    const formData = new FormData();
    if (!categoryId || image) {
      formData.append('image', image);
    }
    formData.append('categoryName', categoryName);

    try {
      if (catId) {
        await updateCategory(catId, formData);
      } else {
        await postCategory(formData);
      }
      toast.success('Category saved successfully');

      setCategoryName('');
      setSelectedCategoryImage(Newcat);
      setImage(null);

      setTimeout(() => {
        navigate('/admin/category');
      }, 2000);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const saveSubcategory = async () => {
    try {
      const formData = new FormData();
      formData.append('image', subImage);
      formData.append('subcategoryName', subcategoryName);
      formData.append('categoryId', catId);
      formData.append('SubcategoryId', editSubcategory);

      if (editMode && editSubcategory) {
        const response = await updateSubCategory(catId,editSubcategory._id, formData);
       console.log(response.data);
        const updatedSubcategory = response.data.subcategory;
  
        const updatedSubcategories = subcategories.map((sub) =>
          sub._id === updatedSubcategory._id ? updatedSubcategory : sub
        );
        setSubcategories(updatedSubcategories);
  
        setEditMode(false);
        setEditSubcategory(null);
        setSubcategoryName('');
        setSelectedSubcategoryImage(Newcat);
        setSubImage(null);
  
        toast.success('Subcategory updated successfully');
        handleClose();
      } else {
        const response = await postSubCategory(catId, formData);
        const newSubcategory = response.data.subcategory;
  
        setSubcategories([...subcategories, newSubcategory]);
  
        setSubcategoryName('');
        setSelectedSubcategoryImage(Newcat);
        setSubImage(null);
  
        toast.success('Subcategory saved successfully');
        handleClose();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  
  
  useEffect(() => {
    if (catId) {
      getCategoryById(catId)
        .then((res) => {
          let data = res?.data?.category;
          setCategoryName(data?.categoryName);
          setSelectedCategoryImage(data?.image?.url);
          setSubcategories(data?.subcategories || []);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  }, [catId]);

  return (
    <Box sx={{ ml: [4, 25, 25], mr: [4, 6, 8], mt: [12, 15, 15] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />
      <Toaster />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography sx={{  fontSize: '36px', }}>
            New Category
          </Typography>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 2,
                  width: '100%'
                }}
              >
                <img
                  src={selectedCategoryImage}
                  alt="Category"
                  style={{ maxWidth: '100%', borderRadius: '10%' }}
                />
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="icon-button-file"
                  type="file"
                  onChange={(e) => handleImageUpload(e, false)}
                />
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
                        fontSize: '0.75rem' 
                      }
                    })
                  }}
                  onClick={saveCategory}
                >
                  {catId ? 'Update' : 'Save'}
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    ml: 2,
                    ...(theme) => ({
                      [theme.breakpoints.down('xs')]: {
                        fontSize: '0.75rem'
                      }
                    })
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
                    fontSize: '0.875rem'
                  }
                })
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#1bc5bd',
            textTransform: 'none',
            color: '#ffffff',
            fontSize: '0.875rem',
            fontWeight: 600
          }}
          onClick={handleClick}
          disabled={!catId}
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
          <Box sx={{ bgcolor: '#f0f0f0', borderRadius: 2, p: 2, border: 1, borderColor: '#ccc', boxShadow: 3 }}>
            <Typography variant="h6" gutterBottom>
              {editMode ? 'Edit Subcategory' : 'Add Subcategory'}
            </Typography>
            <Box sx={{ bgcolor: 'white', borderRadius: 2, p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField label="Name" variant="outlined" value={subcategoryName} onChange={handleSubcategoryNameChange} fullWidth />
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, width: '100%' }}>
              <img src={selectedSubcategoryImage} alt="Sub" style={{ maxWidth: '100%', borderRadius: '10%' }} />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="icon-button-file-sub"
                type="file"
                onChange={(e) => handleImageUpload(e, true)}
              />
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
                variant="contained"
                style={{ backgroundColor: '#2A85FF', color: 'white', borderRadius: 10, fontSize: 15 }}
                onClick={saveSubcategory}
              >
                {editMode ? 'Update' : 'Save'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Popover>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableBody>
            {subcategories.map((subcategory) => (
              <TableRow key={subcategory._id}>
                <TableCell>
                  <img
                    src={subcategory.image?.url || Newcat}
                    alt="subcategory"
                    style={{ width: 120, height: 80, borderRadius: '5%' }}
                  />
                </TableCell>
                <TableCell>
                  <span style={{ fontWeight: 'bold' }}>{subcategory.subcategoryName}</span>
                </TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton onClick={(event) => handleEdit(subcategory, event)} color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(subcategory._id)} 
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog fullWidth={true} maxWidth="sm" open={deleteDialog} onClose={deleteDialogCancel}>
        <DialogTitle>Are you sure you want to remove this subcategory?</DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="primary" onClick={() => deleteSubcategory(deleteCategoryId)}>
              YES
            </Button>
            <Button color="error" onClick={deleteDialogCancel}>
              NO
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default NewCategory;

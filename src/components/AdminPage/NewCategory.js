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
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  Snackbar,
  TableContainer


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
import CloseIcon from '@mui/icons-material/Close';

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
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State to handle delete success snackbar
  const buttonDisabled = !catId;
  const getData = () => {
    if (catId) {
        getCategoryById(catId)
          .then((res) => {
            let data = res?.data?.category;
            setCategoryName(data?.categoryName);
            setSelectedCategoryImage(data?.image?.url);
            setSubcategories(data?.subcategories || []);
          })
          .catch((err) => {
            toast.error(err.response?.data?.message || 'Failed to fetch category');
          });
      }
  }

  // Open delete dialog for subcategory
  const deleteDialogOpen = (id) => {
    setDeleteCategoryId(id);
    setDeleteDialog(true);
  };

  // Close delete dialog for subcategory
  const deleteDialogCancel = () => {
    setDeleteCategoryId(null);
    setDeleteDialog(false);
  };

  // Delete subcategory by ID
  const deleteSubcategory = (id) => {
    deleteSubCategoryById(catId,id)
      .then((res) => {
        toast.success(res?.data?.message);
        // const updatedSubcategories = res.data.subcategories;
        // setSubcategories(updatedSubcategories);
        getData();
        setDeleteSuccess(true); // Trigger snackbar for delete success
        deleteDialogCancel(); // Close the delete dialog
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || 'Failed to delete subcategory');
      });
  };

  // Open admin drawer
  const handleDrawerOpen = () => setDrawerOpen(true);

  // Close admin drawer
  const handleDrawerClose = () => setDrawerOpen(false);

  // Handle click event for subcategory popover
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  // Close subcategory popover
  const handleClose = () => {
    setAnchorEl(null);
    setEditMode(false);
    setEditSubcategory(null);
    setSubcategoryName('');
    setSelectedSubcategoryImage(Newcat);
    setSubImage(Newcat);

    // Fetch category by ID if catId exists
    if (catId) {
      getCategoryById(catId)
        .then((res) => {
          let data = res?.data?.category;
          setCategoryName(data?.categoryName);
          setSelectedCategoryImage(data?.image?.url);
          setSubcategories(data?.subcategories || []);
        })
        .catch((err) => {
          toast.error(err.response?.data?.message || 'Failed to fetch category');
        });
    }
  };

  // Handle edit mode for subcategory
  const handleEdit = (subcategory, event) => {
    setEditMode(true);
    setEditSubcategory(subcategory);
    setSubcategoryName(subcategory?.subcategoryName || ''); // Ensure subcategoryName is defined
    setSelectedSubcategoryImage(subcategory?.image?.url || Newcat);
    setAnchorEl(event.currentTarget);
  };

  // Handle delete subcategory
  const handleDelete = (id) => {
    deleteDialogOpen(id);
  };

  // Handle category name change
  const handleCategoryNameChange = (event) => setCategoryName(event.target.value);

  // Handle subcategory name change
  const handleSubcategoryNameChange = (event) => setSubcategoryName(event.target.value);



// Handle category image upload
const handleCategoryImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    const imageData = reader.result;
    setSelectedCategoryImage(imageData);
    setImage(file);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};

// Handle subcategory image upload
const handleSubcategoryImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    const imageData = reader.result;
    setSelectedSubcategoryImage(imageData);
    setSubImage(file);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};



  // Save category details
  const saveCategory = async () => {
    let error = false;

    if (!catId && !image) {
      setImageError(true);
      error = true;
    } else {
      setImageError(false);
    }

    if (categoryName.trim() === '') {
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
      toast.error(err.response?.data?.message || 'Failed to save category');
    }
  };

  // Save subcategory details
  const saveSubcategory = async () => {
    try {
      const formData = new FormData();
      formData.append('image', subImage);
      formData.append('subcategoryName', subcategoryName);
      formData.append('categoryId', catId);

      if (editMode) {
        // Update existing subcategory
        const response = await updateSubCategory(catId,editSubcategory._id, formData);
        const newSubcategory = response.data.subcategories;
        setSubcategories(newSubcategory);
        toast.success('Subcategory Updated successfully');
      } else {
        // Add new subcategory
        const response = await postSubCategory(catId, formData);
        console.log(response.data);

        const newSubcategory = response.data.subcategories;
        setSubcategories(newSubcategory);
        toast.success('Subcategory saved successfully');
      }

      // Reset form fields and close popover or dialog
      setSubcategoryName('');
      setSelectedSubcategoryImage(Newcat);
      setSubImage(Newcat);
      handleClose();
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to save subcategory');
      handleClose(); // Close popover or dialog on error
    }
  };

  // Fetch category details by ID on component mount
  useEffect(() => {
    getData();
  }, [catId]);

  return (
    <Box sx={{ ml: [4, 25, 25], mr: [4, 6, 8], mt: [12, 15, 15] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />
      <Toaster />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5" gutterBottom sx={{fontWeight:'bold'}}>
         
            {catId ? 'Edit Category' : 'Add New Category'}
          </Typography>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <img
                src={selectedCategoryImage}
                alt="Category"
                style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '10px' }}
              />
              <input
                accept="image/*"
                type="file"
                id="icon-button-file"
                style={{ display: 'none' }}
                onChange={handleCategoryImageUpload}

              />
              <label htmlFor="icon-button-file">
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '35px',
                    color: 'primary.dark',
                    bgcolor: 'primary.light',
                    '&:hover': { bgcolor: 'primary.main' }
                  }}
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>

            <TextField
              id="category-name"
              label="Category Name"
              variant="outlined"
              value={categoryName}
              onChange={handleCategoryNameChange}
              error={categoryNameError}
              helperText={categoryNameError ? 'Category name is required' : ''}
              sx={{ width: '100%' }}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{ width: '100%' }}
              onClick={saveCategory}
              disabled={loading}
            >
              Save Category
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
        <Typography variant="h5" gutterBottom sx={{fontWeight:'bold'}}>
         Sub Category
        </Typography>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ mb: 2 }}
              onClick={handleClick}
              disabled={buttonDisabled} 
            >
              Add Subcategory
            </Button>

            <TableContainer component={Paper}>
  <Table aria-label="subcategories table">
    <TableBody>
      {subcategories?.map((subcategory) => (
        <TableRow key={subcategory._id}>
          <TableCell>
            <img
              src={subcategory.image?.url || Newcat}
              alt={subcategory.subcategoryName || ''}
              style={{ maxWidth: '100%', maxHeight: '100px', borderRadius: '10px' }}
            />
          </TableCell>
          <TableCell>{subcategory.subcategoryName || ''}</TableCell>
          <TableCell>
            <Tooltip title="Edit">
              <IconButton onClick={(event) => handleEdit(subcategory, event)} color="primary">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDelete(subcategory._id)} color="error">
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
        </Grid>
      </Grid>

      {/* Popover for Add/Edit Subcategory */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">{editMode ? 'Edit Subcategory' : 'Add Subcategory'}</Typography>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <img
              src={selectedSubcategoryImage}
              alt="Subcategory"
              style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '10px' }}
            />
            <input
              accept="image/*"
              type="file"
              id="subcategory-image"
              style={{ display: 'none' }}
              onChange={handleSubcategoryImageUpload}
            />
            <label htmlFor="subcategory-image">
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: '5px',
                  right: '5px',
                  color: 'primary.dark',
                  bgcolor: 'primary.light',
                  '&:hover': { bgcolor: 'primary.main' }
                }}
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>

          <TextField
            id="subcategory-name"
            label="Subcategory Name"
            variant="outlined"
            value={subcategoryName}
            onChange={handleSubcategoryNameChange}
            sx={{ width: '100%' }}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%' }}
            onClick={saveSubcategory}
            disabled={loading}
          >
            {editMode ? 'Update Subcategory' : 'Save Subcategory'}
          </Button>
        </Box>
      </Popover>

      {/* Delete Subcategory Dialog */}
      <Dialog open={deleteDialog} onClose={deleteDialogCancel}>
        <DialogTitle>Delete Subcategory</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this subcategory?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
            <Button onClick={deleteDialogCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={() => deleteSubcategory(deleteCategoryId)} color="error" variant="contained">
              Delete
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Delete Success Snackbar */}
      <Snackbar
        open={deleteSuccess}
        autoHideDuration={6000}
        onClose={() => setDeleteSuccess(false)}
        message="Subcategory deleted successfully"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setDeleteSuccess(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
}

export default NewCategory;
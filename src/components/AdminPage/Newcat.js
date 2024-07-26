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
  DialogContent,
  DialogActions
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
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State for showing delete success message

  // Open delete dialog for subcategory
  const deleteDialogOpen = (id) => {
    setDeleteCategoryId(id);
    setDeleteDialog(true);
  };

  // Close delete dialog for subcategory
  const deleteDialogCancel = () => {
    setDeleteDialog(false);
  };

  // Delete subcategory by ID
  const deleteSubcategory = (id) => {
    deleteSubCategoryById(id)
      .then((res) => {
        toast.success(res?.data?.message);
        const updatedSubcategories = subcategories.filter(sub => sub._id !== id);
        setSubcategories(updatedSubcategories);
        setDeleteSuccess(true); // Show delete success message
        setTimeout(() => {
          setDeleteSuccess(false); // Hide delete success message after some time
        }, 3000); // Adjust the time as needed
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          toast.error('Subcategory not found. It may have already been deleted.');
        } else {
          toast.error(err.response?.data?.message || 'Failed to delete subcategory');
        }
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
    setSubImage(null);

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
    setSubcategoryName(subcategory.subcategoryName);
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

  // Handle image upload for category or subcategory
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

  // Save category details
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
      formData.append('SubcategoryId', editSubcategory._id);

      if (editMode && editSubcategory) {
        const response = await updateSubCategory(catId, editSubcategory._id, formData);
        const subcat_updated = response.data.subcategory;
        setSubcategories(subcategories.map(sub =>
          sub._id === subcat_updated._id ? subcat_updated : sub
        ));
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
      toast.error(err?.response?.data?.message || 'Failed to save subcategory');
    }
  };

  // Fetch category details by ID on component mount
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
          toast.error(err.response?.data?.message || 'Failed to fetch category');
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
          <Typography sx={{ fontSize: '24px' }}>
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
                    aria-label="upload picture"
                    component="span"
                    style={{ backgroundColor: 'white', position: 'absolute' }}
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Box>
            </Box>
          </Box>
          <TextField
            id="categoryName"
            label="Category Name"
            variant="outlined"
            value={categoryName}
            onChange={handleCategoryNameChange}
            error={categoryNameError}
            helperText={categoryNameError ? 'Category name is required' : ''}
            sx={{ mt: 3, width: '100%' }}
          />
          <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={saveCategory}
              disabled={loading}
            >
              {catId ? 'Update Category' : 'Save Category'}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography sx={{ fontSize: '24px' }}>
            Subcategories
          </Typography>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {subcategories.map((subcategory) => (
                    <TableRow key={subcategory._id}>
                      <TableCell>
                        <img
                          src={subcategory?.image?.url || Newcat}
                          alt="subcategory"
                          style={{ width: 120, height: 80, borderRadius: '5%' }}
                        />
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>{subcategory?.subcategoryName}</span>
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
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                startIcon={<AddIcon />}
              >
                Add Subcategory
              </Button>
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
                <Box sx={{ p: 2, minWidth: 300 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {editMode ? 'Edit Subcategory' : 'Add Subcategory'}
                  </Typography>
                  <TextField
                    fullWidth
                    id="subcategoryName"
                    label="Subcategory Name"
                    variant="outlined"
                    value={subcategoryName}
                    onChange={handleSubcategoryNameChange}
                    sx={{ mb: 2 }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: 120,
                        mt: 2,
                      }}
                    >
                      <img
                        src={selectedSubcategoryImage}
                        alt="Subcategory"
                        style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10%' }}
                      />
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
                          style={{ position: 'absolute', bottom: 0, right: 0 }}
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={saveSubcategory}
                      sx={{ mr: 2 }}
                    >
                      {editMode ? 'Update Subcategory' : 'Save Subcategory'}
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Popover>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Delete Subcategory Dialog */}
      <Dialog open={deleteDialog} onClose={deleteDialogCancel}>
        <DialogTitle>Delete Subcategory</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this subcategory?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteDialogCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={() => { deleteSubcategory(deleteCategoryId); deleteDialogCancel(); }} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Success Snackbar */}
      <Snackbar
        open={deleteSuccess}
        autoHideDuration={3000}
        onClose={() => setDeleteSuccess(false)}
        message="Subcategory deleted successfully"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key={'delete-success-snackbar'}
      />
    </Box>
  );
}

export default NewCategory;

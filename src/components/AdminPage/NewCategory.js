import React, { useState } from 'react';
import { Typography, Popover, Box, Paper, Button, Grid, IconButton, Tooltip, TextField, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Newcat from '../../Assets/Newcat.png';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';

const rows = [
  { id: 1, firstName: 'Villa', image: Newcat },
  { id: 2, firstName: 'A Roof', image: Newcat },
  { id: 3, firstName: 'Villa 2', image: Newcat },
  { id: 4, firstName: 'Tiny House', image: Newcat },
];

function NewCategories() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [selectedImage, setSelectedImage] = useState(Newcat);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleEdit = (params) => console.log('Edit:', params);
  const handleDelete = (params) => console.log('Delete:', params);
  const handleCategoryNameChange = (event) => setCategoryName(event.target.value);
  const handleSave = () => {
    console.log('Save:', categoryName);
    handleClose();
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <Box sx={{ ml: [4, 25, 25], mr: [4, 6, 6], mt: [12, 15, 15] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" component="div" gutterBottom>
            Category
          </Typography>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <img src={Newcat} alt="New Category" style={{ maxWidth: '30%' }} />
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1 }}>
                <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                  Save
                </Button>
                <Button variant="contained" sx={{ color: 'white', borderColor: 'white' }}>
                  Cancel
                </Button>
              </Box>
            </Box>
            <TextField variant="outlined" label="Category Name" />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ backgroundColor: '#1bc5bd', textTransform: 'none', color: '#ffffff', fontFamily: 'Poppins, var(--default-font-family)', fontSize: '16px', fontWeight: 600 }}
          onClick={handleClick}
        >
          Add New Category
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
              <TextField label="Name" variant="outlined" value={categoryName} onChange={handleCategoryNameChange} fullWidth />
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, width: '100%' }}>
              <img src={selectedImage} alt="Sub" style={{ maxWidth: '100%', borderRadius: '10%' }} />
              <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" onChange={handleImageUpload} />
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
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button variant="contained" sx={{ backgroundColor: '#f0f0f0', color: '#000000' }} onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
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
}

export default NewCategories;

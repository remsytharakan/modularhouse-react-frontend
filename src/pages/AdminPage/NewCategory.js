import React, { useState } from 'react';
import { Typography, Popover, Box, Button, IconButton, Tooltip, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Newcat from '../../Assets/Newcat.png';

const rows = [
  { id: 1, firstName: 'Villa', image: Newcat },
  { id: 2, firstName: 'A Roof', image: Newcat },
  { id: 3, firstName: 'Villa 2', image: Newcat },
  { id: 4, firstName: 'Tiny House', image: Newcat },
];

function Categories() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [selectedImage, setSelectedImage] = useState(Newcat);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (params) => {
    // Handle edit action
    console.log('Edit:', params);
  };

  const handleDelete = (params) => {
    // Handle delete action
    console.log('Delete:', params);
  };

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleSave = () => {
    // Add save logic here, if any
    console.log('Save:', categoryName);
    handleClose();
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const columns = [
    { field: 'id', headerName: 'Select', width: 70 },
    { field: 'image', headerName: 'Image', width: 180, renderCell: (params) => (<img src={params.value} alt="category" style={{ width: 110, height: 100, borderRadius: '10%' }} />) },
    { field: 'firstName', headerName: '', width: 1100, renderCell: (params) => <span style={{ fontWeight: 'bold' }}>{params.value}</span> },
    { field: 'edit', headerName: 'Action', width: 60, renderCell: (params) => (
      <Tooltip title="Edit">
        <IconButton onClick={() => handleEdit(params)} color="primary">
          <EditIcon />
        </IconButton>
      </Tooltip>
    )},
    { field: 'delete', headerName: '', width: 120, renderCell: (params) => (
      <Tooltip title="Delete">
        <IconButton onClick={() => handleDelete(params)} color="error">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    )}
  ];

  return (
    <div style={{ marginTop: '2%', marginLeft: '2%' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3%', marginRight: '2%' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#1bc5bd',
            textTransform: 'none',
            color: '#ffffff',
            fontFamily: 'Poppins, var(--default-font-family)',
            fontSize: '16px',
            fontWeight: 600,
            width: { xs: '60%', sm: '50%', lg: '14%' }
          }}
          onClick={handleClick}
        >
          Add New Category
        </Button>
      </div>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div style={{ padding: '20px' }}>
          <Box
            bgcolor="#f0f0f0"
            borderRadius="8px"
            padding="20px"
            border="1px solid #ccc"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            <Typography variant="h6" gutterBottom>
              Sub Category
            </Typography>
            <Box
              bgcolor="white"
              borderRadius="8px"
              padding="8px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <TextField
                label="Name"
                variant="outlined"
                value={categoryName}
                onChange={handleCategoryNameChange}
                fullWidth
              />
            </Box>
            <Box
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop="10px"
              width="100%"
            >
              <img src={selectedImage} alt="Sub" style={{ maxWidth: '100%', borderRadius: '10%' }} />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="icon-button-file"
                type="file"
                onChange={handleImageUpload}
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
            <Box marginTop="10px" gap="2%" display="flex" justifyContent="center">
              <Button 
                variant="contained"  
                sx={{ 
                  backgroundColor: '#f0f0f0',
                  color: '#000000',
                  marginRight: '10px' 
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Box>
        </div>
      </Popover>

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5, 10, 100]}
          checkboxSelection
          getRowHeight={() => 110}
        />
      </div>
    </div>
  );
}

export default Categories;

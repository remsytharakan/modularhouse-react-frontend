import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import {  Dialog, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';
import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { deleteCategoryById, getAllCategories } from '../../Services/AdminServices';
import toast, { Toaster } from 'react-hot-toast';


function Category  ()  {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
 
  const [loading, setLoading] = useState(false);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [CategoryId, setCategoryId] = useState("");

  const deleteDialogOpen = (id) => {
    setCategoryId(id);
    setDeleteDialog(true);
  }
  const deleteDialogCancel = () => {
    setCategoryId("");
    setDeleteDialog(false);
  }


  const getCategories = async () => {
    setLoading(true);
    await getAllCategories()
      .then((res) => {

        let response = res?.data?.categories;
        
        setCategories(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleButtonClick = () => {
    navigate('/admin/newcategory');
  };

  const deleteCategory = (id) => {
    deleteCategoryById(id).then((res) => {
      toast.success(res?.data?.message);
      setTimeout(() => {
        getCategories();
        deleteDialogCancel();
      }, 2000);
    }).catch((err) => { toast.error(err.response.data.message) })
  };


  const editCategory = (id) => {
    navigate(`/admin/edit-category/${id}`)
  }


  

  return (
    <Box sx={{ ml: [4, 25, 25], mt: [10, 15, 15],mr:[4,8,8] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />

      <Box>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
          
           
            sx={{
              
              fontSize: '36px',
              
            }}
          >
            Category
          </Typography>

          <div style={{ position: 'relative', marginLeft: '20px' }}>
            <InputBase
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
              style={{
                paddingLeft: '50px',
                paddingTop: '12px',
                width: isXsScreen ? '100%' : 'auto',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 8,
                top: '65%',
                transform: 'translateY(-50%)',
                padding: '8px',
                borderRadius: '50%',
              }}
            >
              <SearchIcon />
            </div>
          </div>
        </div>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2,mt:[2,0,0],mb:[2,1,1]  }}>
      <Button
        variant="contained"
        startIcon={<ArrowDropDownIcon />}
        sx={{
          backgroundColor: '#f0f0f0',
          textTransform: 'none',
          color: '#000000',
        
          fontSize: '0.875rem', 
          fontWeight: 600,
          minWidth: '120px',
          [theme.breakpoints.down('xs')]: {
            fontSize: '0.5rem', 
          },
        }}
      >
        Sort
      </Button>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          backgroundColor: '#1bc5bd',
          textTransform: 'none',
          color: '#ffffff',
          fontFamily: 'Poppins, var(--default-font-family)',
          fontSize: '0.875rem', 
          fontWeight: 600,
          minWidth: '160px', 
          [theme.breakpoints.down('xs')]: {
            fontSize: '0.75rem', 
            minWidth: '140px', 
          },
        }}
        onClick={handleButtonClick}
      >
        Add New Category
      </Button>
    </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {categories.map((category) => (
               
                <TableRow key={category?._id}>
                  <TableCell>
                    <img
                      src={category?.image?.url}
                      alt="category"
                      style={{ width: 120, height: 80, borderRadius: '5%' }}
                    />
                  </TableCell>
                  <TableCell>
                    <span style={{ fontWeight: 'bold' }}>{category?.categoryName}</span>
                  </TableCell>
                  <TableCell>
                  <Tooltip title="Edit">
  <IconButton onClick={() => editCategory(category?._id)} color="primary">
    <EditIcon />
  </IconButton>
</Tooltip>

                  </TableCell>
                  <TableCell>
                  <span title="Delete Category">
                          <DeleteIcon sx={{ cursor: 'pointer' }} color='error' onClick={() => { deleteDialogOpen(category?._id) }} />
                        </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={deleteDialog}
        onClose={() => deleteDialogCancel()}
      >
        <DialogTitle>
          Are you sure you want to remove this category?
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", justifyContent: "center", gap: 2, flexDirection: 'wrap' }}>
            <Button variant="contained" color='primary' sx={{ fontSize: 15 }} onClick={() => { deleteCategory(CategoryId) }}>YES</Button>
            <Button color='error' sx={{ fontSize: 15 }} onClick={deleteDialogCancel} >NO</Button>
          </div>
        </DialogContent>
      </Dialog>
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
  );
};

export default Category;

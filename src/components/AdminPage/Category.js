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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';
import { useTheme, } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import {  getAllCategories } from '../../Services/AdminServices';

const handleEdit = (id) => {
  // Handle edit action here
  console.log("Edit clicked", id);
};

const handleDelete = (id) => {
  // Handle delete action here
  console.log("Delete clicked", id);
};

const Categories = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    setLoading(true);
    await getAllCategories()
      .then((res) => {

        let response = res?.data?.categories;
        console.log(response);
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
    navigate('/newcategory');
  };

  const editCategory = (id) => {
    navigate(`/edit-category/${id}`)
  }



  return (
    <Box sx={{ ml: [4, 25, 25], mt: [10, 15, 15],mr:[4,8,8] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />

      <Box>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
          
           
            sx={{
              fontFamily: 'Roboto',
              fontSize: '36px',
              fontWeight:"800"
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
        
          fontSize: '0.875rem', // Adjust font size for smaller screens
          fontWeight: 600,
          minWidth: '120px',
          [theme.breakpoints.down('xs')]: {
            fontSize: '0.5rem', // Further adjust font size for xs screens
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
          fontSize: '0.875rem', // Adjust font size for smaller screens
          fontWeight: 600,
          minWidth: '160px', // Ensure consistent button width
          [theme.breakpoints.down('xs')]: {
            fontSize: '0.75rem', // Further adjust font size for xs screens
            minWidth: '140px', // Adjust width for xs screens
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
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(category.id)} color="error">
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
    </Box>
  );
};

export default Categories;

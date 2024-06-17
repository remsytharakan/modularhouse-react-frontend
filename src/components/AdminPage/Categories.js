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
import { useTheme } from '@mui/material/styles';
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

  return (
    <Box sx={{ ml: [4, 25, 25], mt: [12, 15, 15] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />

      <Box>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            color="textPrimary"
            fontWeight="800"
            sx={{
              fontFamily: 'Roboto',
              fontSize: '32px',
              lineHeight: '26px',
            }}
          >
            Categories
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '3%',
            marginTop: '-1.5%',
            marginRight: '2%',
            gap: '2%',
          }}
        >
          <Button
            variant="contained"
            startIcon={<ArrowDropDownIcon />}
            sx={{
              backgroundColor: '#f0f0f0',
              textTransform: 'none',
              color: '#000000',
              fontFamily: 'Poppins, var(--default-font-family)',
              fontSize: '16px',
              fontWeight: 600,
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
              fontSize: '16px',
              fontWeight: 600,
            }}
            onClick={handleButtonClick}
          >
            Add New Category
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <img
                      src={category?.image?.url}
                      alt="category"
                      style={{ width: 120, height: 80, borderRadius: '5%' }}
                    />
                  </TableCell>
                  <TableCell>
                    <span style={{ fontWeight: 'bold' }}>{category.categoryName}</span>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEdit(category.id)} color="primary">
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

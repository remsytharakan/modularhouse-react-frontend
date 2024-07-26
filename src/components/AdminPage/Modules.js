import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Card,
  Button,
  IconButton,
  Tooltip,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getAllHouses, deleteHouseById } from '../../Services/AdminServices';
import toast,   { Toaster }   from 'react-hot-toast';
import {  Dialog, DialogContent, DialogTitle } from '@mui/material';
function Modules() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [HouseId, setHouseId] = useState("");
  const deleteDialogOpen = (id) => {
    setHouseId(id);
    setDeleteDialog(true);
  }
  const deleteDialogCancel = () => {
    setHouseId("");
    setDeleteDialog(false);
  }







  useEffect(() => {
    getHouses();
  }, []);

  const getHouses = async () => {
    setLoading(true);
    try {
      const response = await getAllHouses();
      setHouses(response?.data?.houses || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching houses:', error);
      setLoading(false);
      toast.error('Failed to fetch houses.');
    }
  };

  

  const handleEdit = (house) => {
    console.log('Edit:', house);
    // Implement edit functionality or navigation to edit page
  };

  const handleDelete = async (house) => {
    console.log('Delete:', house);
    try {
      await deleteHouseById(house.id);
      getHouses(); // Refetch houses after deletion
      toast.success('House deleted successfully.');
    } catch (error) {
      console.error('Error deleting house:', error);
      toast.error('Failed to delete house.');
    }
  };

  const handleButtonClick = () => {
    navigate('/admin/newmodule');
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const editHouse = (id) => {
    navigate(`/admin/newmodule`)
  }




  return (
    <Box sx={{ ml: [4, 25, 25], mt: [12, 15, 15], mr: [4, 8, 8] }}>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />

      <Box>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{fontWeight:'bold'}}>
          Modules
        </Typography>
          <div
            style={{
              position: 'relative',
              marginLeft: '20px',
            }}
          >
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              style={{
                paddingLeft: '50px',
                paddingTop: '12px',
                width: 'auto',
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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            mt: [2, 0, 0],
            mb: [2, 1, 1],
          }}
        >
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
            Category
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
            Add New Module
          </Button>
        </Box>

        <Card>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>House Name</TableCell>
                  <TableCell>Basic Price</TableCell>
                 

                  <TableCell>Description</TableCell>
                 
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={7} style={{ textAlign: 'center' }}>
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : (
                  houses.map((house) => (
                    <TableRow key={house.id}>
                      <TableCell>
                        <img
                          src={house.images}
                          alt="House"
                          style={{
                            width: 100,
                            height: 95,
                            borderRadius: '5%',
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>
                          {house.name}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ fontWeight: 'bold' }}>
                          {house.basicPrice}
                        </span>
                      </TableCell>
                     
                      
                      <TableCell>
                        <span style={{ color: 'grey', fontWeight: 'bold' }}>
                          {house.description}
                        </span>
                      </TableCell>



                      <TableCell>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => editHouse(house?._id)} color="primary"  >
                            <EditIcon  />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                      <span title="Delete ">
                          <DeleteIcon sx={{ cursor: 'pointer' }} color='error' onClick={() => { deleteDialogOpen(house?._id) }} />
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
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
            <Button variant="contained" color='primary' sx={{ fontSize: 15 }} onClick={() => { deleteDialogOpen(HouseId) }}>YES</Button>
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
}

export default Modules;

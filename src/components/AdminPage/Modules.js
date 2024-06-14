import React, { useState } from 'react';
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
import M1 from '../../Assets/C1.png';
import M2 from '../../Assets/C2.png';
import M3 from '../../Assets/C3.png';
import M4 from '../../Assets/C1.png';
import M5 from '../../Assets/C2.png';
import Navbar from '../../Dashboard/AdminNavbar';
import Sidebar from '../../Dashboard/Sidebar';



const rows = [
  { id: 1, image: M1, HouseName: 'Villa Arora', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Villa' },
  { id: 2, image: M2, HouseName: 'Elena Tiny House', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Tiny House' },
  { id: 3, image: M3, HouseName: 'Villa Amelia', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Roof' },
  { id: 4, image: M4, HouseName: 'Ode Roof', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Villa' },
  { id: 5, image: M5, HouseName: 'Villa Arora', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Tiny House' },
];

const handleEdit = (params) => {
  console.log('Edit:', params);
  // Implement the edit functionality here
};

const handleDelete = (params) => {
  console.log('Delete:', params);
  // Implement the delete functionality here
};

function Modules() {
  const [drawerOpen, setDrawerOpen] = useState(false);
 
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleAddNewModule = () => {
    navigate('/newmodules'); 
  };

  return (
    <Box sx={{  ml: [4, 25, 25], mt: [12, 15, 15] }}>
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
            Modules
          </Typography>
          <div style={{ position: 'relative', marginLeft: '20px' }}>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              style={{
                paddingLeft: '50px',
                paddingTop: '12px',
                width: 'auto'
              }}
            />
            <div style={{ position: 'absolute', left: 8, top: '65%', transform: 'translateY(-50%)', padding: '8px', borderRadius: '50%' }}>
              <SearchIcon />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3%', marginTop: '-1.5%', marginRight: '2%', gap: '2%' }}>
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
              marginTop: { xs: '6%', sm: '3%', lg: '-1%' },
              marginBottom: { xs: '6%', sm: '3%', lg: '2%' },
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
              fontSize: '16px',
              fontWeight: 600,
              marginTop: { xs: '6%', sm: '3%', lg: '-1%' },
              marginBottom: { xs: '6%', sm: '3%', lg: '2%' },
            }}
            onClick={handleAddNewModule}
          >
            Add New Module
          </Button>
        </div>
        <Card>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>House Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Area</TableCell>
                  <TableCell>House Type</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <img src={row.image} alt="avatar" style={{ width: 100, height: 95, borderRadius: '5%' }} />
                    </TableCell>
                    <TableCell><span style={{ fontWeight: 'bold' }}>{row.HouseName}</span></TableCell>
                    <TableCell><span style={{ fontWeight: 'bold' }}>{row.Price}</span></TableCell>
                    <TableCell><span style={{ color: 'grey', fontWeight: 'bold' }}>{row.Area}</span></TableCell>
                    <TableCell>
                      {(() => {
                        let color;
                        switch(row.HouseType) {
                          case 'Villa':
                            color = 'blue';
                            break;
                          case 'Tiny House':
                            color = 'green';
                            break;
                          case 'Roof':
                            color = 'red';
                            break;
                          default:
                            color = 'black';
                        }
                        return <span style={{ color, fontWeight: 'bold' }}>{row.HouseType}</span>;
                      })()}
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleEdit(row)}>
                          <EditIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(row)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </Box>
  );
}

export default Modules;

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import L1 from '../DashImages/Assets/L1.png';
import L2 from '../DashImages/Assets/L2.png';
import L3 from '../DashImages/Assets/L3.png';

const salesData = [
  {
    id: 1,
    image: L1,
    name: 'Villa Vesa',
    area: 'Net area: 16.00 m²',
    price: '€2000.00',
    customRate: '€2600.00',
  },
  {
    id: 2,
    image: L2,
    name: 'Villa Aurora',
    area: 'Net area: 16.00 m²',
    price: '€2000.00',
    customRate: '€2600.00',
  },
  {
    id: 3,
    image: L3,
    name: 'Alpha Roof',
    area: 'Net area: 16.00 m²',
    price: '€2000.00',
    customRate: '€2600.00',
  },
];

function LatestSales() {
  const isSm = useMediaQuery('(max-width:600px)'); // Adjust breakpoint for your needs

  return (
    <Box sx={{ 
      width: '100%', 
      height: '500px', 
      // marginTop: isSm ? 4 : 10, 
      // marginLeft: isSm ? 5 : { lg: 5 },
      // marginRight:isSm ? 10:10,
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white', // Set card background color to white
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: isSm ? '10px' : '20px',
        padding: '15px',
        borderBottom: '1px solid #e0e0e0',
      }}>
        <Typography
          sx={{
            color: '#212121',
            fontSize: isSm ? '16px' : '20px',
            fontWeight: 'bold',
          }}
        >
          Latest Sales
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#ffe2e5',
            borderRadius: '6px',
            padding: '8px 12px',
            flexWrap:'wrap'
          }}
        >
          <Typography
            sx={{
              color: '#f64e60',
              fontFamily: 'Poppins, var(--default-font-family)',
              fontSize: isSm ? '12px' : '15px',
              fontWeight: 400,
              margin: 'auto',
            }}
          >
            Category
          </Typography>
          <ArrowDropDownIcon />
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ height: 'calc(100% - 0px)' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Area</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Custom Rate</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <img src={row.image} alt={row.name} width={isSm ? 60 : 90} height={isSm ? 50 : 80} />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.area}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.customRate}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="small"
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LatestSales;

import React from 'react';
import {
  Grid,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import pic2 from '../../Assets/pic2.png';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = ['Image', 'Product', 'Price', 'Quantity', 'Subtotal'];

const rows = [
  { product: 'Fleet-set1', price: '€4000.00', quantity: '1', subtotal: '€4000.00' },
  { product: 'Fleet-set1', price: '€4000.00', quantity: '1', subtotal: '€4000.00' },
];

const Custom4 = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8} lg={8}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column}>
                    <Typography variant="h6">{column}</Typography>
                  </TableCell>
                ))}
                <TableCell></TableCell> {/* For the Delete column */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={pic2} alt="Your Image" style={{ width: '50%' ,height:'50%'}} />
                  </TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.subtotal}</TableCell>
                  <TableCell>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          paddingRight={{ xs: '0px', sm: '60px', md: '80px', lg: '100px' }}
          paddingLeft={{ xs: '10px' }}
          marginTop='10%'
        >
          <Box bgcolor="#fbe9e7" height='120%' width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Box paddingTop="1%">
              <Typography variant="h4" fontWeight="bold">Product Details</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" paddingTop="8%">
              <Typography variant="h6" style={{ marginRight: '80px' }}>Subtotal</Typography>
              <Typography variant="h8">€ 30,000.0</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" paddingTop="8%" marginBottom='6%'>
              <Typography variant="h6" style={{ marginRight: '80px' }}>Total</Typography>
              <Typography variant="h8">€ 30,000.0</Typography>
            </Box>
            <Button style={{ border: '2px solid #000', padding: '10px', marginBottom: '50px' }}>Check Out</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Custom4;

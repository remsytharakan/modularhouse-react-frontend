import React from 'react';
import {
  Grid,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = ['', 'Product', 'Type', 'Price', 'Quantity', 'Subtotal'];

const ProductDetails = ({ selectedCards, onRemoveCard }) => {
  const calculateTotal = () => {
    return selectedCards.reduce((total, card) => total + card.price, 0);
  };

  return (
    <Box mx={{ xs: 2, sm: 3, md: 4, lg: 8 }} mt={8}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box boxShadow={3} borderRadius={5} p={3}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column}>
                        <Typography variant="h6" color="textSecondary">{column}</Typography>
                      </TableCell>
                    ))}
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedCards.map((card, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img src={card.image?.url || ''} alt="" style={{ width: '50px' }} />
                      </TableCell>
                      <TableCell>{card.name}</TableCell>
                      <TableCell>{card.type}</TableCell>
                      <TableCell>€{card.price.toFixed(2)}</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>€{card.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => onRemoveCard(card.type)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box bgcolor="#fbe9e7" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
            <Typography variant="h4" fontWeight="bold">Product Details</Typography>
            <Box mt={3} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h6" mr={8}>Subtotal</Typography>
              <Typography variant="h8">€ {calculateTotal().toFixed(2)}</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mt={3} mb={6}>
              <Typography variant="h6" mr={8}>Total</Typography>
              <Typography variant="h8">€ {calculateTotal().toFixed(2)}</Typography>
            </Box>
            <Button style={{ border: '2px solid #000', marginBottom: '50px' }}>Check Out</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
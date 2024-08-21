import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Typography,
  IconButton,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductDetails = ({ selectedCards, onRemoveCard, onCheckout, house }) => {
  const navigate = useNavigate();
  const [cardQuantities, setCardQuantities] = useState(
    selectedCards.reduce((acc, card) => ({ ...acc, [card.id]: 1 }), {})
  );

  const handleQuantityChange = (cardId, newQuantity) => {
    // Ensure quantity is a positive integer and update the state
    setCardQuantities(prev => ({
      ...prev,
      [cardId]: Math.max(1, newQuantity)
    }));
  };

  const calculateSubtotal = (card) => {
    return card.price * (cardQuantities[card.id] || 1);
  };

  const calculateTotal = () => {
    return selectedCards.reduce((total, card) => total + calculateSubtotal(card), 0);
  };

  const handleCart = () => {
    const cardsWithQuantity = selectedCards.map(card => ({
        ...card,
        quantity: cardQuantities[card.id] || 1,
    }));
    // Pass both house and selectedCards in state
    navigate('/checkout', { state: { house, selectedCards: cardsWithQuantity } });
};

  return (
    <Box mx={{ xs: 2, sm: 3, md: 4, lg: 8 }} mt={8}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box>
            <TableContainer component={Paper} style={{ backgroundColor: '#fafafa' }}>
              <Table>
                <TableBody>
                  {selectedCards.map((card) => (
                    <TableRow key={card.id}>
                      <TableCell style={{ fontSize: '1.2em' }}>
                        <img src={card.image?.url || ''} alt="" style={{ width: '130px' }} />
                      </TableCell>
                      <TableCell>
                        <Typography style={{ fontSize: '1.6em', fontWeight: 780, color: '#1C2365' }}>
                          {card.name}
                        </Typography>
                        <Typography style={{ color: '#757575', fontSize: '1.2em' }}>
                          {card.type}
                        </Typography>
                        <Typography style={{ color: '#10B981', fontSize: '1.2em', fontWeight: 780 }}>
                          €&nbsp;{card.price.toFixed(2)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          value={cardQuantities[card.id] || 1}
                          // onChange={(e) => {
                          //   const newQuantity = parseInt(e.target.value, 10);
                          //   if (!isNaN(newQuantity)) {
                          //     handleQuantityChange(card.id, newQuantity);
                          //   }
                          // }}
                          InputProps={{ inputProps: { min: 1, style: { textAlign: 'center' } } }}
                          style={{ width: '60px' }}
                        />
                      </TableCell>
                      <TableCell style={{ color: '#10B981', fontSize: '1.2em', fontWeight: 780 }}>
                        €&nbsp;{calculateSubtotal(card).toFixed(2)}
                      </TableCell>
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
          <Box bgcolor="#fafafa" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
            <Typography variant="h4" fontWeight="bold">Product Details</Typography>
            <Box mt={3} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h6" mr={8}>Subtotal</Typography>
              <Typography style={{ color: '#1C2365', fontSize: '1.4em', fontWeight: 780 }}>
                € {calculateTotal().toFixed(2)}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mt={3} mb={6}>
              <Typography variant="h4" mr={8}>Total</Typography>
              <Typography style={{ color: '#1C2365', fontSize: '1.9em', fontWeight: 780 }}>
                € {calculateTotal().toFixed(2)}
              </Typography>
            </Box>
            <Button 
            variant="contained"
            style={{
              textTransform:'none',
              fontSize:'16px',
              backgroundColor: '#1C2365',
              fontWeight: 600,
              color: 'white',
              marginBottom: '16px', 
            }}
              onClick={handleCart}
            
            >
            Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;

import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  Grid,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  Button,
  TableContainer,
  TableRow,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { getHouseById,sendCartDetails } from '../../Services/AdminServices';
import toast from 'react-hot-toast';
import AdjustIcon from '@mui/icons-material/Adjust';




function Checkout( ) {
  const location = useLocation();
  const { houseId } = useParams();
  const [selectedCards, setSelectedCards] = useState(location.state?.selectedCards || []);
  const [house, setHouse] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');


  const handleSendRequest = async () => {
    try {
      const emailid = 'faithshabu@gmail.com'; 
      const requestData = {
        emailid: emailid,
        customerDetails: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone
        },
        houseDetails: {
          name: house.name,
          basicPrice: house.basicPrice
        },
        customizationOptions: selectedCards.map(card => ({
          name: card.name,
          price: card.price * (card.quantity || 1)
        }))
      };
  
      const response = await sendCartDetails(requestData);
  
      if (response.data.success) {
        toast.success('Request sent successfully!');
        handleClose();
      } else {
        toast.error('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
      toast.error('An error occurred. Please try again.');
    }
  };
  

  useEffect(() => {
    if (location.state?.house) {
      setHouse(location.state.house);
    } else if (houseId) {
      getData(houseId);
    }
    window.scrollTo(0, 0);
  }, [houseId, location.state?.house]);

  const getData = async (houseId) => {
    setLoading(true);
    try {
      const response = await getHouseById(houseId);
      const data = response?.data?.house || {};
      setHouse(data);
    } catch (err) {
      console.error(err.response?.data?.message || 'Failed to fetch house');
      toast.error('Failed to fetch house.');
    } finally {
      setLoading(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setOpen(false);
  };



  const onRemoveCard = (cardType) => {
    setSelectedCards((prevCards) => prevCards.filter((card) => card.type !== cardType));
  };

  const handleQuantityChange = (cardId, newQuantity) => {
    setSelectedCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, quantity: Math.max(1, newQuantity) } : card
      )
    );
  };

  // Calculate the subtotal for each item and total price including house basic price
  const calculateTotal = () => {
    const itemsTotal = selectedCards.reduce(
      (total, card) => total + (card.price * (card.quantity || 1)),
      0
    );
    return house.basicPrice ? itemsTotal + house.basicPrice : itemsTotal;
  };

  return (
    <Box mx={{ xs: 2, sm: 3, md: 4, lg: 8 }} mt={8}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} md={6}>
          <Box>
            <Typography variant="h5" sx={{ fontSize: '1.8em', fontWeight: 700 }}>
              {house.name}
            </Typography>
            <Typography variant="h4" sx={{ color: '#10B981', fontSize: '2.2em', fontWeight: 700 }}>
              €&nbsp;{house.basicPrice}
            </Typography>
           
            {house.images && house.images.length > 0 && (
              <img
                src={house.images[0].url}
                alt="house"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '30px' }}
              />
            )}
            
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: '#9e9e9e',
              fontFamily: 'Lexend, var(--default-font-family)',
              fontSize: { xs: '24px', sm: '30px', lg: '30px' },
              mt: '28px',
            }}
          >
             Cart
          </Typography>
          <TableContainer sx={{ backgroundColor: '#fafafa', overflow: 'hidden',   }}>
  <Table>
    <TableBody>
      {selectedCards.map((card) => (
        <TableRow key={card.id}>
          <TableCell>
            <img src={card.image?.url || ''} alt="" style={{ width: '100px' }} />
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: '1.3em', fontWeight: 780, color: '#1C2365' }}>
              {card.name}
            </Typography>
            <Typography sx={{ color: '#757575', fontSize: '1em' }}>
              {card.type}
            </Typography>
            <Typography sx={{ color: '#10B981', fontSize: '1.1em', fontWeight: 780 }}>
              €&nbsp;{card.price.toFixed(2)}
            </Typography>
          </TableCell>
          <TableCell>
            <TextField
              type="number"
              value={card.quantity || 1}
              // onChange={(e) => handleQuantityChange(card.id, parseInt(e.target.value))}
              InputProps={{ inputProps: { min: 1, style: { textAlign: 'center' } } }}
              sx={{ width: '60px' }}
            />
          </TableCell>
          <TableCell sx={{ color: '#10B981', fontSize: '1.2em', fontWeight: 780 }}>
            €&nbsp;{(card.price * (card.quantity || 1)).toFixed(2)}
          </TableCell>
          <TableCell>
  <IconButton onClick={() => onRemoveCard(card.type)}>
    <DeleteIcon />
  </IconButton>
</TableCell>

        </TableRow>
      ))}
      <TableRow>
        <TableCell colSpan={3} sx={{ textAlign: 'right', fontSize: '1.4em', fontWeight: 700 }}>
          Basic Price
        </TableCell>
        <TableCell sx={{ fontSize: '1.4em', fontWeight: 700 }}>
          €&nbsp;{house.basicPrice ? house.basicPrice.toFixed(2) : '0.00'}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} sx={{ textAlign: 'right', fontSize: '1.4em', fontWeight: 700 }}>
          Total
        </TableCell>
        <TableCell sx={{ fontSize: '1.7em', fontWeight: 700 }}>
          €&nbsp;{calculateTotal().toFixed(2)}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
<Typography 
    variant="h4" 
    sx={{ 
      fontSize: '0.9em', 
      fontWeight: 700, 
      display: 'flex', 
      alignItems: 'center' ,
      mt:'16px'
    }}
  >
    <AdjustIcon style={{ color: '#10B981', fontSize: '1em', marginRight: '0.5em' }} />
    Delivery within 90 days
  </Typography>
  
  <Button 
            variant="contained"
            style={{
              textTransform:'none',
              fontSize:'16px',
              backgroundColor: '#1C2365',
              marginTop:'30px',
              color: 'white',
              marginBottom: '200px', 
            }}
              
            onClick={handleClickOpen}
           
          >
           Check Out
          </Button>

        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{
          color: '#1b1c57',
          fontFamily: 'Lexend, var(--default-font-family)',
          fontSize: { xs: '26px', sm: '32px', lg: '32px' },
          fontWeight: 600,
          mb: '10px',
        }}>Contact Information</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Full Name"
              variant="outlined"
              margin="normal"
              fullWidth
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
            <TextField
              label="Phone"
              type="tel"
              variant="outlined"
              margin="normal"
              fullWidth
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: '#1C2365' }}>
            Cancel
          </Button>
          <Button
            onClick={handleSendRequest}
            variant="contained"
            style={{
              textTransform: 'none',
              fontSize: '16px',
              backgroundColor: '#1C2365',
              color: 'white',
            }}
          >
            Send Request
          </Button>
        </DialogActions>
      </Dialog>
      
    
    </Box>
  );
}

export default Checkout;

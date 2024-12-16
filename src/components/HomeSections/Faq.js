import React from 'react';
import { Grid, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Divider, Button, Fab, Card, CardContent, CardMedia } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from 'react-router-dom';
import collection from '../../Assets/collection.png';

const products = [
  { id: 1, title: 'Double Bed & Side Tables', price: '$200.00', imageUrl: collection },
  { id: 2, title: 'Double Bed & Side Tables', price: '$200.00', imageUrl: collection },
  { id: 3, title: 'Double Bed & Side Tables', price: '$200.00', imageUrl: collection },
];

function Faq() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactus'); 
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ mt: 10, px: 2, pb: 5 }}>
      <Typography 
        variant='h4' 
        sx={{ textAlign: "center", color: "#10B981", mb: 4, fontWeight: 'bold' }}
      >
        FREQUENTLY ASKED QUESTIONS (FAQ)
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> What is a Modular House?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#1C2365", lineHeight: 1.6 }}>
                A Modular house is a compact, well-designed small home, often built on wheels to be mobile.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> Where can I buy a Modular House?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#1C2365", lineHeight: 1.6 }}>
                You can buy modular houses from us. We offer a wide range of modular house models.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> Are Modular Houses the same as mobile homes?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#1C2365", lineHeight: 1.6 }}>
                No, modular houses are compact houses that are often on wheels. Mobile homes are usually larger residential structures that are also mobile.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> What is the difference between a Modular House and a container house?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#333", lineHeight: 1.6 }}>
                A modular house is a custom-designed small home, while a container house is made from converted cargo containers.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> How big are Modular Houses?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#1C2365", lineHeight: 1.6 }}>
                 The size of modular houses varies, but they are usually between 15 and 40 square meters.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography 
        variant='h5' 
        sx={{ textAlign: "center", color: "#10B981", mb: 4, fontWeight: 'bold' }}
      >
        Our Featured Products
      </Typography>

      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.title}
              />
              <CardContent>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                  {product.title}
                </Typography>
                <Typography variant='body1' sx={{ color: "#333", mb: 2 }}>
                  {product.price}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ backgroundColor: "#10B981", '&:hover': { backgroundColor: "#388e3c" } }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{mt:5}}>
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> What is a Modular House?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#1C2365", lineHeight: 1.6 }}>
                A Modular house is a compact, well-designed small home, often built on wheels to be mobile.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> Where can I buy a Modular House?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#1C2365", lineHeight: 1.6 }}>
                You can buy modular houses from us. We offer a wide range of modular house models.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> Are Modular Houses the same as mobile homes?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#1C2365", lineHeight: 1.6 }}>
                No, modular houses are compact houses that are often on wheels. Mobile homes are usually larger residential structures that are also mobile.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> What is the difference between a Modular House and a container house?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#333", lineHeight: 1.6 }}>
                A modular house is a custom-designed small home, while a container house is made from converted cargo containers.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid> */}
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#e8f5e9" }}>
              <Typography variant='h6' sx={{ color: "#388e3c", fontWeight: 'bold' }}>
                <HomeIcon sx={{ mr: 1 }} /> How big are Modular Houses?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{ color: "#1C2365", lineHeight: 1.6 }}>
                 The size of modular houses varies, but they are usually between 15 and 40 square meters.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ backgroundColor: "#10B981", '&:hover': { backgroundColor: "#388e3c" } }} 
          onClick={handleClick}
        >
          Contact Us
        </Button>
      </Box>

      <Fab 
        color="primary" 
        sx={{ position: 'fixed', bottom: 16, right: 16, backgroundColor: "#10B981", '&:hover': { backgroundColor: "#388e3c" } }} 
        onClick={scrollToTop}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Box>
  );
}

export default Faq;

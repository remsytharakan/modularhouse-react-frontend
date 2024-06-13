import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, TextField, List, ListItem, ListItemText, Button, Box,  } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import m3 from '../../Assets/m3.png';
import m4 from '../../Assets/m4.png';
import m5 from '../../Assets/m5.png';
import m6 from '../../Assets/m6.png';
import m2 from '../../Assets/m2.png';

const cardData = [
  {
    imageUrl: m2,
    title: 'Fleet-Set1',
    description: 'Premium',
  },
  {
    imageUrl: m3,
    title: 'Fleet-Set1',
    description: 'Premium',
  },
  {
    imageUrl: m4,
    title: 'Fleet-Set1',
    description: 'Premium',
  },
  {
    imageUrl: m5,
    title: 'Fleet-Set1',
    description: 'Premium',
  },
  {
    imageUrl: m6,
    title: 'Fleet-Set1',
    description: 'Premium',
  },
  {
    imageUrl: m3,
    title: 'Fleet-Set1',
    description: 'Premium',
  },
];

export default function Customize() {
  return (
    <Box sx={{ ml: { xs: 2, md: 4,lg:9 }, mr: { xs: 2, md: 4 }, mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
          <Typography
            variant="h2"
            sx={{
              color: '#1b1c57',
              fontFamily: 'Lexend, var(--default-font-family)',
              fontSize: { xs: '16px', sm: '32px' },
              fontWeight: 600,
            }}
          >
            MH01-Available Customization Options
          </Typography>
        </Grid>

        <Grid item xs={12} lg={3} sx={{ display: { xs: 'none', lg: 'block' }, marginTop: '2%' }}>
          <TextField
            label="Search"
            variant="filled"
            sx={{
              marginBottom: '8px',
              borderRadius: '15px',
              '& .MuiFilledInput-root': {
                background: '#f0f0f0',
                borderRadius: '18px',
              },
              '& .MuiFilledInput-underline:before': {
                borderBottom: 'none',
              },
            }}
            fullWidth
          />

          <List sx={{ color: '#07484a', fontFamily: 'Roboto, var(--default-font-family)', fontSize: '24px', fontWeight: 400 }}>
            {['WashRoom', 'Cladding', 'Interior', 'Color Palette', 'Living Room', 'Kitchen', 'Doors'].map((item, index) => (
              <ListItem key={index} sx={{ marginBottom: '8px' }}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            sx={{
              padding: '12px 20px',
              background: '#70908b',
              borderRadius: '10px',
            }}
            endIcon={<ArrowForwardIcon />}
            fullWidth
          >
            All Categories
          </Button>
        </Grid>

        <Grid item xs={12} lg={9}>
          <Box sx={{ padding: '4%' }}>
            <Grid container spacing={2}>
              {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={card.imageUrl}
                        alt={card.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {card.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <AccessTimeIcon color="action" />
                          <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '8px' }}>
                            {card.description}
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

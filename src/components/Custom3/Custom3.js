import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
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

export default function ActionAreaCard() {
  return (
    <Grid container spacing={2}>
    <Grid item lg={3} marginTop='65px' paddingRight={{ xs: '10%', sm: '10%', lg: '1%' }} display={{ xs: 'none', sm: 'none', lg: 'block' }}>
      <TextField
        label="Search"
        variant="filled"
        sx={{
          marginTop: '8px',
          marginBottom: '8px',
          borderRadius: '15px',
          marginLeft: '30%',
          '& .MuiFilledInput-root': {
            background: '#f0f0f0', // Light background color
            borderRadius: '18px',
          },
          '& .MuiFilledInput-underline:before': {
            borderBottom: 'none', // Remove underline
          },
        }}
      />

      <List sx={{
        color: '#07484a',
        fontFamily: 'Roboto, var(--default-font-family)',
        fontSize: '24px',
        fontWeight: 400,
        marginLeft: '30%',
      }}>
        <ListItem sx={{ marginBottom: '8px' }}>
          <ListItemText primary="WashRoom" />
        </ListItem>
        <ListItem sx={{ marginBottom: '8px' }}>
          <ListItemText primary="Cladding" />
        </ListItem>
        <ListItem sx={{ marginBottom: '8px' }}>
          <ListItemText primary="Interior" />
        </ListItem>
        <ListItem sx={{ marginBottom: '8px' }}>
          <ListItemText primary="Color Palette" />
        </ListItem>
        <ListItem sx={{ marginBottom: '8px' }}>
          <ListItemText primary="Living Room" />
        </ListItem>
        <ListItem sx={{ marginBottom: '8px' }}>
          <ListItemText primary="Kitchen" />
        </ListItem>
        <ListItem sx={{ marginBottom: '8px' }}>
          <ListItemText primary="Doors" />
        </ListItem>
      </List>
      <Button
        variant="contained"
        style={{
          marginLeft: '30%',
          padding: '18px 20px',
          background: '#70908b',
          borderRadius: '10px',
        }}
        endIcon={<ArrowForwardIcon />}
      >
        All Categories
      </Button>
    </Grid>
      <Grid item xs={12} sm={12} lg={9}>
        <div style={{ padding: '7%' }}> {/* Padding for the card grid */}
          <Grid container spacing={10}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6}lg={4} key={index} style={{ marginBottom: '8px' }}> {/* Set bottom margin for each grid item */}
                <Card >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={card.imageUrl}
                      alt={card.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h7" component="div">
                        {card.title}
                      </Typography>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon color="action" />
                        <Typography variant="h8" color="text.secondary">
                          {card.description}
                        </Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

import React, { useRef } from 'react';
import { 
  Typography,
  Box,
  Card,
  CardMedia, 
  Grid,
  CardContent,
  Avatar,
  Rating,
  IconButton
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Reviewimg from '../../../Assets/Reviewimg.png';
import avatar from '../../../Assets/Ellipse 6.png';

function SeeOurReviewSection() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ 
      mt: { xs: '8%', md: '20px', lg: '8%' },
      mr: { xs: '10%', md: '20px' }, 
      ml: { xs: '10%', md: '10%', lg: '12%' },
      textAlign: 'center' 
    }}>
      <Box className='header-icon' alignItems='center'></Box>
      <Typography gutterBottom variant="h5" sx={{ color: "#F59E0B", fontFamily: "Lexend" }}>
        See Our Review 
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ color: "#1B1C57", fontFamily: "Lexend", fontWeight: 'bold' }}>
        What Our Users Say About Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton onClick={scrollLeft}>
              <ArrowBack />
          </IconButton >
            <Box
              ref={scrollContainerRef}
              sx={{ 
                display: 'flex', 
                overflowX: 'auto', 
                justifyContent: 'start',
                flexGrow: 1,
                mx: 1
              }}
            >
              {[1, 2, 3].map((_, index) => (
                <Box key={index} sx={{ minWidth: { xs: 300, sm: 400, md: 500 }, mx: 1 }}>
                  <Card>
                    <CardMedia
                      component="img"
                      sx={{ height: { xs: 200, sm: 300, md: 400 }, width: '100%' }}
                      image={Reviewimg}
                      alt="Review"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" sx={{ color: "#1B1C57", fontFamily: "Lexend", fontWeight: 'bold' }}>
                        Best! I got the house I wanted through Hounter
                      </Typography>
                      <Typography variant="body2" color="#626687">
                        Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={avatar}
                          alt="Dianne Russell"
                          sx={{ width: 56, height: 56, marginRight: 2 }}
                        />
                        <Box>
                          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#0E1735' }}>
                            Dianne Russell
                          </Typography>
                          <Typography variant="body2" color="#888B97">
                            Manager Director
                          </Typography>
                        </Box>
                      </Box>
                      <Rating value={4.6} precision={0.1} readOnly />
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
            <IconButton onClick={scrollRight}>
              <ArrowForward />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SeeOurReviewSection;

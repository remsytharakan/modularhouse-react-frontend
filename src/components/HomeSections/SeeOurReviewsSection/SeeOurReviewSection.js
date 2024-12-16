import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import { Star } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reviewpic from '../../../Assets/review.png';
import avatar from '../../../Assets/avatar.png';

const SeeOurReviewSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '10%',
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '5%',
        }
      }
    ]
  };

  const reviewData = [
    {
      title: "Best! I got the house I wanted through Modular House",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
   
    {
      title: "Best! I got the house I wanted through Modular House",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
    {
      title: "Best! I got the house I wanted through Modular House",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
    {
      title: "Best! I got the house I wanted through Modular House",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
    {
      title: "Best! I got the house I wanted through Modular House",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
  ];



  return (
    <Box sx={{ mt: { xs: 2, sm: 3, md: 4, lg: 5 }, px: 0 }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 2, sm: 3, md: 4 }, px: { xs: 4, sm: 2, md: 3, lg: 9} }}>
        <Box sx={{ width: { xs: 20, sm: 30, md: 40 }, height: 3, bgcolor: '#f59e0b', mx: 'auto', mb: 1 }} />
        <Typography sx={{ color: '#f59e0b', mb: 1 }}>See Our Review</Typography>
        <Typography variant="h4" sx={{ color: '#1b1c57', fontWeight: 600 }}>
          What Our Users Say About Us
        </Typography>
      </Box>

      <Slider {...settings}>
        {reviewData.map((review, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Box sx={{ position: 'relative', mb: 5 }}>
            <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                <img 
                  src={reviewpic} 
                  alt="Review" 
                  style={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50%',
                    height: '50%',
                    objectFit: 'cover'
                  }} 
                />
              </Box>
              <Card sx={{ 
                width: '50%',
                mx: 'auto', 
                mt: { xs: -5, sm: -8, md: -10 }, 
                position: 'relative', 
                boxShadow: 3, 
                borderRadius: 2 
              }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#1b1c57', fontWeight: 600 }}>
                    {review.title}
                  </Typography> 
                  <Typography sx={{ color: '#878b96', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                    {review.content}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar alt={review.name} src={avatar} />
                      <Box sx={{ ml: 2, textAlign: 'left' }}>
                        <Typography variant="subtitle2">{review.name}</Typography>
                        <Typography sx={{ color: '#878b96', fontSize: '0.7rem' }}>
                          {review.position}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Star sx={{ color: '#f59e0b', fontSize: { xs: '1rem', sm: '1.5rem' } }} />
                      <Typography sx={{ ml: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>{review.rating}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SeeOurReviewSection;
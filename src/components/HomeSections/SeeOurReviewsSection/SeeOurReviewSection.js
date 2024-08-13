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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const reviewData = [
    {
      title: "Best! I got the house I wanted through Hounter",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
    // Duplicate this object two more times for a total of three reviews
    {
      title: "Best! I got the house I wanted through Hounter",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
    {
      title: "Best! I got the house I wanted through Hounter",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
    {
      title: "Best! I got the house I wanted through Hounter",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
    {
      title: "Best! I got the house I wanted through Hounter",
      content: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6
    },
  ];

  return (
    <Box sx={{ mt: { xs: 2, sm: 3, md: 4, lg: 5 }, px: { xs: 4, sm: 2, md: 3, lg: 9} }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ width: { xs: 20, sm: 30, md: 40 }, height: 3, bgcolor: '#f59e0b', mx: 'auto', mb: 1 }} />
        <Typography sx={{ color: '#f59e0b', mb: 1 }}>See Our Review</Typography>
        <Typography variant="h4" sx={{ color: '#1b1c57', fontWeight: 600 }}>
          What Our Users Say About Us
        </Typography>
      </Box>

      <Slider {...settings}>
        {reviewData.map((review, index) => (
          <Box key={index} sx={{ p: { xs: 1, sm: 2, md: 3 }, mb: { xs: 2, sm: 3, md: 4 } }}>
            <Box sx={{ position: 'relative', mb: 5 }}>
              <img src={reviewpic} alt="Review" style={{ maxWidth: '100%', height: 'auto' }} />
              
              <Card sx={{ 
                width: '90%',
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

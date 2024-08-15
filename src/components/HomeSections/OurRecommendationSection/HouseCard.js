import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import {  getHouseById } from '../../../Services/AdminServices';
import './HouseCard.css'; // Import CSS file

//imageSrc, title, price, bedroomCount,

function HouseCard({  houseId }) {
  const navigate = useNavigate(); // Initialize useNavigate
  const [houseImage, setHouseImage] = useState(null);
  const [houseName, setHouseName] = useState("");
  const [housePrice, setHousePrice] = useState("");
  const [houseFloors, setHouseFloors] = useState("");
  

  const handleClick = () => {
    navigate(`/housedetails/${houseId}`);
  };

  const getData = (houseId) => {
    if (houseId) {
      getHouseById(houseId)
        .then((res) => {
          let data = res?.data?.house;
          // console.log(data);
          setHouseImage(data?.images[0].url || '/Image/house1.png');
          setHouseName(data?.name || 'MH01');
          setHousePrice(data?.basicPrice || '€ 24000.000');
          setHouseFloors(data?.floors?.length || 0);
        })
        .catch((err) => {
          console.error(err.response?.data?.message || 'Failed to fetch house');
        });
    }
  };

  useEffect(() => {
    if (houseId) {
      getData(houseId);
    }
  }, [houseId]);

 
  return (
    <Box className="house-container">
      <Box className="house-card">
        <Box className="img" style={{ position: 'relative' }}>
          <img src={houseImage} alt="House" style={{ height: '100%' }} />
          <Box className="badge">
            <img src="/Image/home3.png" alt="Badge Icon" />
            <span>New House</span>
          </Box>
        </Box>

        <Box className="title">{houseName}</Box>
        <Box className="price">{housePrice}</Box>
        <Box className="contact-info">
          <Box className="bedrooms">
            <Box className="bed">
              <img src="/Image/bed1.png" alt="Bed Icon" />
            </Box>
            <span className="bedroom">
              {houseFloors}<span className="gap">Floors</span>
            </span>
          </Box>
          <Box className="customize">
            <IconButton><HomeIcon /></IconButton> {/* HomeIcon with no onClick */}
            <span onClick={handleClick} style={{ cursor: 'pointer' }}>Customize</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HouseCard;

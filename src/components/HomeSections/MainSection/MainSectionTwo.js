import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import img from '../../../Assets/mainhome.jpg';
import group from '../../../Assets/1K Peoples.png';
import group2 from '../../../Assets/1K Peoples (1).png';

function MainSection2() {
  return (
    <Box sx={{ position: 'relative', mt: '-64px' }}>
      {/* Image */}
      <img src={img} alt="main" style={{ width: '100%', borderRadius: '20px' }} />

      <Box
        sx={{
          position: 'absolute',
          top: { xs: '90%', sm: '85%', md: '90%' },
          left: { xs: '30%', sm: '30%', md: '30%' },
          transform: 'translate(-50%, -50%)',
          width: { xs: '50%', sm: '50%', md: '45%' },
        }}
      >
        <img src={group} alt="main" style={{ width: '100%' }} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: { xs: '90%', sm: '65%', md: '76%' },
          left: { xs: '70%', sm: '52%', md: '52%' },
          transform: { xs: 'translate(-50%, -50%)', sm: 'none', md: 'none' },
          width: { xs: '36%', sm: '38%', md: '29%' },
        }}
      >
        <img src={group2} alt="main" style={{ width: '100%' }} />
      </Box>
    </Box>
  );
}

export default MainSection2;
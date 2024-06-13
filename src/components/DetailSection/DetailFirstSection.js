import React from 'react';
import { Grid } from '@mui/material';
import img from '../../Assets/Img.png';

function DetailFirstSection() {
  return (
    <Grid item xs={12} sm={10} md={8} lg={6} sx={{ ml: { xs: 2, md: 4,lg:9 }, mr: { xs: 2, md: 4,lg:9 } }}>
      <img src={img} style={{ width: '100%', height: 'auto' }} alt="Responsive Image" />
    </Grid>
  );
}

export default DetailFirstSection;

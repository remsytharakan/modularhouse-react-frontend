import{React, useEffect}  from 'react';
import { Grid } from '@mui/material';
import img from '../../Assets/Img.png';


function DetailFirstSection() {

  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Grid item xs={12} sm={10} md={8} lg={6} sx={{ ml: { xs: 2, md: 8,lg:9 }, mr: { xs: 2, md: 7,lg:9 },mt:4  }}>
      <img src={img} style={{ width: '100%', height: 'auto', }} alt="" />
    </Grid>
  );
}

export default DetailFirstSection;

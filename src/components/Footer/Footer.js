import { Grid } from '@mui/material';
import React from 'react'

function Footer() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          Section-1
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              Section-1
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              Section-2
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              Section-3
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  )
}

export default Footer;
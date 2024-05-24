import React from 'react';
import { Grid } from '@mui/material';
import Categories from '../Dashboard/AdminComponents/Categories';
import WeeklySales from '../Dashboard/AdminComponents/WeeklySales';
import Trending from '../Dashboard/AdminComponents/Trending';
import Order from '../Dashboard/AdminComponents/Order';
import LatestSales from '../Dashboard/AdminComponents/LatestSales';
import Requests from '../Dashboard/AdminComponents/Requests';

function Dashboard() {
  return (
    <div>
      <Grid container spacing={3} sx={{py:10,px:5}}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Categories />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <WeeklySales />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Trending />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{py:10,px:5}}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <LatestSales />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Requests />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{py:10,px:5}}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Order />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Order />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Order />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;

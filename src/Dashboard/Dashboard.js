import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  
  TableRow,
  Button,
  Paper,
  Typography,
  Grid,
  Card
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import category from '../Assets/DashImages/category.png';
import users from '../Assets/DashImages/Users.png';
import modules from '../Assets/DashImages/Modules.png';
import requests from '../Assets/DashImages/Requests.png';


import frame from '../Assets/DashImages/frame.png';
import Navbar from './AdminNavbar';
import Sidebar from './Sidebar';
import icon from '../Assets/DashImages/Icon.png';
import villa from '../Assets/DashImages/villa.png';
import order from '../Assets/DashImages/order.png';
import profile from '../Assets/DashImages/profile.png';
const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const CategoryCard = ({ image, title, route }) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(route);
    };
    return (
      <Card sx={{ boxShadow: 'none', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Button onClick={handleClick} style={{ padding:0 }}>
          <img src={image} alt={title} style={{ marginTop: '15%' }} />
        </Button>
        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '8%' }}>{title}</Typography>
      </Card>
    );
  };
  

  const SalesInfo = ({ image, title, amount }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 , mt:2.5}}>
      <img src={image} alt={title} />
      <Box>
        <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{amount}</Typography>
        <Typography variant="body1" sx={{ fontSize: '12px', color: '#80808F' }}>{title}</Typography>
      </Box>
    </Box>
  );

  const TrendingCategory = ({ image, name, requests }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%',gap:2 }}>
     
      <Box sx={{ mb: 2 }}>
        <img src={image} alt={name} />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
        <Typography sx={{ fontSize: '12px', color: '#80808F' }}>{requests}</Typography>
      </Box>
      <Button
  variant="contained"
  sx={{
    backgroundColor: '#EEE5FF',
    borderRadius: 2,
    textTransform:'none',
    ml: 'auto',
    px: 2,
    '&:hover': {
      backgroundColor: '#DDD',
    },
  }}
>
  <Typography variant="body2" sx={{ color: '#8950FC', py: 0.5 }}>View All</Typography>
</Button>

    </Box>
  );
  

  return (
    <div>
      <Navbar onMenuOpen={handleDrawerOpen} />
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />
      <Box sx={{ mb: 5, ml: { xs: 0,sm:18, md: 18 }, mt: { xs: 7,sm:8, md: 8,lg:8 },backgroundColor: "#f0f0f0" }}>
        <Card sx={{ boxShadow: 'none', borderRadius: 5, p: 3,backgroundColor: "#f0f0f0"  }}>
          <Grid container spacing={2}>
            <Grid item xs={12}  md={4}>
              <Card sx={{ backgroundColor: "#68C3B3", borderRadius: 5, boxShadow: 'none', p: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CategoryCard image={category} title="Categories" route="/admin/category" />
                  </Grid>
                  <Grid item xs={6}>
                    <CategoryCard image={users} title="Users" route="/categories" />
                  </Grid>
                  <Grid item xs={6}>
                    <CategoryCard image={modules} title="Modules"route="/Modules" />
                  </Grid>
                  <Grid item xs={6}>
                    <CategoryCard image={requests} title="Requests"route="/categories" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "white", borderRadius: 5, boxShadow: 'none', p: 3 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px'}}>Weekly Sales</Typography>
                <Typography sx={{ fontSize: '14px', color: '#80808F' }}>540 Sales</Typography>
                <Box sx={{ boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
                  <img src={frame} alt="Frame" />
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <SalesInfo image={icon} title="Villa sales" amount="€232,034" />
                  </Grid>
                  <Grid item xs={6}>
                    <SalesInfo image={icon} title="Villa sales" amount="€232,034" />
                  </Grid>
                  <Grid item xs={6}>
                    <SalesInfo image={icon} title="Villa sales" amount="€232,034" />
                  </Grid>
                  <Grid item xs={6}>
                    <SalesInfo image={icon} title="Villa sales" amount="€232,034" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: "white", borderRadius: 5, boxShadow: 'none', p: 3 }}>
                <Typography sx={{ fontWeight: 'bold', mb: '10%', fontSize: '18px',  }}>Trending Categories</Typography>
                <TrendingCategory image={villa} name="Villa" requests="32 Requests" />
                <TrendingCategory image={villa} name="Villa" requests="32 Requests" />
                <TrendingCategory image={villa} name="Villa" requests="32 Requests" />
                <TrendingCategory image={villa} name="Villa" requests="32 Requests" />
              </Card>
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ boxShadow: 'none', borderRadius: 5, p: 3 ,backgroundColor: "#f0f0f0" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Card sx={{ backgroundColor: "white", borderRadius: 5, boxShadow: 'none', p: 3 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Latest Sales</Typography>
                <Typography sx={{ fontSize: '13px', color: '#80808F' }}>More than 400+ new members</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    
                    <TableBody>
                      <TableRow>
                        <TableCell><img src={villa} alt="Villa" width="50" /></TableCell>
                        <TableCell  style={{ width: '120px' }} >
  Villa <br />
  <span style={{ color: '#80808F', fontSize: '12px' }}>Net area: 16.00 m²</span>
</TableCell>
<TableCell >

<span style={{ color: '#80808F', fontSize: '12px' }}>
  Price</span> <br />
  €2000.00
</TableCell>
<TableCell style={{ width: '80px' }} >

<span style={{ color: '#80808F', fontSize: '12px'  }}>
  Custom Rate</span> <br />
  €2600.00
</TableCell>
<TableCell>
<Button
  variant="contained"
  sx={{
    backgroundColor: '#C9F7F5',
    borderRadius: 2,
    textTransform:'none',
    ml: 'auto',
    px: 2,
    '&:hover': {
      backgroundColor: '#C9F7F5',
    },
  }}
>
  <Typography variant="body2" sx={{ color: '#1BC5BD', py: 0.5 }}>View Details</Typography>
</Button>
</TableCell>

                      </TableRow>
                      <TableRow>
                        <TableCell><img src={villa} alt="Villa" width="50" /></TableCell>
                        <TableCell >
  Villa <br />
  <span style={{ color: '#80808F', fontSize: '12px' }}>Net area: 16.00 m²</span>
</TableCell>
<TableCell >

<span style={{ color: '#80808F', fontSize: '12px' }}>
  Price</span> <br />
  €2000.00
</TableCell>
<TableCell >

<span style={{ color: '#80808F', fontSize: '12px' }}>
  Custom Rate</span> <br />
  €2600.00
</TableCell>
                        <TableCell><Button
  variant="contained"
  sx={{
    backgroundColor: '#C9F7F5',
    borderRadius: 2,
    textTransform:'none',
    ml: 'auto',
    px: 2,
    '&:hover': {
      backgroundColor: '#C9F7F5',
    },
  }}
>
  <Typography variant="body2" sx={{ color: '#1BC5BD', py: 0.5 }}>View Details</Typography>
</Button></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><img src={villa} alt="Villa" width="50" /></TableCell>
                        <TableCell >
  Villa <br />
  <span style={{ color: '#80808F', fontSize: '12px' }}>Net area: 16.00 m²</span>
</TableCell>
<TableCell >

<span style={{ color: '#80808F', fontSize: '12px' }}>
  Price</span> <br />
  €2000.00
</TableCell>
<TableCell >

<span style={{ color: '#80808F', fontSize: '12px' }}>
  Custom Rate</span> <br />
  €2600.00
</TableCell>
                        <TableCell><Button
  variant="contained"
  sx={{
    backgroundColor: '#C9F7F5',
    borderRadius: 2,
    textTransform:'none',
    ml: 'auto',
    px: 2,
    '&:hover': {
      backgroundColor: '#C9F7F5',
    },
  }}
>
  <Typography variant="body2" sx={{ color: '#1BC5BD', py: 0.5 }}>View Details</Typography>
</Button></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><img src={villa} alt="Villa" width="50" /></TableCell>
                        <TableCell >
  Villa <br />
  <span style={{ color: '#80808F', fontSize: '12px' }}>Net area: 16.00 m²</span>
</TableCell>
<TableCell >

<span style={{ color: '#80808F', fontSize: '12px' }}>
  Price</span> <br />
  €2000.00
</TableCell>
<TableCell >

<span style={{ color: '#80808F', fontSize: '12px' }}>
  Custom Rate</span> <br />
  €2600.00
</TableCell>
                        <TableCell><Button
  variant="contained"
  sx={{
    backgroundColor: '#C9F7F5',
    borderRadius: 2,
    textTransform:'none',
    ml: 'auto',
    px: 2,
    '&:hover': {
      backgroundColor: '#C9F7F5',
    },
  }}
>
  <Typography variant="body2" sx={{ color: '#1BC5BD', py: 0.5 }}>View Details</Typography>
</Button></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card sx={{ backgroundColor: "white", borderRadius: 5, boxShadow: 'none', p: 4 }}>
                <Typography sx={{ fontWeight: 'bold',mb:"4%" }}>Requests</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    
                    <TableBody>
                      <TableRow>
                        <TableCell><img src={profile} alt="Villa" width="50" /></TableCell>
                        <TableCell >
  Ricky Hunt<br />
  <span style={{ color: '#80808F', fontSize: '12px' }}>Berlin</span>
</TableCell>
                        <TableCell>Villa Versa</TableCell>
                        <TableCell>€2600.00</TableCell>
                       
                      </TableRow>
                      <TableRow>
                      <TableCell><img src={profile} alt="Villa" width="50" /></TableCell>
                      <TableCell >
  Ricky Hunt<br />
  <span style={{ color: '#80808F', fontSize: '12px' }}>Berlin</span>
</TableCell>
                        <TableCell>Villa</TableCell>
                        <TableCell>€2600.00</TableCell>
                        
                       
                      </TableRow>
                      <TableRow>
                      <TableCell><img src={profile} alt="Villa" width="50" /></TableCell>
                      <TableCell >
  Ricky Hunt<br />
  <span style={{ color: '#80808F', fontSize: '12px' }}>Berlin</span>
</TableCell>
                        <TableCell>Villa</TableCell>
                        <TableCell>€2600.00</TableCell>
                       
                       
                      </TableRow>
                      <TableRow>
                      <TableCell><img src={profile} alt="Villa" width="50" /></TableCell>
                      <TableCell >
  Ricky Hunt<br />
  <span style={{ color: '#80808F', fontSize: '12px' }}>Berlin</span>
</TableCell>
                        <TableCell>Villa</TableCell>
                        <TableCell>€2600.00</TableCell>
                      
                      
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
          </Grid>
        </Card>
        <Box sx={{ mb: 5 }}>
          <Card sx={{ boxShadow: 'none', borderRadius: 5, p: 3 ,backgroundColor: "#f0f0f0"  }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Card sx={{ backgroundColor: "#3699FF", borderRadius: 5, boxShadow: 'none', p: 5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Orders</Typography>
                      <Typography sx={{ fontSize: '14px' }}>Flats, Shared Rooms, Duplex</Typography>
                    </Box>
                    <img src={order} alt="Order" />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ backgroundColor: "#3699FF", borderRadius: 5, boxShadow: 'none', p: 5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Orders</Typography>
                      <Typography sx={{ fontSize: '14px' }}>Flats, Shared Rooms, Duplex</Typography>
                    </Box>
                    <img src={order} alt="Order" />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ backgroundColor: "#3699FF", borderRadius: 5, boxShadow: 'none', p: 5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Orders</Typography>
                      <Typography sx={{ fontSize: '14px' }}>Flats, Shared Rooms, Duplex</Typography>
                    </Box>
                    <img src={order} alt="Order" />
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;

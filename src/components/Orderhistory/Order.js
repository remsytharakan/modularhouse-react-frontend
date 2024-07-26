import React from 'react';
import { 
  Typography, 
  TableContainer, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import M1 from '../../Assets/C1.png';

const spanStyle = {
  display: 'block',
  margin: '10px 0',
  color: '#555',
};

function createData(OrderNo, Items, Status, TrackingID, DeliveryDate, Price, ReOrder) {
  return { OrderNo, Items, Status, TrackingID, DeliveryDate, Price, ReOrder };
}

const rows = [
  createData(
    '2133', 
    <span><img src={M1} alt="Double Bed & Dressing" style={{ width: '50px', height: '50px', borderRadius: '8px', marginRight: '10px' }} />Double Bed & Dressing</span>, 
    <span><AccessTimeOutlinedIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} />In Progress</span>, 
    '2176413876', 
    '23-07-2021 (Expected)', 
    '$168.20', 
    'Re-Order'
  ),
  createData(
    '2133', 
    <span><img src={M1} alt="Double Bed & Dressing" style={{ width: '50px', height: '50px', borderRadius: '8px', marginRight: '10px' }} />Double Bed & Dressing</span>, 
    <span><AccessTimeOutlinedIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} />In Progress</span>, 
    '2176413876', 
    '23-07-2021 (Expected)', 
    '$168.20', 
    'Re-Order'
  ),
  createData(
    '2133', 
    <span><img src={M1} alt="Double Bed & Dressing" style={{ width: '50px', height: '50px', borderRadius: '8px', marginRight: '10px' }} />Double Bed & Dressing</span>, 
    <span><AccessTimeOutlinedIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} />In Progress</span>, 
    '2176413876', 
    '23-07-2021 (Expected)', 
    '$168.20', 
    'Re-Order'
  ),
  createData(
    '2133', 
    <span><img src={M1} alt="Double Bed & Dressing" style={{ width: '50px', height: '50px', borderRadius: '8px', marginRight: '10px' }} />Double Bed & Dressing</span>, 
    <span><AccessTimeOutlinedIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} />In Progress</span>, 
    '2176413876', 
    '23-07-2021 (Expected)', 
    '$168.20', 
    'Re-Order'
  ),
  createData(
    '2133', 
    <span><img src={M1} alt="Double Bed & Dressing" style={{ width: '50px', height: '50px', borderRadius: '8px', marginRight: '10px' }} />Double Bed & Dressing</span>, 
    <span><AccessTimeOutlinedIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} />In Progress</span>, 
    '2176413876', 
    '23-07-2021 (Expected)', 
    '$168.20', 
    'Re-Order'
  ),
];

const Order = () => {
  return (
    <div style={{ padding: '16px' }}>

      <Typography variant="h5" sx={{ color: '#2D2D2D', fontFamily: 'Oxygen',fontWeight: 'bold' }}>
        Order History
      </Typography>
      <span style={spanStyle}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </span>
      
      <TableContainer spacing>
        <Table sx={{ minWidth: 650 , border: '1px solid #CECECE'}} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#10B981' }}>
              <TableCell sx={{ color: 'white'}}>Order no</TableCell>
              <TableCell sx={{ color: 'white'}} align="center">Items</TableCell>
              <TableCell sx={{ color: 'white'}} align="center">Status</TableCell>
              <TableCell sx={{ color: 'white'}} align="center">Tracking ID</TableCell>
              <TableCell sx={{ color: 'white'}} align="center">Delivery Date</TableCell>
              <TableCell sx={{ color: 'white'}} align="center">Price</TableCell>
              <TableCell sx={{ color: 'white'}} align="center">Re-Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.OrderNo}>
                <TableCell component="th" scope="row" sx={{ padding: '20px'  }}>
                  {row.OrderNo}
                </TableCell>
                <TableCell align="center">
                  <image 
                    src={M1}
                    width="50px" 
                    height="50px" 
                    style={{ borderRadius: '8px', marginRight: '10px' }}
                  />
                  {row.Items}
                </TableCell>
                <TableCell align="center">
                  {row.Status}
                </TableCell>
                <TableCell align="center">{row.TrackingID}</TableCell>
                <TableCell align="center">{row.DeliveryDate}</TableCell>
                <TableCell align="center">{row.Price}</TableCell>
                <TableCell align="center">
                  {row.ReOrder}
                  <ArrowForwardIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Order;
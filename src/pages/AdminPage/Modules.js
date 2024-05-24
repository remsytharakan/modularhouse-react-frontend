import React from 'react';
import { Typography, Box, Card, Button, IconButton, Tooltip, InputBase } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import M1 from '../../Assets/C1.png';
import M2 from '../../Assets/C2.png';
import M3 from '../../Assets/C3.png';
import M4 from '../../Assets/C1.png';
import M5 from '../../Assets/C2.png';

const columns = [
  { field: 'id', headerName: 'Select', width: 70 },
  { field: 'image', headerName: 'Image', width: 130, renderCell: (params) => <img src={params.value} alt="avatar" style={{ width: 100, height: 95, borderRadius: '5%' }} /> },
  { field: 'HouseName', headerName: '', width: 300, renderCell: (params) => <span style={{ fontWeight: 'bold' }}>{params.value}</span> },
  { field: 'Price', headerName: '',  width: 120, renderCell: (params) => <span style={{ fontWeight: 'bold' }}>{params.value}</span> },
  { field: 'Area', headerName: '', width: 250, renderCell: (params) => <span style={{ color: 'grey', fontWeight: 'bold' }}>{params.value}</span> },
  { field:'HouseType' , headerName:'' ,width:450, renderCell: (params) => {
      let color;
      switch(params.value) {
        case 'Villa':
          color = 'blue';
          break;
        case 'Tiny House':
          color = 'green';
          break;
        case 'Roof':
          color = 'red';
          break;
        default:
          color = 'black';
      }
      return <span style={{ color , fontWeight: 'bold' }}>{params.value}</span>;
    }
  },
  { field: 'edit', headerName: '', width: 60, renderCell: (params) => (
      <Tooltip title="Edit">
        <IconButton onClick={() => handleEdit(params)}>
          <EditIcon color="primary" />
        </IconButton>
      </Tooltip>
    )
  },
  { field: 'delete', headerName: '', width: 120, renderCell: (params) => (
      <Tooltip title="Delete">
        <IconButton onClick={() => handleDelete(params)}>
          <DeleteIcon color="error" />
        </IconButton>
      </Tooltip>
    )
  }
];

const rows = [
  { id: 1, image: M1, HouseName: 'Villa Arora', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Villa' },
  { id: 2, image: M2, HouseName: 'Elena Tiny House', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Tiny House' },
  { id: 3, image: M3, HouseName: 'Villa Amelia', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Roof' },
  { id: 4, image: M4, HouseName: 'Ode Roof', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Villa' },
  { id: 5, image: M5, HouseName: 'Villa Arora', Price: '$2,000,000', Area: '2 Floors,Area:147.10m2', HouseType: 'Tiny House' },
];

const getRowHeight = () => {
  return 100;
};

const handleEdit = (params) => {
  console.log('Edit:', params);
  // Implement the edit functionality here
};

const handleDelete = (params) => {
  console.log('Delete:', params);
  // Implement the delete functionality here
};

function Modules() {
  const numRows = rows.length;
  const rowHeight = getRowHeight();
  const gridHeight = Math.min(numRows * rowHeight + 100, 800);

  return (
    <Box marginLeft="3%" marginRight="3%" marginTop="8%">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          color="textPrimary"
          fontWeight="800"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '32px',
            lineHeight: '26px',
          }}
        >
          Modules
        </Typography>
        <div style={{ position: 'relative', marginLeft: '20px' }}>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            style={{
              paddingLeft: '50px',
              paddingTop: '12px',
              width: 'auto'
            }}
          />
          <div style={{ position: 'absolute', left: 8, top: '65%', transform: 'translateY(-50%)', padding: '8px', borderRadius: '50%' }}>
            <SearchIcon />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3%', marginTop: '-1.5%', marginRight: '2%', gap: '2%' }}>
        <Button
          variant="contained"
          startIcon={<ArrowDropDownIcon />}
          sx={{
            backgroundColor: '#f0f0f0',
            textTransform: 'none',
            color: '#000000',
            fontFamily: 'Poppins, var(--default-font-family)',
            fontSize: '16px',
            fontWeight: 600,
            marginTop: { xs: '6%', sm: '3%', lg: '-1%' },
            marginBottom: { xs: '6%', sm: '3%', lg: '2%' },
            width: { xs: '50%', sm: '65%', lg: '8%' },
          }}
        >
          Category
        </Button>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#1bc5bd',
            textTransform: 'none',
            color: '#ffffff',
            fontFamily: 'Poppins, var(--default-font-family)',
            fontSize: '16px',
            fontWeight: 600,
            marginTop: { xs: '6%', sm: '3%', lg: '-1%' },
            marginBottom: { xs: '6%', sm: '3%', lg: '2%' },
            width: { xs: '70%', sm: '60%', lg: '14%' }
          }}
        >
          Add New Module
        </Button>
      </div>
      <Card>
  <div style={{ height: gridHeight, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5, 10, 20]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
</Card>
</Box>
 );
}

export default Modules;
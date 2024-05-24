import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';
import Newcategory from '../AdminPage/NewCategory'
import C1 from '../../Assets/C1.png';
import C2 from '../../Assets/C2.png';
import C3 from '../../Assets/C3.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const handleEdit = (params) => {
  // Handle edit action here
  console.log("Edit clicked", params);
};

const handleDelete = (params) => {
  // Handle delete action here
  console.log("Delete clicked", params);
};



const columns = [
 
  { field: 'image', headerName: 'Image', width: 180, renderCell: (params) => (<img src={params.value} alt="category" style={{ width: 120, height: 80, borderRadius: '5%' }} />) },
  { field: 'firstName', headerName: '', width: 1100, renderCell: (params) => <span style={{ fontWeight: 'bold' }}>{params.value}</span> },
  { field: 'edit', headerName: 'Action', width: 60, renderCell: (params) => (
    <Tooltip title="Edit">
      <IconButton onClick={(event) => handleEdit(params)} color="primary">
        <EditIcon />
      </IconButton>
    </Tooltip>
  )},
  { field: 'delete', headerName: '', width: 120, renderCell: (params) => (
    <Tooltip title="Delete">
      <IconButton onClick={(event) => handleDelete(params)} color="error">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  )}
];

const rows = [
  { id: 1, firstName: 'Villa', image: C3 },
  { id: 2, firstName: 'A Roof', image: C1 },
  { id: 3, firstName: 'Villa 2', image: C2 },
  { id: 4, firstName: 'Tiny House', image: C3 },
];

function Categories() {
  const getRowClassName = (params) => {
    return 'custom-row';
  };

  const getRowHeight = () => {
    return 100; // Adjust the height as needed
  };

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
   
      <Box
      marginLeft="3%"
      marginRight="3%"
      marginTop="8%"
    >
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
           Categories
          </Typography>

          <div style={{ position: 'relative', marginLeft: '20px' }}>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            style={{
              paddingLeft: '50px',
              paddingTop: '12px',
              width: 'auto' // Adjust the width for xs screens
            }}
          />
         
            <div style={{ position: 'absolute', left: 8, top: '65%', transform: 'translateY(-50%)', padding: '8px', borderRadius: '50%' }}>
              <SearchIcon />
            </div>
          
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3%',marginTop:'-1.5%' ,marginRight: '2%' ,gap:'2%'}}>
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
          Sort
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
          Add New Category
        </Button>
      </div>

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5, 10, 100]}
          checkboxSelection
          getRowClassName={getRowClassName}
          getRowHeight={getRowHeight}
        />
      </div>
    </Box>
  );
}

export default Categories;

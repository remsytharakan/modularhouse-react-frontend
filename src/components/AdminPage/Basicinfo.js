import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Accordion,
  Grid,
  
  AccordionSummary,
  AccordionDetails,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const theme = createTheme();

function Basicinfo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('');
  const [accordionSelectedItem, setAccordionSelectedItem] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChange = (event) => {
    setSelectedFloor(event.target.value);
  };

  const handleAccordionChange = (event) => {
    setAccordionSelectedItem(event.target.value);
  };

  const items = ['Lower Floor', 'First Floor', 'Second Floor'];
  const lower = ['Service Room', 'Central Heating', 'Wine Cellar', 'Storage for equipment','Garage' ,'Sauna','Parking Shelter'  ];
  const first = ['Hall', 'WC', 'Dinning Room', 'Living Room','Kitchen' ,'Food Storage','Terrace'  ];
  const second = ['Anteroom', 'Bathroom', 'Room 1', 'Room 2','Room 3' ,'Parents room','Closet' ,'WC' ,'Terrace'];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontFamily: 'Poppins, var(--default-font-family)',
            fontSize: '24px',
            fontWeight: 440,
            mb: 2,
          }}
        >
          Basic Info
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            [theme.breakpoints.down('sm')]: {
              padding: '10px',
            },
          }}
        >
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
          <TextField label="Net Area" variant="outlined" fullWidth />
          <TextField label="Living Space" variant="outlined" fullWidth />
          <TextField
  id="filled-number"
  label="No of Floors"
  type="number"
  InputLabelProps={{
    shrink: true,
  }}
  fullWidth
  sx={{
    width: { xs: '100%', sm: '20%' },
  }}
/>
<Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
             Lower Floor
            </AccordionSummary>
            <AccordionDetails>
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} sm={4}>
      <Select
        value={accordionSelectedItem}
        onChange={handleAccordionChange}
        displayEmpty
        fullWidth
        sx={{ minWidth: 50 }}
      >
        <MenuItem value="" disabled>
          Select Rooms
        </MenuItem>
        {lower.map((lower, index) => (
          <MenuItem key={index} value={lower}>
            {lower}
          </MenuItem>
        ))}
      </Select>
    </Grid>
    <Grid item xs={12} sm={3}>
      <TextField
        label="Area"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={2}>
      <Button variant="contained" color="primary">
        Save
      </Button>
    </Grid>
  </Grid>
</AccordionDetails>



          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              First Floor
            </AccordionSummary>
            <AccordionDetails>
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} sm={4}>
      <Select
        value={accordionSelectedItem}
        onChange={handleAccordionChange}
        displayEmpty
        fullWidth
        sx={{ minWidth: 50 }}
      >
        <MenuItem value="" disabled>
          Select Rooms
        </MenuItem>
        {first.map((first, index) => (
          <MenuItem key={index} value={first}>
            {first}
          </MenuItem>
        ))}
      </Select>
    </Grid>
    <Grid item xs={12} sm={3}>
      <TextField
        label="Area"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={2}>
      <Button variant="contained" color="primary">
        Save
      </Button>
    </Grid>
  </Grid>
</AccordionDetails>



          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Second Floor
            </AccordionSummary>
            <AccordionDetails>
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} sm={4}>
      <Select
        value={accordionSelectedItem}
        onChange={handleAccordionChange}
        displayEmpty
        fullWidth
        sx={{ minWidth: 50 }}
      >
        <MenuItem value="" disabled>
          Select Rooms
        </MenuItem>
        {second.map((second, index) => (
          <MenuItem key={index} value={second}>
            {second}
          </MenuItem>
        ))}
      </Select>
    </Grid>
    <Grid item xs={12} sm={3}>
      <TextField
        label="Area"
        variant="outlined"
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={2}>
      <Button variant="contained" color="primary">
        Save
      </Button>
    </Grid>
  </Grid>
</AccordionDetails>



          </Accordion>





          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" onClick={handleOpenModal}>
              Add
            </Button>
          </Box>

          <FormControlLabel
            control={<IOSSwitch defaultChecked />}
            label="Available"
            labelPlacement="start"
            sx={{ alignSelf: 'flex-start', gap: '12px' }}
          />
        </Box>

        <Dialog open={modalOpen} onClose={handleCloseModal}>
          <DialogTitle>Select Floor</DialogTitle>
          <DialogContent>
            <Select
              value={selectedFloor}
              onChange={handleChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled>
                Floor
              </MenuItem>
              {items.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseModal} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default Basicinfo;

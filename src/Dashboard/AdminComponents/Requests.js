import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Icon from '../DashImages/Assets/Icon1.png';
import Icon1 from '../DashImages/Assets/Icon1.png';
import Icon2 from '../DashImages/Assets/Icon1.png';
import Icon3 from '../DashImages/Assets/Icon2.png';
import Dots from '../DashImages/Assets/Icon3.png';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const columns = [
  { id: 'icon', label: 'Icon', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'amount', label: 'Amount', minWidth: 100 },
];

function createData(icon, name, location, amount) {
  return { icon, name, location, amount };
}

const rows = [
  createData(Icon, 'Ricky Hunt', 'Berlin', '€2600.00'),
  createData(Icon1, 'Anna Bill', 'Berlin', '€2000.00'),
  createData(Icon2, 'Christa Merlin', 'Berlin', '€3500.00'),
  createData(Icon3, 'Joseph Kanter', 'Berlin', '€2000.00'),
  createData(Icon, 'Ricky Hunt', 'Berlin', '€4200.00'),
  createData(Icon, 'Ricky Hunt', 'Berlin', '€4200.00'),
];

function Requests() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start',}}>
      <Card sx={{ width: isMobile ? '100%' : 600, height: 500 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', marginLeft: isMobile ? '5px' : '0' }}>
            <Typography
              sx={{
                color: '#212121',
                fontSize: isMobile ? '22px' : '22px',
                fontWeight: 'bold',
                marginTop: '2px'
              }}
            > 
              Requests
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '5',
                width: '106px',
                height: '34px',
                background: '#eee5ff',
                borderRadius: '6px',
              }}
            >
              <Typography
                sx={{
                  color: '#8950fc',
                  alignItems: 'center',
                  fontSize: '15px',
                  fontWeight: 600,
                  lineHeight: '18px',
                }}
              >
                View All
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: '100%', overflow: 'auto' }}>
            <TableContainer component={Paper}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                    {isMobile && (
                      <TableCell align="right">Options</TableCell>
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          <TableCell>
                            <img src={row.icon} alt="Profile" style={{ maxWidth: '100%', height: 'auto' }} />
                          </TableCell>
                          <TableCell>
                            {row.name}
                            <br />
                            {row.location}
                          </TableCell>
                          <TableCell>{row.amount}</TableCell>
                          {isMobile && (
                            <TableCell align="right">
                              <Button>
                                <img src={Dots} alt="Options" />
                              </Button>
                            </TableCell>
                          )}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Requests;

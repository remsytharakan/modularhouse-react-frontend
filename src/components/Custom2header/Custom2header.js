import React from 'react';
import Typography from '@mui/material/Typography';

function CostHeader() {
  return (
    <div style={{ marginTop: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          color: '#1b1c57',
          fontFamily: 'Lexend, var(--default-font-family)',
          fontSize: { xs: '20px', sm: '32px', lg: '32px' },
          fontWeight: 600,
        }}
      >
        MH01-Estimated Cost Details
      </Typography>
    </div>
  );
}

export default CostHeader;

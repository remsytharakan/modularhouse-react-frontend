import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Register from './Register'; // Assuming you have a Register component
import Login from './Login'; // Assuming you have a Login component

function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="background-image-container">
        {/* Replace "/your-image-url.jpg" with the actual URL of your image */}
      </div>
      <Grid container className="auth-container" style={{ maxWidth: '1000px', width: '100%' }}>
        <Grid item xs={12} md={6}>
          {showLogin ? <Login /> : <Register />}
          {/* Toggle between login and register screens */}
          <button onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Switch to Register' : 'Switch to Login'}
          </button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AuthPage;

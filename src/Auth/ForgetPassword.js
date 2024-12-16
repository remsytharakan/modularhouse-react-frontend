import { Button, Icon, InputAdornment, TextField, Typography, Grid, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import logoo from '../Assets/logoo.png'; // Import the image

function Forgotpassword() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width:600px)');

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleForgot = () => {
    let error = false;
    if (email === "") {
      setEmailError(true);
      error = true;
    } else {
      setEmailError(false);
    }
    if (error) return;

    // Mocking API call
    navigate('/reset', { state: { email } });
  }

  const forgotButton = {
    backgroundColor: '#10B981',
    fontSize: 15,
    marginBottom: 3,
    color: 'white',
    borderRadius: 16 // Adding border radius
  };

  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#10B981',
            borderRadius: 16 // Adding border radius
        },
        '&:hover fieldset': {
            borderColor: '#10B981'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#10B981'
        }
    }
  };

  return (
  
      
      <Grid container>
        {isDesktop && (
          <Grid item xs={12} sm={6}>
            <img src={logoo} alt="Image1" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        )}
        
        <Grid item xs={12} sm={isDesktop ? 6 : 12} style={{ backgroundColor: '#F3F4F6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', padding: '0 20px', background: 'white', borderRadius: '16px' }}>
          <h4 style={{ margin: '0px' }}>Email</h4>
            <TextField
              error={emailError}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              margin="dense"
              variant="outlined"
              fullWidth={true}
              sx={{ mb: 3, ...textFieldStyle }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>
                      <EmailOutlinedIcon sx={{ color: '#10B981' }} />
                    </Icon>
                  </InputAdornment>
                )
              }}
            />
            <Button
              type='submit'
              style={forgotButton}
              fullWidth={true}
              color='primary'
              variant='contained'
              onClick={handleForgot}
            >
              Forgot Password
            </Button>
          </div>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              success: {
                style: {
                  background: '#10B981',
                  color: 'white'
                },
                iconTheme: {
                  primary: '#10B981',
                  secondary: 'white',
                },
              },
              error: {
                style: {
                  background: 'rgb(211, 47, 47)',
                  color: 'white'
                },
                iconTheme: {
                  primary: 'rgb(211, 47, 47)',
                  secondary: 'white',
                },
              },
            }}
          />
        </Grid>
      </Grid>
 
  );
}

export default Forgotpassword;

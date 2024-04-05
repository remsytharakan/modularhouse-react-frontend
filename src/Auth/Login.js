import { Button, Icon, InputAdornment, TextField, Typography, Grid, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import logoo from './logoo.png';
import React, { useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Toaster } from 'react-hot-toast';

function Login() {
    const isDesktop = useMediaQuery('(min-width:600px)');

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleLogin = () => {
        let error = false;
        if (email === "") {
            setEmailError(true);
            error = true;
        } else {
            setEmailError(false);
        }
        if (password === "") {
            setPasswordError(true);
            error = true;
        } else {
            setPasswordError(false);
        }
        if (error) return;

        // Mocking login process
    };

    const loginButton = {
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
                <Grid item xs={12} sm={8}>
                    <img src={logoo} alt="Image1" style={{ width: '90%', height: '90%' }} />
                </Grid>
            )}
            <Grid item xs={12} sm={isDesktop ? 4 : 12} style={{ backgroundColor: '#F3F4F6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', padding: '0 20px', background: 'white', borderRadius: '16px' }}>
                    <h2 style={{ color: '#10B981', textAlign: 'center', marginBottom: '20px' }}>Login</h2>
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
                    <h4 style={{ margin: '0px' }}>Your Password</h4>
                    <TextField
                        error={passwordError}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        margin="dense"
                        variant="outlined"
                        fullWidth={true}
                        type={showPassword ? "text" : "password"}
                        sx={{ mb: 3, ...textFieldStyle }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon
                                        sx={{ cursor: 'pointer' }}
                                        onClick={handleClickShowPassword}>
                                        {showPassword ? <VisibilityIcon sx={{ color: '#10B981' }} /> : <VisibilityOffIcon sx={{ color: '#10B981' }} />}
                                    </Icon>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Link to="/forget" style={{ color: '#10B981', marginBottom: '20px', textAlign: 'right' }}>Forgot Password?</Link>
                    <Button
                        type='submit'
                        style={loginButton}
                        fullWidth={true}
                        color='primary'
                        variant='contained'
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Typography variant="body2" style={{ textAlign: 'center', marginTop: '20px' }}>Don't have an account? <Link to="/register" style={{ color: '#10B981' }}>Register</Link></Typography>
                </div>
                {/* Toaster removed for UI-only component */}
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

export default Login;

import { Button, Icon, InputAdornment, TextField, Typography, Grid, useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logoo from '../Assets/logoo.png';
import React, { useEffect, useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import toast, { Toaster } from 'react-hot-toast';
import { getCurrentUser, login } from '../Services/AdminServices';
import { useDispatch } from 'react-redux';
import { setUser, unsetUser } from '../redux/slices/userSlice';

function Login() {
    const isDesktop = useMediaQuery('(min-width:1024px)');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");

    // Password Show & Hide
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    useEffect(() => {
        sessionStorage.removeItem("authtoken");
        dispatch(unsetUser());
    }, []);

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setEmailError(!validateEmail(emailValue));
        setEmailHelperText(validateEmail(emailValue) ? "" : "Please enter the valid email address");
    };

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        setPasswordError(!validatePassword(passwordValue));
        setPasswordHelperText(validatePassword(passwordValue) ? "" : "Password must be at least 8 characters long");
    };

    const validateEmail = (email) => {
        // Basic email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Password validation logic, e.g., minimum length
        return password.length >= 8;
    };

    const handleLogin = async () => {
        sessionStorage.removeItem("authtoken");
        if (!validateEmail(email)) {
            setEmailError(true);
            setEmailHelperText("Please enter the valid email address");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError(true);
            setPasswordHelperText("Password must be at least 8 characters long");
            return;
        }

        let data = {
            email: email,
            password: password
        }

        try {
            const loginResponse = await login(data);
            sessionStorage.setItem("authtoken", loginResponse?.data?.token);
            const currentUserResponse = await getCurrentUser();
            dispatch(setUser(currentUserResponse?.data));
            toast.success(loginResponse?.data?.message);
            navigate('/admin');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

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
        <Grid container style={{ height: '100vh' }}>
            {isDesktop && (
                <Grid item xs={12} sm={8} style={{ height: '100vh' }}>
                    <img src={logoo} alt="Image1" style={{ width: '100%', height: '100%' }} />
                </Grid>
            )}
            <Grid item xs={12} sm={isDesktop ? 4 : 12} style={{ backgroundColor: '#F3F4F6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', padding: '20px', background: 'white', borderRadius: '16px' }}>
                    <h2 style={{ color: '#10B981', textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                    <h4 style={{ margin: '0px' }}>Email</h4>
                    <TextField
                        error={emailError}
                        helperText={emailHelperText}
                        onChange={handleEmailChange}
                        value={email}
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
                        helperText={passwordHelperText}
                        onChange={handlePasswordChange}
                        value={password}
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
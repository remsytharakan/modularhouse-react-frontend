import { Button, Icon, InputAdornment, TextField, Typography,Grid,useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unsetUser } from '../redux/slices/userSlice';
import { register } from '../Services/AdminServices';
import toast, { Toaster } from 'react-hot-toast';
import logoo from './logoo.png';

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDesktop = useMediaQuery('(min-width:600px)');
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");
    const [contact, setContact] = useState("");
    const [contactError, setContactError] = useState(false);
    const [contactHelperText, setContactHelperText] = useState("");

    // Password Show & Hide
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    useEffect(() => {
        sessionStorage.removeItem("authtoken");
        dispatch(unsetUser());
    }, []);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(value === "" || !validateEmail(value));
        setEmailHelperText(value === "" || validateEmail(value) ? "" : "Please enter a valid email address");
    };

    const handleContactChange = (e) => {
        const value = e.target.value;
        setContact(value);
        setContactError(value === "" || !validateContact(value));
        setContactHelperText(value === "" || validateContact(value) ? "" : "Please enter a valid 10-digit contact number");
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value === "" || !validatePassword(value));
        setPasswordHelperText(value === "" || validatePassword(value) ? "" : "Password must be at least 8 characters long");
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateContact = (contact) => /^\d{10}$/.test(contact);

    const validatePassword = (password) => password.length >= 8;

    const handleRegister = async () => {
        if (email === "" || !validateEmail(email)) {
            setEmailError(true);
            setEmailHelperText("Please enter a valid email address");
            return;
        }

        if (contact === "" || !validateContact(contact)) {
            setContactError(true);
            setContactHelperText("Please enter a valid 10-digit contact number");
            return;
        }

        if (password === "" || !validatePassword(password)) {
            setPasswordError(true);
            setPasswordHelperText("Password must be at least 8 characters long");
            return;
        }

        let data = {
            email: email,
            password: password,
            contact: '+91' + contact
        };

        try {
            const res = await register(data);
            toast.success(res?.data?.message);
            setTimeout(() => {
                navigate(`/verify/${res?.data?.data?._id}`);
            }, 2000);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    

    const registerButton = {
        backgroundColor: '#10B981',
        fontSize: 15,
        marginBottom: 3,
        color: 'white', // Set text color to white
        borderRadius: 16 // Set border radius
    };

    const textFieldStyle = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#10B981', // Set border color
                borderRadius: 16 // Set border radius
            },
            '&:hover fieldset': {
                borderColor: '#10B981' // Set hover border color
            },
            '&.Mui-focused fieldset': {
                borderColor: '#10B981' // Set focused border color
            }
        }
    };

    return (
        <Grid container>
            {isDesktop && (
               // <Grid item xs={8}>
                //     <img src={logoo} alt="Image1" style={{ maxWidth: '100%', height: 'auto' }} />
                // </Grid>
                <Grid item xs={12} sm={8} style={{height:'100vh'}}>
                    <img src={logoo} alt="Image1" style={{ width: '100%', height: '100%' }} />
                </Grid>
            )}
            <Grid item xs={isDesktop ? 4 : 12}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', padding: '0 20px' }}>
                        <h2 style={{ color: '#10B981', textAlign: 'center' }}>Register</h2>
                        <h4 style={{ margin: '0px' }}>Email</h4>
                        <TextField
                            error={emailError}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder='Email'
                            margin="dense"
                            variant="outlined"
                            fullWidth={true}
                            sx={{ mb: 3, ...textFieldStyle }} // Apply custom style
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
                        <h4 style={{ margin: '0px' }}>Contact</h4>
                        <TextField
                            error={contactError}
                            onChange={(e) => setContact(e.target.value)}
                            value={contact}
                            placeholder='+1234567890'
                            margin="dense"
                            variant="outlined"
                            fullWidth={true}
                            sx={{ mb: 3, ...textFieldStyle }} // Apply custom style
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
                            value={password}
                            placeholder='Password'
                            margin="dense"
                            variant="outlined"
                            fullWidth={true}
                            sx={{ mb: 3, ...textFieldStyle }} // Apply custom style
                            type={showPassword ? "text" : "password"}
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
                        <Button
                            type='submit'
                            style={registerButton}
                            fullWidth={true}
                            variant='contained'
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                        <Typography variant="body2" style={{ textAlign: 'center', marginTop: '20px' }}>Already have an account? <Link to="/login" style={{ color: '#10B981' }}>Login</Link></Typography>
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
                </div>
            </Grid>
        </Grid>
    );
}

export default Register;

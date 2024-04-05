import { Button, Icon, InputAdornment, TextField, Typography, Grid, useMediaQuery } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {useState} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import logoo from './logoo.png';
import  { Toaster } from 'react-hot-toast';

function Register() {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery('(min-width:600px)');

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [contact, setContact] = useState("");
    const [contactError, setContactError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleRegister = async () => {
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
        if (contact === "") {
            setContactError(true);
            error = true;
        } else {
            setContactError(false);
        }
        if (error) return;

        // Mocking registration process
        // Replace this with your actual API call
        navigate('/verify');
    }

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
                <Grid item xs={8}>
                    <img src={logoo} alt="Image1" style={{ maxWidth: '100%', height: 'auto' }} />
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

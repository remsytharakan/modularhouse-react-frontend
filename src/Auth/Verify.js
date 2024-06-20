import { Button, } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unsetUser } from '../redux/slices/userSlice';
import { verify } from '../Services/AdminServices';
import OTPInput from 'react-otp-input';
import toast, { Toaster } from 'react-hot-toast';

function Verify() {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState(false);

    useEffect(() => {
        sessionStorage.removeItem("authtoken");
        dispatch(unsetUser());
    }, []);

    const handleVerify = async () => {
        let error = false;
        if (otp === "") {
            setOtpError(true);
            error = true;
        } else {
            setOtpError(false);
        }
        if (error) return;

        let data = {
            otp: otp,
        }
        await verify(id, data).then((res) => {
            toast.success(res?.data?.message);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }).catch((err) => { toast.error(err.response.data.message) })
    }

    const verifyButton = {
        backgroundColor: '#575DFB',
        fontSize: 15,
        marginBottom: 3
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', padding: '0 20px' }}>
                <h2 style={{ color: '#575DFB', textAlign: 'center' }}>Verify</h2>
                <h4 style={{ margin: '0px' }}>Enter OTP</h4>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    inputStyle={{ width: '100%', height: '50px', borderColor: otpError ? 'red' : '' }}
                    containerStyle={{ marginBottom: '30px' }}
                    renderInput={(props) => <input {...props} />}
                />
                <Button
                    type='submit'
                    style={verifyButton}
                    fullWidth={true}
                    color='primary'
                    variant='contained'
                    onClick={handleVerify}
                >
                    Verify
                </Button>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    success: {
                        style: {
                            background: 'rgb(46, 125, 50)',
                            color: 'white'
                        },
                        iconTheme: {
                            primary: 'rgb(46, 125, 50)',
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
    );
}

export default Verify;

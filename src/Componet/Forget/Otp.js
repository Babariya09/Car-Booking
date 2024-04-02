import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from 'mui-one-time-password-input'

const theme = createTheme();
export default function Register() {
    const navigate = useNavigate();

    const [valid, setValid] = useState({});
    const [otp, setOtp] = useState('')

    const handleChange = (newValue) => {
        setOtp(newValue);
        setValid(true);
    }
    function Submit() {
        const oTp = JSON.parse(localStorage.getItem('otp'));
        if (otp === "") {
            setValid(false);
            return;
        } else if (otp !== oTp) {
            setValid(false);
            return
        }
        navigate("/Password")
    }
    return (
        <>
            <title>Forget Password</title>
            <h2
                style={{
                    textAlign: "center",
                    color: "#23809fc2",
                    marginBottom: "-42px",
                }}
            >
                Speedo Car Rental
            </h2>
            <ThemeProvider theme={theme}>
                <Container
                    component="main"
                    maxWidth="xs"
                    style={{ backgroundColor: "white", borderRadius: "20px" }}
                >
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "#23809fc2" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h2" variant="h5" sx={{ color: "#23809fc2" }}>
                            VERIFY OTP

                        </Typography>
                        <Grid style={{ marginTop: "15px" }}>
                            <MuiOtpInput value={otp} onChange={handleChange} />
                            {!valid && <p style={{ color: "red", fontWeight: "bold", fontSize: "15px", textAlign: "center" }}> Enter Valid Otp</p>}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: "#23809fc2" }}
                            onClick={Submit}
                        >
                            VERIFY OTP
                        </Button>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}

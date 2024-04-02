import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
export default function Register() {
  const navigate = useNavigate();

  const generateOTP = () => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };

  const otp = generateOTP();

  const [otpp, setOtpp] = useState({ otp })
  const [user, setuser] = useState({
    email: "",
  });
  const mergedState = { ...user, ...otpp };

  const [hide, sethide] = useState(false);
  const [valid, setValid] = useState({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/userdata"
      );

      setData(response);
      console.log("==>", response);
    } catch (error) { }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function pagehandler(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
    setValid(true);
    sethide(true);
  }

  function Submit() {

    var index = data.findIndex((element) => element.email === user.email);
    if (user.email === "") {
      setValid((...valid) => ({ ...valid, email: true }));
      return;
    } else if (data[index]?.email !== user.email) {
      sethide((...hide) => ({ ...hide, email: true }));
      return;
    }

    axios
      .post("http://localhost:8000/api/otp", mergedState)

      .then((res) => console.log(res.data.message));
    localStorage.setItem("otp", JSON.stringify(mergedState.otp));
    localStorage.setItem("femail", JSON.stringify(mergedState.email));
    navigate("/Otp")
  }

  return (
    <>
      <title>Forget Password - Speedo Car Rental</title>
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
            <Typography component="h1" variant="h5" sx={{ color: "#23809fc2" }}>
              Forget Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={pagehandler}
              value={user.email}
            />
            {valid.email == true && (
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
              >
                Enter Your Email Address
              </span>
            )}
            {hide.email == true && (
              <span style={{ color: "red" }}>
                Email Address is Not Register
              </span>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#23809fc2" }}
              onClick={Submit}
            >
              SEND OTP
            </Button>
            <Grid container style={{ margin: 5 }}>
              <Grid item>
                <Link to="/Login" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

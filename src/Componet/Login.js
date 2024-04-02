import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
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
  const [valid, setValid] = useState({});
  const [type, setType] = useState("password");
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

  const [input, setinput] = useState({
    email: "",
    password: "",
  });

  function pagehandler(e) {
    setinput({ ...input, [e.target.name]: e.target.value });
    setValid(true);
  }
  const handelpass = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  function Submit() {
    if (input.email && input.password) {
      var index = data.findIndex((element) => element.email === input.email);
      if (
        data[index]?.email === input.email &&
        data[index]?.password === input.password
      ) {
        if (data[index].email === "speedocarrental85@gmail.com") {
          navigate("/Dashboard");
        } else {
          navigate("/");
        }
        localStorage.setItem("user", JSON.stringify([data[index]]));
        localStorage.setItem("user1", JSON.stringify(data[index]));
      }
      if (index === -1) {
        setValid((...valid) => ({ ...valid, email: true }));
      }
      if (index !== -1 && data[index]?.password !== input.password) {
        setValid((...valid) => ({ ...valid, password: true }));
      }
    } else {
      if (input.password === "") {
        setValid((...valid) => ({ ...valid, password: true }));
      }
      if (input.email === "") {
        setValid((...valid) => ({ ...valid, email: true }));
      }
    }
  }

  return (
    <>
      <title>Login - Speedo Car Rental</title>
      <div>
        <h2
          style={{
            textAlign: "center",
            color: "#23809fc2",
            marginBottom: "-42px",
            marginTop: "100px",
          }}
        >
          {" "}
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
              <Typography
                component="h1"
                variant="h5"
                sx={{ color: "#23809fc2" }}
              >
                Sign In
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                onChange={pagehandler}
              />
              {valid.email == true && (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Enter Valid Email Address
                </span>
              )}
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type={type}
                onChange={pagehandler}
              />
              {valid.password == true && (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Enter Valid Password
                </span>
              )}
              <FormControlLabel
                style={{ marginRight: "230px" }}
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    onClick={handelpass}
                  />
                }
                label="Show Password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#23809fc2" }}
                onClick={Submit}
              >
                Sign In
              </Button>
              <Grid container style={{ margin: 5 }}>
                <Grid item xs>
                  <Link to="/Forget" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/Register" variant="body2">
                    {"Don't have an account? Register In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}

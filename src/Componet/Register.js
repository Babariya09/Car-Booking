import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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

  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    Phone: "",
  });
  const [hide, sethide] = useState(false);
  const [all, setAll] = useState({});
  const [valid, setValid] = useState({});
  const [type, setType] = useState("password");
  const value = data.length
  localStorage.setItem("registerdata", (value));

  function pagehandler(e) {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setValid(true);
    sethide(true);
    setAll(true);
  }
  const handelpass = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  function Submit() {

    if (user.name === "") {
      setValid((...valid) => ({ ...valid, name: true }));
      return;
    }

    var IndNum = /^[0]?[6789]\d{9}$/;
    if (user.Phone === "") {
      setValid((...valid) => ({ ...valid, Phone: true }));
      return;
    } else if (!IndNum.test(user.Phone)) {
      setValid((...valid) => ({ ...valid, Phone: true }));
      return;
    }

    var index = data.findIndex((element) => element.email === user.email);
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (user.email === "") {
      setValid((...valid) => ({ ...valid, email: true }));
      return;
    } else if (!filter.test(user.email)) {
      sethide((...hide) => ({ ...hide, email: true }));
      return;
    } else if (data[index]?.email === user.email) {
      setAll((...all) => ({ ...all, email: true }));
      return;
    }
    const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    const patterns = /[A-Z]/;

    const patternss = /[0-9]/;
    if (user.password === "") {
      setValid((...valid) => ({ ...valid, password: true }));
      return;
    } else if (!pattern.test(user.password)) {
      sethide((...hide) => ({ ...hide, password: true }));
      return;
    } else if (!patterns.test(user.password)) {
      sethide((...hide) => ({ ...hide, password: true }));
      return;
    } else if (!patternss.test(user.password)) {
      sethide((...hide) => ({ ...hide, password: true }));

      return;
    }

    axios
      .post("http://localhost:8000/api/regi", user)
      .then((res) => console.log(res.data.message));
    navigate("/login");
  }

  return (
    <>
      <title>Register - Speedo Car Rental</title>
      <h2
        style={{
          textAlign: "center",
          color: "#23809fc2",
          marginBottom: "-42px",
          marginTop: "50px",
        }}
      >
        {" "}
        Speedo Car Rental{" "}
      </h2>
      <div>
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
                Register In
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Name"
                label="Name"
                name="name"
                autoComplete="Name"
                autoFocus
                onChange={pagehandler}
                value={user.name}
              />
              {valid.name == true && (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Enter Your Name
                </span>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="Phone"
                inputMode="numeric"
                label="Phone Number"
                name="Phone"
                autoComplete="Phone"
                autoFocus
                onChange={pagehandler}
                value={user.Phone}
              />
              {valid.Phone == true && (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Enter Your Phone Number
                </span>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label=" Email Address"
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
                  Enter Your email
                </span>
              )}
              {hide.email == true && (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Invlid Email Address
                </span>
              )}
              {all.email == true && (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Alredy Register This Email
                </span>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="Password"
                type={type}
                label="Password"
                name="password"
                autoComplete="Password"
                autoFocus
                onChange={pagehandler}
                value={user.password}
              />
              {valid.password == true && (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Enter Your Password
                </span>
              )}
              {hide.password == true && (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
                >
                  Enter Symbols,Uppercase,Numbers Characters
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
                Register In
              </Button>
              <Grid container style={{ margin: 5 }}>
                <Grid item>
                  <Link to="/Login" variant="body2">
                    {"Already have an account? Sign In"}
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

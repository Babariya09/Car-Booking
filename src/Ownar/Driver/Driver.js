import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

export default function Driver() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    driver: "",
    email: "",
    state: "",
    licence: "",
    phone: "",
    alternativePhone: "", // New optional field
  });
  const [valid, setValid] = useState({
    driver: true,
    email: true,
    state: true,
    licence: true,
    phone: true,
    alternativePhone: true,
  });
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    // Perform validation for phone number length
    if (name === "phone" || name === "alternativePhone") {
      setValid({
        ...valid,
        [name]: value.length === 10 || value.length === 0, // Optional field
      });
    }

    // Perform validation for email format
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValid({
        ...valid,
        email: emailRegex.test(value),
      });
    }
  };

  const handleSubmit = () => {
    // Perform validation here before submitting
    // Example: checking if all required fields are filled
    const isValid = Object.values(valid).every(value => value) &&
      Object.values(user).every(value => value.trim() !== "");
    if (!isValid) {
      setFormError(true);
      return;
    }

    axios
      .post("http://localhost:8000/api/Driver", user)
      .then((res) => {
        console.log(res.data.message);
        toast.success("Registration successful");
        navigate("/DriverTabel");
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message === "Email already exists") {
          toast.error("Email already exists");
        } else {
          toast.error("Registration failed");
        }
        console.error("Error registering user:", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" autoClose={5000} />
      <Container component="main" maxWidth="xs">
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
            Register Driver
          </Typography>
          {formError && (
            <Typography style={{ color: "red" }}>
              Please fill out all required fields.
            </Typography>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="driver"
            label="Driver"
            name="driver"
            autoComplete="driver"
            autoFocus
            onChange={handleChange}
            value={user.driver}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            value={user.email}
            error={!valid.email}
            helperText={!valid.email && "Email is invalid"}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            type="number"
            onChange={handleChange}
            value={user.phone}
            error={!valid.phone}
            helperText={!valid.phone && "Phone Number must be 10 digits"}
          />
          <TextField
            margin="normal"
            fullWidth
            id="alternativePhone"
            label="Alternative Phone Number"
            name="alternativePhone"
            autoComplete="alternativePhone"
            type="number"
            onChange={handleChange}
            value={user.alternativePhone}
            error={!valid.alternativePhone}
            helperText={!valid.alternativePhone && "Phone Number must be 10 digits or leave empty"}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="state"
            label="State"
            name="state"
            autoComplete="state"
            onChange={handleChange}
            value={user.state}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="licence"
            label="Licence Number"
            name="licence"
            autoComplete="licence"
            onChange={handleChange}
            value={user.licence}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#23809fc2" }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

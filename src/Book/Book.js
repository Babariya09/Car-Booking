import React, { useState, useEffect } from "react";
import Footer from "../Dashboard/Footer";
import Navbar from "../Dashboard/Navbar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";
import "./Book.css";

const useStyles = makeStyles((theme) => ({
  us: {
    fontSize: "35px",
  },
  we: {
    padding: "20px",
  },
  color: {
    backgroundColor: "#23809fc2",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: "30px",
  },
  car: {
    fontSize: "25px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "25px",
  },
  form: {
    padding: "10px 40px 10px 40px",
  },
  btn: {
    backgroundColor: "#23809fc2",
  },
}));

export default function Book() {
  const classes = useStyles();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    drive: "",
    state: "",
    pickup: "",
    drop: "",
    date: "",
  });
  const [book, setBook] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    drive: "",
    state: "",
    pickup: "",
    drop: "",
    date: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const [response1, response2] = await Promise.all([
        axios.get("http://localhost:8000/api/Addcardata"),
        axios.get("http://localhost:8000/api/Statedata"),
      ]);
      setData1(response1.data);
      setData2(response2.data);
    };
    fetchData();
  }, []);

  const onSubmit = () => {
    const newErrors = { ...errors };
    let hasError = false;

    // Check if any field is empty
    if (!book.name) {
      newErrors.name = "Name is required";
      hasError = true;
    }
    if (!book.phone) {
      newErrors.phone = "Phone number is required";
      hasError = true;
    }
    if (!book.email) {
      newErrors.email = "Email is required";
      hasError = true;
    }

    if (book.car === "") {
      newErrors.car = "Car type is required";
      hasError = true;
    }
    if (book.drive === "") {
      newErrors.drive = "Drive option is required";
      hasError = true;
    }
    if (book.state === "") {
      newErrors.state = "State is required";
      hasError = true;
    }
    if (!book.pickup) {
      newErrors.pickup = "Pickup point is required";
      hasError = true;
    }
    if (!book.drop) {
      newErrors.drop = "Drop-off point is required";
      hasError = true;
    }
    if (!book.date) {
      newErrors.date = "Date is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Your submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));

    // Reset errors for select boxes
    if (["car", "drive", "state"].includes(name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value ? "" : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      }));
    } else {
      // Reset errors for other fields
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };


  return (
    <>
      <title>Book Now  - Speedo Car Rental </title>
      <Navbar />
      <Grid>
        <Grid className={classes.color}>
          <Box className={classes.us}>Book Now</Box>
          <Box className={classes.we}>Book Your Ride Now</Box>
        </Grid>
        <Box className={classes.car}>Rent A Car Online</Box>
        <Grid className={classes.form}>
          <Box style={{ fontWeight: "400", fontSize: "20px" }}> Full Name*</Box>
          <TextField
            placeholder="Full Name"
            fullWidth
            required
            error={Boolean(errors.name)}
            helperText={errors.name}
            name="name"
            value={book.name}
            onChange={handleChange}
          />
          <Box style={{ fontWeight: "400", fontSize: "20px" }}> Phone Number*</Box>
          <TextField
            type="Number"
            placeholder="Phone Number"
            fullWidth
            required
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            name="phone"
            value={book.phone}
            onChange={handleChange}
          />
          <Box style={{ fontWeight: "400", fontSize: "20px" }}> Email Address*</Box>
          <TextField
            placeholder="Email Address"
            fullWidth
            required
            error={Boolean(errors.email)}
            helperText={errors.email}
            name="email"
            value={book.email}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <Box style={{ fontWeight: "400", fontSize: "20px" }}> Select Car*</Box>
            <Select
              required
              error={Boolean(errors.car)}
              value={book.car}
              onChange={handleChange}
              displayEmpty
              name="car"
              helperText={errors.car}
            >
              <MenuItem value="">Choose Car</MenuItem>
              <MenuItem value="HatchBack">HatchBack</MenuItem>
              <MenuItem value="Sedan">Sedan</MenuItem>
              <MenuItem value="SUV/MUV">SUV/MUV</MenuItem>
              <MenuItem value="Primium">Primium</MenuItem>
              <MenuItem value="Luxury">Luxury</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <Box style={{ fontWeight: "400", fontSize: "20px" }}> Self Drive*</Box>
            <Select
              required
              error={Boolean(errors.drive)}
              value={book.drive}
              onChange={handleChange}
              displayEmpty
              name="drive"
              helperText={errors.drive}
            >
              <MenuItem value="">Choose Drive</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <Box style={{ fontWeight: "400", fontSize: "20px" }}> Select State*</Box>
            <Select
              required
              error={Boolean(errors.state)}
              value={book.state}
              onChange={handleChange}
              displayEmpty
              name="state"
              helperText={errors.state}
            >
              <MenuItem value="">Choose State</MenuItem>
              {(data2 || []).map((u) => (
                <MenuItem key={u.state} value={u.state}>
                  {u.state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box style={{ fontWeight: "400", fontSize: "20px" }}> Pickup Point*</Box>
          <TextField
            placeholder="Pickup Point"
            fullWidth
            required
            error={Boolean(errors.pickup)}
            helperText={errors.pickup}
            name="pickup"
            value={book.pickup}
            onChange={handleChange}
          />
          <Box style={{ fontWeight: "400", fontSize: "20px" }}> Drop-off Point*</Box>
          <TextField
            placeholder="Drop-off Point"
            fullWidth
            required
            error={Boolean(errors.drop)}
            helperText={errors.drop}
            name="drop"
            value={book.drop}
            onChange={handleChange}
          />
          <Box style={{ fontWeight: "400", fontSize: "20px" }}> Choose Date</Box>
          <TextField
            type="date"
            defaultValue="24/7/2023"
            fullWidth
            required
            error={Boolean(errors.date)}
            helperText={errors.date}
            name="date"
            value={book.date}
            onChange={handleChange}
          />
          <Button
            className="btn"
            style={{
              backgroundColor: "#23809fc2",
              marginTop: "20px",
              color: "white",
            }}
            fullWidth
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

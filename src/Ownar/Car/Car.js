import React, { useState, useEffect } from 'react';
import OwnerNavbar from "../../Ownar/Navbar/OwnerNavbar";
import Footer from "../../Dashboard/Footer";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    padding: "10px 60px 10px 60px",
  },
}));

export default function Car() {
  const navigate = useNavigate();
  const { index } = useParams();
  const classes = useStyles();
  const [comment, setComment] = useState({
    carname: "",
    platnumber: "",
    carType: "",
    fuelType: "",
    pricePerHour: "",
    image: "",
  });
  const [headingText, setHeadingText] = useState('ADD CAR');
  const fetchEditedData = async (id) => {
    const data = await axios.get(`http://localhost:8000/api/carupdate/${id}`);
    setComment(data.data);
  };
  useEffect(() => {
    if (index) {
      fetchEditedData(index);
      setHeadingText("EDIT CAR");
    }
  }, [index]);

  const [valid, setValid] = useState({});
  const oninput = (e) => {
    const { name, value } = e.target;
    setComment((pre) => ({
      ...pre,
      [name]: value,
    }));
    setValid(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setComment((pre) => ({
      ...pre,
      image: file,
    }));
  };

  const onSubmitAddCar = () => {
    if (comment.carname === "") {
      setValid((valid) => ({ ...valid, carname: true }));
      return;
    }
    if (comment.platnumber === "") {
      setValid((valid) => ({ ...valid, platnumber: true }));
      return;
    }

    const formData = new FormData();
    formData.append('carname', comment.carname);
    formData.append('platnumber', comment.platnumber);
    formData.append('carType', comment.carType);
    formData.append('fuelType', comment.fuelType);
    formData.append('pricePerHour', comment.pricePerHour);
    formData.append('image', comment.image);

    axios
      .post("http://localhost:8000/api/Addcar", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
        navigate("/CarTabel");
      })
      .catch(error => {
        console.error('Error adding car data:', error);
        toast.error('Error adding car data');
      });
  };

  const onSubmitEditCar = () => {
    // Similar logic to onSubmitAddCar but using different API endpoint for editing car
    if (comment.carname === "") {
      setValid((valid) => ({ ...valid, carname: true }));
      return;
    }
    if (comment.platnumber === "") {
      setValid((valid) => ({ ...valid, platnumber: true }));
      return;
    }

    const formData = new FormData();
    formData.append('carname', comment.carname);
    formData.append('platnumber', comment.platnumber);
    formData.append('carType', comment.carType);
    formData.append('fuelType', comment.fuelType);
    formData.append('pricePerHour', comment.pricePerHour);
    formData.append('image', comment.image);

    axios
      .put(`http://localhost:8000/api/carup/${index}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
        navigate("/CarTabel");
      })
      .catch(error => {
        console.error('Error editing car data:', error);
        toast.error('Error editing car data');
      });
  };

  return (
    <>
      <title>Car -Speedo Car Rental</title>
      <OwnerNavbar />
      <ToastContainer />
      <Box className={classes.car}>{headingText}</Box>

      <Grid className={classes.form}>
        {/* Add input field for Image */}
        <Box style={{ fontWeight: "400", fontSize: "20px" }}> Image*</Box>
        {comment.image ? (
          <>
            <label htmlFor="carImage">
              <img src={typeof comment.image === 'string' ? comment.image : URL.createObjectURL(comment.image)} alt="carImage" style={{ width: "222px", height: "222px", borderRadius: "100%" }} />
            </label>
            <input
              type="file"
              name='carImage'
              id='carImage'
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </>
        ) : (
          <input
            type="file"
            name='carImage'
            id='carImage'
            accept="image/*"
            onChange={handleFileChange}
          />

        )}

        <Box style={{ fontWeight: "400", fontSize: "20px" }}> Car Name*</Box>
        <TextField
          name="carname"
          value={comment.carname}
          fullWidth
          onChange={oninput}
        />
        {valid.carname && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Enter Car Name
          </span>
        )}
        <FormControl fullWidth>
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            Select Car*
          </Box>
          <Select onChange={oninput} name="carType" value={comment.carType} placeholder="Car Type">
            <MenuItem value="HatchBack">HatchBack</MenuItem>
            <MenuItem value="Sedan">Sedan</MenuItem>
            <MenuItem value="SUV/MUV">SUV/MUV</MenuItem>
            <MenuItem value="Primium">Primium</MenuItem>
            <MenuItem value="Luxury">Luxury</MenuItem>
          </Select>
        </FormControl>
        {valid.carType && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Choose Car Type
          </span>
        )}
        <FormControl fullWidth>
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            Select Fuel Type*
          </Box>
          <Select onChange={oninput} name="fuelType" value={comment.fuelType}>
            <MenuItem value="Patrol">Patrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
          </Select>
        </FormControl>
        <Box style={{ fontWeight: "400", fontSize: "20px" }}> Price Per Hour*</Box>
        <TextField
          name="pricePerHour"
          value={comment.pricePerHour}
          fullWidth
          onChange={oninput}
        />
        <Box style={{ fontWeight: "400", fontSize: "20px" }}> Plat Number*</Box>
        <TextField
          name="platnumber"
          value={comment.platnumber}
          fullWidth
          onChange={oninput}
        />
        {valid.platnumber && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Enter Plat Number
          </span>
        )}
        {index ? (
          <Button
            className="btn"
            onClick={onSubmitEditCar}
            style={{
              backgroundColor: "#23809fc2",
              marginTop: "20px",
              color: "white",
            }}
          >
            Edit Car
          </Button>
        ) : (
          <Button
            className="btn"
            onClick={onSubmitAddCar}
            style={{
              backgroundColor: "#23809fc2",
              marginTop: "20px",
              color: "white",
            }}
          >
            Add Car
          </Button>
        )}
      </Grid>
      <Footer />
    </>
  )
}

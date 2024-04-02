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
    carbrand: "",
    carname: "",
    platnumber: ""

  });
  const [headingText, setHeadingText] = useState('ADD CAR');
  const fetchEditedData = async (id) => {
    const data = await axios.get(`http://localhost:8000/api/carupdate/${id}`);
    setComment(data.data);
  };
  useEffect(() => {
    if (index) {
      fetchEditedData(index);
    }
  }, []);

  useEffect(() => {
    if (index) {
      setHeadingText("EDIT CAR");
    }
  }, []);
  const [valid, setValid] = useState({});
  const oninput = (e) => {
    const { name, value } = e.target;
    setComment((pre) => ({
      ...pre,
      [name]: value,
    }));
    setValid(true);
  };

  const onSubmit = () => {
    if (comment.carbrand === "") {
      setValid((...valid) => ({ ...valid, carbrand: true }));
      return;
    }
    if (comment.carname === "") {
      setValid((...valid) => ({ ...valid, carname: true }));
      return;
    }
    if (comment.platnumber === "") {
      setValid((...valid) => ({ ...valid, platnumber: true }));
      return;
    }
    if (index) {
      axios
        .put(`http://localhost:8000/api/carup/${index}`, comment)
        .then((res) => console.log("==>", res.data.message));
    } else {
      axios
        .post("http://localhost:8000/api/Addcar", comment)
        .then((res) => console.log(res.data.message));
    }
    navigate("/CarTabel")
  };
  return (
    <>
      <title>Car -Speedo Car Rental</title>
      <OwnerNavbar />
      <Box className={classes.car}>{headingText}</Box>

      <Grid className={classes.form}>
        <Box style={{ fontWeight: "400", fontSize: "20px" }}> Car Name*</Box>
        <TextField
          name="carbrand"
          value={comment.carbrand}
          fullWidth
          onChange={oninput}
        />
        {valid.carbrand == true && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Enter Gadi Name
          </span>
        )}
        <FormControl fullWidth>
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            Select Car*
          </Box>
          <Select onChange={oninput} name="carname" value={comment.carname} placeholder="Gadi Type">
            <MenuItem value="HatchBack">HatchBack</MenuItem>
            <MenuItem value="Sedan">Sedan</MenuItem>
            <MenuItem value="SUV/MUV">SUV/MUV</MenuItem>
            <MenuItem value="Primium">Primium</MenuItem>
            <MenuItem value="Luxury">Luxury</MenuItem>
          </Select>
        </FormControl>
        {valid.carname == true && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Choose Car Type*
          </span>
        )}
        <Box style={{ fontWeight: "400", fontSize: "20px" }}> Plat Number*</Box>
        <TextField
          name="platnumber"
          value={comment.platnumber}
          fullWidth
          onChange={oninput}
        />
        {valid.platnumber == true && (
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
        <Button
          className="btn"
          onClick={onSubmit}
          style={{
            backgroundColor: "#23809fc2",
            marginTop: "20px",
            color: "white",
          }}
        >
          Submit
        </Button>
      </Grid>
      <Footer />
    </>
  )
}

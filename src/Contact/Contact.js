import React, { useState } from "react";
import Footer from "../Dashboard/Footer";
import Navbar from "../Dashboard/Navbar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import ContactCenter from "./ContactCenter";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

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
export default function Contact() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [comment, setComment] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [valid, setValid] = useState({});
  const [hide, setHide] = useState({});
  const oninput = (e) => {
    const { name, value } = e.target;
    setComment((pre) => ({
      ...pre,
      [name]: value,
    }));
    setValid(true);
    setHide(true);
  };

  const onSubmit = () => {
    if (comment.name === "") {
      setValid((...valid) => ({ ...valid, name: true }));
      return;
    }

    var IndNum = /^[0]?[6789]\d{9}$/;
    if (comment.phone === "") {
      setValid((...valid) => ({ ...valid, phone: true }));
      return;
    } else if (!IndNum.test(comment.phone)) {
      setValid((...valid) => ({ ...valid, phone: true }));
      return;
    }

    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (comment.email === "") {
      setValid((...valid) => ({ ...valid, email: true }));
      return;
    } else if (!filter.test(comment.email)) {
      setHide((...hide) => ({ ...hide, email: true }));
      return;
    }
    if (comment.message === "") {
      setValid((...valid) => ({ ...valid, message: true }));
      return;
    }
    axios
      .post("http://localhost:8000/api/comment  ", comment)
      .then((res) => console.log(res.data.message));
    localStorage.setItem("Contact", JSON.stringify(comment));
    navigate("/GetintouchConfirm");
  };

  return (
    <>
      <title>Contact Us - Speedo Car Rental</title>
      <Navbar />
      <Grid>
        <Grid className={classes.color}>
          <Box className={classes.us}>Contact us</Box>
          <Box className={classes.we}>Get in Touch With Us</Box>
        </Grid>
        <ContactCenter />
        <Box className={classes.car}>Get In Touch With Us</Box>
        <Grid className={classes.form}>
          <Box style={{ fontWeight: "400", fontSize: "20px" }}> Full Name*</Box>
          <TextField
            name="name"
            value={comment.name}
            placeholder="Full Name"
            fullWidth
            onChange={oninput}
          />
          {valid.name == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Your Name
            </span>
          )}
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            {" "}
            Phone Number*
          </Box>
          <TextField
            name="phone"
            value={comment.phone}
            placeholder="Phone Number"
            fullWidth
            onChange={oninput}
          />
          {valid.phone == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Valid Number
            </span>
          )}
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            {" "}
            Email Address*
          </Box>
          <TextField
            name="email"
            value={comment.email}
            placeholder="Email Address"
            fullWidth
            onChange={oninput}
          />
          {valid.email == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Valid email
            </span>
          )}
          {hide.email == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Invlid Email Address
            </span>
          )}
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>Message*</Box>
          <TextField
            name="message"
            value={comment.message}
            placeholder="Text Filed"
            fullWidth
            onChange={oninput}
          />
          {valid.message == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Type A Message
            </span>
          )}
          <br></br>
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
      </Grid>
      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
import PopulerCenter from "../Popular/PopularCenter";
import AboutCenter from "../About/AboutCenter";
import ContactCenter from "../Contact/ContactCenter";
import GetInTouch from "./GetInTouch";
import CarForm from "./CarForm";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import video from '../../src/Image/video1.mp4'

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#23809fc2",
    textAlign: "center",
    fontWeight: "bold",
    color: "balck",
    padding: "30px",
    marginTop: "30px",
  },

  us: {
    fontSize: "45px",
  },
  we: {
    padding: "15px",
    fontSize: "25px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  const Onpush = () => {
    navigate("/Book");
  };

  return (
    <>
      <title>Home - Speedo Car Rental</title>
      <Navbar />
      <div className="row">
      <video src={video} alt="video" className="bg-video" autoPlay loop muted/>
        <div className="col-12 col-lg-12 col-sm-12" style={{ marginTop: "1vw" }}>
          <GetInTouch />
        </div>
        {/* <div className="col-12 col-lg-4 col-sm-6">
          <CarForm />
        </div> */}
      </div>
      <ContactCenter />
      <Grid className={classes.color}>
        <Box className={classes.us}>Upto 35% Discounts & Special Offers</Box>
        <Box className={classes.we}>Rent a Car for 7 Day</Box>
        <Box className={classes.we}>and get 3 days extra absolutely FREE</Box>
        <Button
          sx={{ mt: 2, backgroundColor: "#23809fc2", padding: "12px" }}
          variant="contained"
          onClick={Onpush}
        >
          Book Your Ride Now
        </Button>
      </Grid>
      <AboutCenter />
      <PopulerCenter />
      <Footer />
    </>
  );
}

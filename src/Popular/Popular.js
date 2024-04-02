import React from "react";
import "./Popular.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
import PopularCenter from "./PopularCenter";
import 'bootstrap/dist/css/bootstrap.min.css';
const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#23809fc2",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: "30px",
  },

  us: {
    fontSize: "35px",
  },
  we: {
    padding: "20px",
  },
}));

export default function Populer() {
  const classes = useStyles();
  return (
    <>
      <title>Popular Fleets - Speedo Car Rental</title>
      <Navbar />

      <Grid>
        <Grid className={classes.color}>
          <Box className={classes.us}>Popular Fleets</Box>
          <Box className={classes.we}>
            We have A Wide Range Of Fleets Available, but these are our popular
            fleets
          </Box>
        </Grid>
  
        <PopularCenter />
        <Footer />
      </Grid>
    </>
  );
}

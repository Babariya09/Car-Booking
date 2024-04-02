import React from "react";
import Navbar from "../Dashboard/Navbar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Footer from "../Dashboard/Footer";
import AboutCenter from "./AboutCenter";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#23809fc2",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: "30px",
    fontSize: "20px",
  },
  us: {
    fontSize: "40px",
  },
  we: {
    padding: "30px",
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <>
      <title>About us - Speedo Car Rental</title>
      <Navbar />
      <Grid>
        <Grid className={classes.color}>
          <Box className={classes.us}>About us</Box>
          <Box className={classes.we}>Who We Are</Box>
        </Grid>
        <AboutCenter />
        <Footer />
      </Grid>
    </>
  );
}

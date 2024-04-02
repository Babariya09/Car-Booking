import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#333",
    textAlign: "center",
    color: "white",
    padding: "30px 0px 49px 0px",
  },
  footer1: {
    padding: "30px",
    fontWeight: "bold",
  },
  copy: {
    padding: "20px",
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
  foo: {
    padding: "30px",
    fontWeight: "bold",
  },
  ftext: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: "250px",
    rowGap: "30px",
    padding: "30px",
  },
  info1: {
    fontSize: "15px",
  },
  info2: {
    fontWeight: "bold",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.footer}>
        <Grid className={classes.footer1}>
          <Box>Speedo Car Rental</Box>
          <Box>Book Cab, Self Drive, Outstation Trips</Box>
        </Grid>
        <Grid className={classes.foo}>
          <Box className={classes.ftext}>Office address</Box>
          <Box>
            {" "}
            20-22, Silver Business Point, VIP Cir, near Royal Square, Uttran,
            Surat, Gujarat 394101
          </Box>
        </Grid>
        <Grid spacing={3} className={classes.info}>
          <Grid>
            <Box className={classes.info2}>
              {" "}
              <span style={{ color: "#23809fc2" }}>Email</span> Address
            </Box>
            <Box className={classes.info1}>speedocarrental85@gmail.com</Box>
          </Grid>
          <Grid>
            <Box className={classes.info2}>
              <span style={{ color: "#23809fc2" }}>Email</span> Address
            </Box>
            <Box className={classes.info1}>speedocarrental85@gmail.com</Box>
          </Grid>
          <Grid>
            <Box className={classes.info2}>
              <span style={{ color: "#23809fc2" }}>Office</span> Hours
            </Box>
            <Box className={classes.info1}> 24X7 Available</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.copy}>
        <Box>Copyright © 2023 - Speedo Car Rental</Box>
      </Grid>
    </>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { MdEmail } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  eetext: {
    marginTop: "10px",
    width: "200px",
  },
  etext: {
    fontWeight: 600,
    fontSize: "24px",
    marginTop: "10px",
  },
}));
export default function ContactCenter() {
  const classes = useStyles();
  return (
    <>
      <Grid className="e-box">
        <Grid className="ebox">
          <Grid className="e-box11">
            <MdEmail />
          </Grid>
          <Box className={classes.etext}>Email Address</Box>
          <Box className="border"></Box>
          <Box className="border1"></Box>
          <Box className={classes.eetext}>speedocarrental85@gmail.com</Box>
        </Grid>
        <Grid className="ebox">
          <Grid className="e-box11">
            <MdBookmark />
          </Grid>
          <Box className={classes.etext}>Fast & Easy Booking</Box>
          <Box className="border"></Box>
          <Box className="border1"></Box>
          <Box className={classes.eetext}>
            You can book a cab online in just 2 minutes. It's easy & simple
          </Box>
        </Grid>
        <Grid className="ebox">
          <Grid className="e-box11">
            <CiLocationOn />
          </Grid>
          <Box className={classes.etext}>No Booking Charges</Box>
          <Box className="border"></Box>
          <Box className="border1"></Box>
          <Box className={classes.eetext}>
            20-22, Silver Business Point, VIP Cir, near Royal Square, Uttran,
            Surat, Gujarat 394101
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

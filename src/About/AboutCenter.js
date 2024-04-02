import React from "react";
import "./About.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import img from "../Image/harrier.jpg";
import img1 from "../Image/kia.jpg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  word: {
    fontSize: "17px",
  },
  word1: {
    fontWeight: "bolder",
    fontSize: "20px",
  },
  car: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "50px",
    justifyContent: "center",
    top: "20px",
    columnGap: "33px",
    padding: "20px 20px 20px 20px",
  },
  cars: {
    fontSize: "35px",
    fontWeight: "bolder",
  },
  btn: {
    backgroundColor: "#23809fc2",
  },
}));

export default function AboutCenter() {
  const classes = useStyles();
  const navigate = useNavigate();

  const Onpush = () => {
    navigate("/Populer  ");
  };

  return (
    <>
      <Grid
        className={classes.car}
        rowspacing={2}
        style={{ marginTop: "-5px" }}
      >
        <Grid sx={{ width: "800px", marginTop: "0px" }}>
          <Box className={classes.cars} sx={{ mt: 8 }}>
            Best Car Rental & Cab Booking Services
          </Box>
          <Box sx={{ mt: 4 }} className={classes.word}>
            Speedo Car Rental is a leading cab rental company. We have a wide
            range of car fleet which includes economy cars, SUV and MUV cars and
            Luxury cars.
          </Box>
          <Box sx={{ mt: 4 }} className={classes.word}>
            With the trust of our polite driver you can completely rely on us.
            We give you tailor made tour packages like Char Dham Yatra, Golden
            Triangle Tour, Trip to Himachal and Leh Ladakh Etc.
          </Box>

          <Button
            sx={{ mt: 2, backgroundColor: "#23809fc2" }}
            variant="contained"
            onClick={Onpush}
          >
            Know More
          </Button>
        </Grid>
        <Grid>
          <img src={img} alt="Girl in a jacket" className="img" />
        </Grid>
      </Grid>
      <Grid className={classes.car} rowspacing={2}>
        <Grid>
          <img src={img1} alt="Girl in a jacket" className="img" />
        </Grid>
        <Grid sx={{ width: "800px" }}>
          <Box className={classes.cars} sx={{ mt: 1 }}>
            Mission is to Provide Low Cost Effective Rental Solutions
          </Box>
          <Box sx={{ mt: 1 }} className={classes.word}>
            We want to provide best car rental, cab booking, self driving
            services all over India @ lowest prices. We want to be one of the
            largest car rental & cab booking company in India.
          </Box>
          <Box sx={{ mt: 1 }} className={classes.word}>
            With years of experience & technology we have make our process so
            simple & so that you can book your cab at your fingertips.
          </Box>

          <Box sx={{ mt: 1 }} className={classes.word1}>
            Competitive Prices
          </Box>
          <Box sx={{ mt: 1 }} className={classes.word1}>
            Breakdown Assistance
          </Box>
          <Box sx={{ mt: 1 }} className={classes.word1}>
            Trusted Rent Service
          </Box>
          <Box sx={{ mt: 1 }} className={classes.word1}>
            24x7 Customer Support
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

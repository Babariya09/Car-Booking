import React from "react";
import "./Popular.css"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import img from "../Image/nexon.jpg";
import img1 from "../Image/harrier.jpg";
import img2 from "../Image/punch.jpg";
import img3 from "../Image/seltos.jpg";
import img4 from "../Image/xuv.jpg";
import img5 from "../Image/thar.png";
import img6 from "../Image/Innova.jpg";
import img7 from "../Image/benz.jpg";
import img8 from "../Image/kiacarnival.jpg";
import img9 from "../Image/Safari.jpg";
import img10 from "../Image/verna.jpg";
import img11 from "../Image/Skoda.jpg";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#23809fc2",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: "30px",
  },
  colorbc: {
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
  pop: {
    textAlign: "center",
    padding: "30px",
  },
  pop1: {
    fontSize: "50px",
    fontWeight: "normal",
  },
  pop2: {
    fontSize: "30px",
  },
  img: {
    height: "210px",
    width: "210px",
  },
  imgg: {
    backgroundColor: "#23809fc2",
    color: "#fff !important",
    boxShadow: "5px 5px 3px rgb(0 0 0 / 15%), -5px -5px 3px rgb(0 0 0 / 15%)",
    padding:"10px"
  },
  imgmain: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: "40px",
    rowGap: "30px",
    padding: "10px 10px 10px 10px",
  },
  cartext: {
    padding: "30px",
    textAlign: "center",
    fontWeight: "bold",
  },
  color1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "balck",
  },
}));
export default function PopularCenter() {
  const classes = useStyles();
  const navigate = useNavigate();
  const Onpush = () => {
    navigate("/FeedBack");
  };
  const navigatetobook = () => {
    navigate("/Book");
  };
  return (
    <>
      <Grid className={classes.pop}>
        <Box className={classes.pop1}>Popular Fleets</Box>
        <Box className={classes.pop2}>
          These are some of our popular fleet. But we have others also.
        </Box>
      </Grid>

      <Grid spacing={3}>
        <Grid className={classes.imgmain} >
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}> Tata Nexon Car  4+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img1} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Tata harrier  4+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>599 KM/Day</Box>
              <Box> Excellent engine economy</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img2} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Tata Punch  3+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>600 KM/Day</Box>
              <Box>Impressive performance</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img3} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Kia seltos  3+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>673 KM/Day</Box>
              <Box>Great frugal fuel economy</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img5} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Mahindra Thar  3+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>346 KM/Day</Box>
              <Box>Safety features including</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img4} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Mahindra XUV700  4+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>490 KM/Day</Box>
              <Box>Comfortable driving experience</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img7} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Mercedes Benz  6+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>800 KM/Day</Box>
              <Box>All-electric range of 40 miles</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img6} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Innova  6+1</Box>
              <Box>AC</Box>
              <Box> GPS Fitted</Box>
              <Box>793 KM/Day</Box>
              <Box>5-star safety rating</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img8} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Kia Carnival 6+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>500 KM/Day</Box>
              <Box>Automatic emergency braking</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img9} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Tata Safari  6+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>900 KM/Day</Box>
              <Box>Ambient Lighting</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img10} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Hyundai Verna 4+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>800 KM/Day</Box>
              <Box>Reversing Camera</Box>
            </Grid>
          </Grid>
          <Grid className="imgg" onClick={navigatetobook}>
            <img src={img11} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Skoda Slavia  4+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>200 KM/Day</Box>
              <Box>Panoramic Sunroof</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="bcimg">
        <Grid className={classes.colorbc}>
          <Box className={classes.us}>Customer Reviews</Box>
          <Box className={classes.we}>
            See What Our Customer Says About Us...
          </Box>
        </Grid>
        <Grid className="textbc">
          <Box className="text1">
            I have booked one way cab from Speedo Car Rental. I have to go from
            Mumbai to Pune. They arranged a cab for me at very affordable
            prices. I am really happy with their services.
          </Box>
          <Box className="text2">Risi Singh</Box>
          <Box className="text3">Surat, Gujarat</Box>
        </Grid>
        <Grid className="textbc">
          <Box className="text1">
            I need a cab in Jaipur, got Speedo Car Rental when searching online. They provide me 50% off on my first ride. I booked my ride for just Rs. 1,500 for 2 days trip.
          </Box>
          <Box className="text2">Narender Meena</Box>
          <Box className="text3">Jaipur, Rajasthan</Box>
        </Grid>
        <Grid className={classes.color1}>
          <Button
            sx={{ mt: 2, backgroundColor: "#23809fc2", padding: "12px" }}
            variant="contained"
            onClick={Onpush}
          >
            Give Your Review
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

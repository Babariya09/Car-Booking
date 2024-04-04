import React, { useEffect, useState } from "react";
import "./Popular.css"
import { Button, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import axios from "axios";

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
    padding: "10px"
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
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    sortBy: "",
    search: "",
    carType: "",
  });

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/getAllCar"
      );
      setData(response.cars);
      setFilteredData(response.cars);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilters = () => {
    let filteredCars = [...data];

    if (filters.sortBy === "highToLow") {
      filteredCars.sort((a, b) => b.pricePerHour - a.pricePerHour);
    } else if (filters.sortBy === "lowToHigh") {
      filteredCars.sort((a, b) => a.pricePerHour - b.pricePerHour);
    }

    if (filters.search) {
      filteredCars = filteredCars.filter((car) =>
        car.carname.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.carType) {
      filteredCars = filteredCars.filter((car) =>
        car.carType.toLowerCase() === filters.carType.toLowerCase()
      );
    }

    setFilteredData(filteredCars);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    applyFilters();
  }, [filters, data]);

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

      <Grid className="container mx-auto" container justifyContent="center" spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <Select
              value={filters.sortBy}
              onChange={handleFilterChange}
              displayEmpty
              name="sortBy"
            >
              <MenuItem value="">Sort By</MenuItem>
              <MenuItem value="highToLow">Price: High to Low</MenuItem>
              <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            value={filters.search}
            onChange={handleFilterChange}
            name="search"
            label="Search Car Name"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <Select
              value={filters.carType}
              onChange={handleFilterChange}
              name="carType"
              displayEmpty
              inputProps={{ 'aria-label': 'Select car type' }}
            >
              <MenuItem value="">Car Type</MenuItem>
              <MenuItem value="Hatchback">Hatchback</MenuItem>
              <MenuItem value="Premium">Premium</MenuItem>
              <MenuItem value="Luxury">Luxury</MenuItem>
              <MenuItem value="Sedan">Sedan</MenuItem>
              <MenuItem value="SUV/MUV">SUV</MenuItem>
            </Select>
          </FormControl>

        </Grid>
      </Grid>

      <Grid spacing={3}>
        <Grid className={classes.imgmain} >
          {filteredData?.map((row, i) => (
            <Grid className="imgg" onClick={navigatetobook}>
              <img src={row?.image} alt="Girl in a jacket" className="imgcr" />
              <Grid className={classes.cartext}>
                <Box sx={{ fontSize: "20px" }}>{row?.carname}</Box>
                <Box>{row?.carType}</Box>
                <Box>{row?.fuelType}</Box>
                <Box>{row?.platnumber}</Box>
                <Box>{row?.pricePerHour}</Box>
              </Grid>
            </Grid>
          ))}
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

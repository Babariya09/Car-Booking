import React, { useState, useEffect } from 'react';
import OwnerNavbar from "../../Ownar/Navbar/OwnerNavbar";
import Footer from "../../Dashboard/Footer";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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

export default function State() {
    const navigate = useNavigate();

    const classes = useStyles();
    const [comment, setComment] = useState({});
    const { index } = useParams();
    const fetchEditedData = async (id) => {
        const data = await axios.get(`http://localhost:8000/api/Gmailupdateid/${id}`);
        setComment(data);
    };
    console.log("comm", comment.data);
    let data1 = comment.data
    useEffect(() => {
        if (index) {
            fetchEditedData(index);
        }
    }, []);

    const [valid, setValid] = useState({});
    const [driver, setDriver] = useState({
        dname: "",
        driverphone: ""
    })
    const mergedState = { ...data1, ...driver };

    const oninput = (e) => {
        const { name, value } = e.target;

        setDriver((pre) => ({
            ...pre,
            [name]: value,
        }));
        setValid(true);
    };

    const onSubmit = () => {
        if (driver.drivername === "") {
            setValid((...valid) => ({ ...valid, dname: true }));
            return;
        } if (driver.driverphone === "") {
            setValid((...valid) => ({ ...valid, driverphone: true }));
            return;
        }

        axios
            .post("http://localhost:8000/api/driversent", mergedState)
            .then((res) => console.log(res.data.message));
        navigate("/BookData")
    };
    return (
        <>
            <title>Send Driver Data - Speedo Car Rental</title>
            <OwnerNavbar />
            <Box className={classes.car}>Driver Details</Box>
            <Grid className={classes.form}>
                <Box style={{ fontWeight: "400", fontSize: "20px" }}> Driver Full Name*</Box>
                <TextField
                    id="outlined-basic"
                    placeholder="Driver Full Name"
                    fullWidth
                    onChange={oninput}
                    value={driver.drivername}
                    name="drivername"
                />
                {valid.drivername == true && (
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
                    Driver Phone Number*
                </Box>
                <TextField
                    id="outlined-basic"
                    placeholder="Driver Phone Number"
                    fullWidth
                    onChange={oninput}
                    value={driver.driverphone}
                    name="driverphone"
                />
                {valid.driverphone == true && (
                    <span
                        style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "15px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        Enter Valid Driverphone Number
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

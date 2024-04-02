import React, { useState, useEffect } from 'react';
import OwnerNavbar from "../Navbar/OwnerNavbar";
import Footer from "../../Dashboard/Footer";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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

export default function Driver() {
    const navigate = useNavigate();
    const [data2, setData2] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const [response2] = await Promise.all([
                axios.get("http://localhost:8000/api/Statedata"),
            ]);
            setData2(response2.data);
        };
        fetchData();
    }, []);

    const classes = useStyles();
    const [comment, setComment] = useState({
        driver: "",
        phone: "",
        alternativephone: "",
        email: "",
        state: "",
        licence: "",

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
        if (comment.driver === "") {
            setValid((...valid) => ({ ...valid, driver: true }));
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

        if (comment.alternativephone === "") {
            setValid((...valid) => ({ ...valid, alternativephone: true }));
            return;
        } else if (!IndNum.test(comment.alternativephone)) {
            setValid((...valid) => ({ ...valid, alternativephone: true }));
            return;
        } else if (comment.alternativephone === comment.phone) {
            setHide((...hide) => ({ ...hide, alternativephone: true }));
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
        if (comment.state === "") {
            setValid((...valid) => ({ ...valid, state: true }));
            return;
        }

        if (comment.licence === "") {
            setValid((...valid) => ({ ...valid, licence: true }));
            return;
        }

        axios
            .post("http://localhost:8000/api/Driver", comment)
            .then((res) => console.log(res.data.message));
        navigate("/DriverTabel")


    };
    return (
        <>
            <title>Driver Details - Speedo Car Rental</title>
            <OwnerNavbar />
            <Box className={classes.car}>ENTER DRIVER DETAILS</Box>
            <Grid className={classes.form}>
                <Box style={{ fontWeight: "400", fontSize: "20px" }}> Driver Name*</Box>
                <TextField
                    name="driver"
                    value={comment.driver}
                    placeholder="Driver Name"
                    fullWidth
                    onChange={oninput}
                />
                {valid.driver == true && (
                    <span
                        style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "15px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        Enter Driver Name
                    </span>
                )}
                <Box style={{ fontWeight: "400", fontSize: "20px" }}>
                    Phone Number*
                </Box>
                <TextField
                    value={comment.phone}
                    type="Number"
                    name="phone"
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
                    Alternatvie Phone Number*
                </Box>
                <TextField
                    value={comment.alternativephone}
                    type="Number"
                    name="alternativephone"
                    placeholder="Alternative Phone Number"
                    fullWidth
                    onChange={oninput}
                />
                {valid.alternativephone == true && (
                    <span
                        style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "15px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        Enter Valid Alternative Number
                    </span>
                )}
                {hide.alternativephone == true && (
                    <span
                        style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "15px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        Phone Number And Alternatvie number are Match
                    </span>
                )}
                <Box style={{ fontWeight: "400", fontSize: "20px" }}>
                    {" "}
                    Email Address*
                </Box>
                <TextField
                    id="outlined-basic"
                    placeholder="Email Address"
                    fullWidth
                    onChange={oninput}
                    value={comment.email}
                    name="email"
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
                <FormControl fullWidth>
                    <Box style={{ fontWeight: "400", fontSize: "20px" }}>
                        Select State*
                    </Box>
                    <Select
                        name="state"
                        placeholder="Self Drive"
                        onChange={oninput}
                        value={comment.state}
                    >

                        {(data2 || []).map((u) => (
                            <MenuItem value={u.state} >{u.state}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {valid.state == true && (
                    <span
                        style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "15px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        Select State
                    </span>
                )}
                <Box style={{ fontWeight: "400", fontSize: "20px" }}> Licence Number*</Box>
                <TextField
                    name="licence"
                    value={comment.licence}
                    placeholder="Licence Number"
                    fullWidth
                    onChange={oninput}
                />
                {valid.licence == true && (
                    <span
                        style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "15px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        Enter licence Number
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

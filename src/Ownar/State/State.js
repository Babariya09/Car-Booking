import React, { useState } from 'react';
import OwnerNavbar from "../../Ownar/Navbar/OwnerNavbar";
import Footer from "../../Dashboard/Footer";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
    const [comment, setComment] = useState({
        state: "",
    });
    const [valid, setValid] = useState({});
    const oninput = (e) => {
        const { name, value } = e.target;
        setComment((pre) => ({
            ...pre,
            [name]: value,
        }));
        setValid(true);
    };
    const onSubmit = () => {
        if (comment.state === "") {
            setValid((...valid) => ({ ...valid, state: true }));
            return;
        }
        axios
            .post("http://localhost:8000/api/Statecar", comment)
            .then((res) => console.log(res.data.message));
        navigate("/StateTabel")
    };
    return (
        <>
            <title>State -Speedo Car Rental</title>
            <OwnerNavbar />
            <Box className={classes.car}>ENTER STATE</Box>
            <Grid className={classes.form}>
                <Box style={{ fontWeight: "400", fontSize: "20px" }}>  State *</Box>
                <TextField
                    name="state"
                    value={comment.state}
                    fullWidth
                    onChange={oninput}
                />
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
                        Enter State Name
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";

function Details() {
    const navigate = useNavigate();
    const [data1, setData1] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const [response1] = await Promise.all([
                axios.get("http://localhost:8000/api/alldata"),
            ]);
            setData1(response1.data);
        };
        fetchData();
    }, []);

    const values = JSON.parse(localStorage.getItem('Profiledata'));
    const onSubmit = () => {
        const items = JSON.parse(localStorage.getItem('user'));
        var names = items.map(function (val) {
            return val.email;
        });
        if (names[0]) {
            var index = data1.findIndex((element) => element.email === names[0]);
            if (
                data1[index]?.email === names[0]
            ) {
                let id = data1[index]._id
                navigate(`/Profile/${id}`)
            }
        } else {
            navigate("/Profile");
        }
    };

    return (
        <>
            <title>Profile - Speedo Car Rental</title>

            <Navbar />
            <div className="card" style={{ margin: "2vw 8vw 2vw 8vw" }}>
                <div className="card-body">
                    <h5
                        className="card-title"
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "3vw",
                            color: "black",
                        }}
                    >
                        Profile
                    </h5>

                    <div className="mb-2" style={{ fontSize: "17px", color: "black" }}>
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Full Name*
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={values.name}
                            aria-describedby="name"
                            placeholder="Enter Your Full Name"
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Contact Number*
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={values.phone}
                            aria-describedby="name"
                            placeholder="Enter Your Contact number"
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email Address*
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={values.email}
                            aria-describedby="name"
                            placeholder="Enter Your Email Address"
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Gender
                        </label>
                        <select
                            type="text"
                            className="form-control"
                            name="gender"
                            value={values.gender}
                            aria-describedby="name"
                        >
                            <option> Select gender </option>
                            <option> Male</option>
                            <option> Female</option>
                            <option> Other</option>
                        </select>

                        <label htmlFor="exampleInputEmail1" className="form-label">
                            DOB
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            name="dob"
                            value={values.dob}
                            aria-describedby="name"
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Address
                        </label>
                        <textarea
                            type="Address"
                            className="form-control"
                            name="Address"
                            value={values.Address}
                            aria-describedby="name"
                            placeholder="Enter Your Address"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-dark"
                        style={{ width: "100%", fontSize: "17px" }}
                        onClick={onSubmit}
                    >
                        Edit
                    </button>
                </div >
            </div >
            <Footer />
        </>
    );
}

export default Details;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
    const navigate = useNavigate();
    const [userRegistration, setUserRegistration] = useState({
        name: "",
        phone: "",
        email: "",
        gender: "",
        dob: "",
        Address: "",
    });
    const { id } = useParams();
    const [valid, setValid] = useState({});
    const [hide, setHide] = useState({});
    const fetchEditedData = async (id) => {
        const data = await axios.get(`http://localhost:8000/api/profileupdate/${id}`);
        setUserRegistration(data.data);
    };

    useEffect(() => {
        if (id) {
            fetchEditedData(id);
        }
    }, []);

    const OnHandel = (e) => {
        const { value, name } = e.target;
        setUserRegistration((pre) => ({ ...pre, [name]: value }));
        setValid(true);
        setHide(true);
    };

    const onSubmit = () => {

        if (userRegistration.name === "") {
            setValid((...valid) => ({ ...valid, name: true }));
            return;
        }

        var IndNum = /^[0]?[6789]\d{9}$/;
        if (userRegistration.phone === "") {
            setValid((...valid) => ({ ...valid, phone: true }));
            return;
        } else if (!IndNum.test(userRegistration.phone)) {
            setValid((...valid) => ({ ...valid, phone: true }));
            return;
        }

        const items = JSON.parse(localStorage.getItem('user'));
        var names = items.map(function (val) {
            return val.email;
        });
        var filter =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (userRegistration.email === "") {
            setValid((...valid) => ({ ...valid, email: true }));
            return;
        } else if (!filter.test(userRegistration.email)) {
            setHide((...hide) => ({ ...hide, email: true }));
            return;
        } else if (userRegistration.email !== names[0]) {
            setValid((...valid) => ({ ...valid, email: true }));
            return;
        }

        if (userRegistration.gender === "") {
            setValid((...valid) => ({ ...valid, gender: true }));
            return;
        }

        if (userRegistration.dob === "") {
            setValid((...valid) => ({ ...valid, dob: true }));
            return;
        }

        if (userRegistration.Address === "") {
            setValid((...valid) => ({ ...valid, Address: true }));
            return;
        }

        if (id) {
            axios
                .put(`http://localhost:8000/api/pupdate/${id}`, userRegistration)
                .then((res) => console.log("dtaa", res.data.message));
            localStorage.setItem("Profiledata", JSON.stringify(userRegistration));
            localStorage.setItem("Profile1", JSON.stringify([userRegistration]));
            navigate("/ShowProfile")
        } else {
            axios
                .post("http://localhost:8000/api/Profile", userRegistration)
                .then((res) => console.log("dtaa", res.data.message));
            localStorage.setItem("Profiledata", JSON.stringify(userRegistration));
            localStorage.setItem("Profile1", JSON.stringify([userRegistration]));
            navigate("/ShowProfile")

        }
    };

    return (
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
                    Edit Profile
                </h5>
                <div className="mb-2" style={{ fontSize: "17px", color: "black" }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Full Name*
                    </label>
                    <input
                        type="text"
                        className="form-control"

                        name="name"
                        value={userRegistration.name}
                        onChange={OnHandel}
                        aria-describedby="name"
                        placeholder="Enter Your Full Name"
                    />
                    {valid.name == true && (
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
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Contact Number*
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={userRegistration.phone}
                        onChange={OnHandel}
                        aria-describedby="name"
                        placeholder="Enter Your Contact number"
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
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email Address*
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={userRegistration.email}
                        onChange={OnHandel}
                        aria-describedby="name"
                        placeholder="Enter Your Email Address"
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
                            Use Register Email Address
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
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Gender
                    </label>
                    <select
                        type="text"
                        className="form-control"
                        name="gender"
                        value={userRegistration.gender}
                        onChange={OnHandel}
                        aria-describedby="name"
                    >
                        <option> Select gender </option>
                        <option> Male</option>
                        <option> Female</option>
                        <option> Other</option>
                    </select>
                    {valid.gender == true && (
                        <span
                            style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "15px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            Enter Your Gender
                        </span>
                    )}
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        DOB
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={userRegistration.dob}
                        onChange={OnHandel}
                        aria-describedby="name"
                    />
                    {valid.dob == true && (
                        <span
                            style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "15px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            Enter Your DOB
                        </span>
                    )}
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Address
                    </label>
                    <textarea
                        type="Address"
                        className="form-control"
                        name="Address"
                        value={userRegistration.Address}
                        onChange={OnHandel}
                        aria-describedby="name"
                        placeholder="Enter Your Address"
                    />
                    {valid.Address == true && (
                        <span
                            style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "15px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            Enter Your Address
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ width: "100%", fontSize: "17px" }}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </div >
        </div >
    );
}

export default Details;

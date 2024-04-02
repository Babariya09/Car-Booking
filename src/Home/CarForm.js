import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CarForm() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const [response1, response2] = await Promise.all([
        axios.get("http://localhost:8000/api/Addcardata"),
        axios.get("http://localhost:8000/api/Statedata"),
      ]);
      setData1(response1.data);
      setData2(response2.data);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();

  let iterator = data1.values();
  let array1 = []
  for (let value of iterator) {
    var carname = value.carname;
    array1.push(carname)
  }

  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
  }

  var HatchBack = getOccurrence(array1, "HatchBack");
  var Sedan = getOccurrence(array1, "Sedan");
  var Suv = getOccurrence(array1, "SUV/MUV");
  var Premium = getOccurrence(array1, "Primium");
  var Luxury = getOccurrence(array1, "Luxury");

  const [userRegistration, setUserRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    state: "",
    drop: "",
    pickup: "",
    drive: "",
    date: "",
  });
  const [valid, setValid] = useState({});
  const [hide, setHide] = useState({});

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
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
    if (userRegistration.car === "") {
      setValid((...valid) => ({ ...valid, car: true }));
      return;
    }

    const Hatch = JSON.parse(localStorage.getItem('HatchBack'));
    const sed = JSON.parse(localStorage.getItem('Sedan'));
    const su = JSON.parse(localStorage.getItem('Suv'));
    const lux = JSON.parse(localStorage.getItem('Luxury'));
    const pre = JSON.parse(localStorage.getItem('Premium'));


    if (userRegistration.car === "") {
      setValid((...valid) => ({ ...valid, car: true }));
      return;
    }
    if (userRegistration.car === "HatchBack") {
      if (HatchBack === Hatch) {
        setHide((...hide) => ({ ...hide, car: true }));
        return;
      }
      if (userRegistration.car === "HatchBack") {
        const num = sed
        const num1 = 1
        let sum = num + num1
        localStorage.setItem('HatchBack', JSON.stringify(sum));
      }
    } else if (userRegistration.car === "Sedan") {
      if (Sedan === sed) {
        setHide((...hide) => ({ ...hide, car: true }));
        return;
      }
      if (userRegistration.car === "Sedan") {
        const num = sed
        const num1 = 1
        let sum = num + num1
        localStorage.setItem('Sedan', JSON.stringify(sum));
      }
    } else if (userRegistration.car === "SUV/MUV") {
      if (Suv === su) {
        setHide((...hide) => ({ ...hide, car: true }));
        return;
      }
      if (userRegistration.car === "SUV/MUV") {
        const num = su
        const num1 = 1
        let sum = num + num1
        localStorage.setItem('Suv', JSON.stringify(sum));
      }
    } else if (userRegistration.car === "Premium") {
      if (Premium === pre) {
        setHide((...hide) => ({ ...hide, car: true }));
        return;
      }
      if (userRegistration.car === "Premium") {
        const num = pre
        const num1 = 1
        let sum = num + num1
        localStorage.setItem('Premium', JSON.stringify(sum));
      }
    } else if (userRegistration.car === "Luxury") {
      if (Luxury === lux) {
        setHide((...hide) => ({ ...hide, car: true }));
        return;
      }
      if (userRegistration.car === "Luxury") {
        const num = lux
        const num1 = 1
        let sum = num + num1
        localStorage.setItem('Luxury', JSON.stringify(sum));
      }
    }
    if (userRegistration.drive === "") {
      setValid((...valid) => ({ ...valid, drive: true }));
      return;
    }
    if (userRegistration.state === "") {
      setValid((...valid) => ({ ...valid, state: true }));
      return;
    }
    if (userRegistration.pickup === "") {
      setValid((...valid) => ({ ...valid, pickup: true }));
      return;
    }
    if (userRegistration.drop === "") {
      setValid((...valid) => ({ ...valid, drop: true }));
      return;
    }
    if (userRegistration.date === "") {
      setValid((...valid) => ({ ...valid, date: true }));
      return;
    }

    axios
      .post("http://localhost:8000/api/mailsent", userRegistration)
      .then((res) => console.log("dtaa", res.data.message));
    localStorage.setItem("bookingdata", JSON.stringify(userRegistration));
    navigate("/Bookingconform");
  };
  return (
    <div className="card" style={{ margin: "7vw 4vw 7vw" , backgroundColor:"transparent"}}>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2vw",
            color: "white",
          }}
        >
          Rent A Car Online
        </h5>
        <div className="mb-2" style={{ fontSize: "17px", color: "white" }}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="name"
            value={userRegistration.name}
            onChange={handleinput}
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
            type="number"
            className="form-control"
            id="contactno"
            name="phone"
            value={userRegistration.phone}
            onChange={handleinput}
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
            id="emailaddres"
            name="email"
            value={userRegistration.email}
            onChange={handleinput}
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
            Select Car
          </label>
          <select
            type="text"
            className="form-control"
            id="selectcar"
            name="car"
            value={userRegistration.car}
            onChange={handleinput}
            aria-describedby="name"
          >
            <option> Chose your Option </option>
            <option> HatchBack</option>
            <option> Sedan</option>
            <option> SUV/MUV</option>
            <option> Primium</option>
            <option> Luxury</option>
          </select>
          {valid.car == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Choose Car Name
            </span>
          )}
          {hide.car == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Car not available
            </span>
          )}


          <label htmlFor="exampleInputEmail1" className="form-label">
            Self Drive
          </label>
          <select
            type="text"
            className="form-control"
            id="selfdrive"
            name="drive"
            value={userRegistration.drive}
            onChange={handleinput}
            aria-describedby="name"
          >
            <option> Chose your Option </option>
            <option> Yes</option>
            <option> No</option>
          </select>
          {valid.drive == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Select Driver Opestion
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Select State
          </label>
          <select
            type="text"
            className="form-control"
            name="state"
            value={userRegistration.State}
            onChange={handleinput}
          >
            <option> Chose your Option </option>
            {(data2 || []).map((u) => (
              <option value={u.state} >{u.state}
              </option>
            ))}
          </select>
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Pickup Point*
          </label>
          <input
            type="text"
            className="form-control"
            name="pickup"
            value={userRegistration.pickup}
            onChange={handleinput}
            aria-describedby="name"
            placeholder="Enter Your Pickup Point"
          />
          {valid.pickup == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Pickup Address
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Drop-Off Point*
          </label>
          <input
            type="email"
            className="form-control"
            id="emailaddres"
            name="drop"
            value={userRegistration.drop}
            onChange={handleinput}
            aria-describedby="name"
            placeholder="Enter Your Drop-off Point"
          />
          {valid.drop == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Drop-Off Address
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Choose Date
          </label>
          <input
            type="date"
            className="form-control"
            id="datepicker"
            name="date"
            value={userRegistration.date}
            onChange={handleinput}
            aria-describedby="name"
          />
          {valid.date == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter vehicle Book Date
            </span>
          )}
        </div>
        <button
          type="submit"
      className="btn btn-light text-dark"
          style={{ width: "100%", fontSize: "17px" }}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CarForm;

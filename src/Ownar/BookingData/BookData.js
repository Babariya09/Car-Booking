import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OwnerNavbar from "../Navbar/OwnerNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../Dashboard/Footer";

export default function BookData(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/Gmaildata"
      );
      setData(response);
    } catch (error) { }
    setLoading(false);

  };

  useEffect(() => {
    fetchData();
  }, []);

  let iterator = data.values();
  let array1 = []
  for (let value of iterator) {
    var car = value.car;
    console.log("car", car);
    array1.push(car)
  }

  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
  }


  var HatchBack = getOccurrence(array1, "HatchBack");
  localStorage.setItem('HatchBack', JSON.stringify(HatchBack));

  var Sedan = getOccurrence(array1, "Sedan");
  localStorage.setItem('Sedan', JSON.stringify(Sedan));

  var Suv = getOccurrence(array1, "SUV/MUV");
  localStorage.setItem('Suv', JSON.stringify(Suv));

  var Premium = getOccurrence(array1, "Primium");
  localStorage.setItem('Premium', JSON.stringify(Premium));

  var Luxury = getOccurrence(array1, "Luxury")
  localStorage.setItem('Luxury', JSON.stringify(Luxury));

  const DeleteUser = (id) => {
    axios.delete(`http://localhost:8000/api/Gdelete/${id}`);
    window.alert("Data Deleted SuccessFully");
    fetchData();

  };
  const SendDriver = (index) => {
    navigate(`/DriverDetails/${index}`);

  }
  const getCellStyle = (drive) => {
    return {
      color: drive === 'Yes' ? 'green' : 'red'
    };
  };

  const UpdateUser = (index) => {
    navigate(`/EditBookData/${index}`);
  };

  return (
    <>
      <title>Booking Data - Speedo Car Rental</title>
      <OwnerNavbar />
      <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Name</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Booking Date</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Email Address</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Phone Number</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Car Name</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Pickup Point</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Drop Point</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >State Name</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Driver Option</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Send Driver Deatils</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Edit</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.car}</TableCell>
                <TableCell align="left">{row.pickup}</TableCell>
                <TableCell align="left">{row.drop}</TableCell>
                <TableCell align="left">{row.state}</TableCell>
                <TableCell align="left" style={getCellStyle(row.drive)}>{row.drive}</TableCell>
                <TableCell align="left">
                  <button
                    style={{ width: "80px", borderRadius: "8px" }}
                    onClick={() => SendDriver(row._id)}  >
                    SEND
                  </button>
                </TableCell>
                <TableCell align="left">
                  <button
                    style={{ width: "80px", borderRadius: "8px" }}
                    onClick={() => UpdateUser(row._id)}
                  >
                    EDIT
                  </button>
                </TableCell>
                <TableCell align="left">
                  <button
                    style={{ width: "80px", borderRadius: "8px" }}
                    onClick={() => DeleteUser(row._id)}
                  >
                    DELETE
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
      <Footer />
    </>
  );
}

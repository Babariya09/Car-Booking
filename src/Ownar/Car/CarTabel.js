import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import "../../Book/Book.css";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OwnerNavbar from "../../Ownar/Navbar/OwnerNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../Dashboard/Footer";
import Button from "@mui/material/Button";

export default function BookData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/Addcardata"
      );
      setData(response);
    } catch (error) { }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const DeleteUser = (id) => {
    axios.delete(`http://localhost:8000/api/cardelete/${id}`);
    window.alert("Data Deleted SuccessFully");
    fetchData();
  };

  const UpdateUser = (index) => {
    navigate(`/Car/${index}`);
  };

  const onSubmit = () => {
    navigate("/Car")
  }

  return (
    <>
      <title>Booking Data - Speedo Car Rental</title>
      <OwnerNavbar />
      <Button
        style={{
          backgroundColor: "#23809fc2",
          marginTop: "20px",
          color: "white",
        }}
        fullWidth
        onClick={onSubmit}
      >
        ADD CAR
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Car Image</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Car Name</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Plat Number</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Car Type</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Fuel Type</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >price Per Hour</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left"><img src={row.image} alt="Car Image" style={{ width: "60px", height: "60px", borderRadius: "100%" }} /></TableCell>
                <TableCell align="left">{row.carname}</TableCell>
                <TableCell align="left">{row.carType}</TableCell>
                <TableCell align="left">{row.fuelType}</TableCell>
                <TableCell align="left">{row.pricePerHour}</TableCell>
                <TableCell align="left">{row.platnumber}</TableCell>
                <TableCell align="left">
                  <button
                    style={{ width: "80px", borderRadius: "8px", border: 0, padding: "10px 5px", background: "#84dd84", color: "#fff", marginRight: "10px" }}
                    onClick={() => UpdateUser(row._id)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ width: "80px", borderRadius: "8px", border: 0, padding: "10px 5px", background: "#ff5f5f", color: "#fff" }}
                    onClick={() => DeleteUser(row._id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OwnerNavbar from "./Navbar/OwnerNavbar";
import Footer from "../Dashboard/Footer";
import axios from "axios";

export default function ContactData() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/commentdata"
      );
      setData(response);
    } catch (error) { }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const DeleteUser = (id) => {
    axios.delete(`http://localhost:8000/api/cdelete/${id}`);
    window.alert("Data Deleted SuccessFully");
    fetchData();
  };

  return (
    <>
      <title>Contact Data - Speedo Car Rental</title>
      <OwnerNavbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, color: "red" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Name</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Email Address</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Phone Number</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }}  >Message</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left"> {row.name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.message}</TableCell>
                <TableCell align="left">
                  <button
                    style={{ width: "80px", borderRadius: "8px" }}
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

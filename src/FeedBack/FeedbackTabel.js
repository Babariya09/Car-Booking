import React, { useEffect, useState } from "react";
import "../Popular/Popular.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
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
}))

export default function FeedbackTabel() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const classes = useStyles();
  const [currentpage, setCurrentpage] = useState(0);
  const [postperpage] = useState(5);
  const postPerPage = 5;
  const indexOfLastpost = currentpage * postperpage;

  const currentposts = data.slice(
    indexOfLastpost,
    indexOfLastpost + postPerPage
  );
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    pageNumber.push(i);
  }
  const pageCount = Math.ceil(data.length / postPerPage);
  const changePage = ({ selected }) => {
    setCurrentpage(selected);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/feedbackdata"
      );
      setData(response);
      console.log("==>", response);
    } catch (error) { }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid className="bcimg">
        <Grid className={classes.colorbc}>
          <Box className={classes.us}>Customer Reviews</Box>
          <Box className={classes.we}>
            See What Our Customer Says About Us...
          </Box>
        </Grid>
        {currentposts.map((row) => (
          <Grid className="textbc">
            <Box className="text1">
              {row.message}
            </Box>
            <Box className="text2">{row.name}</Box>
          </Grid>
        ))}
        <Grid>
          <ReactPaginate
            className="page"
            previousLabel={<p className="pre">Previous</p>}
            nextLabel={<p className="pre">Next</p>}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </Grid>
      </Grid>
    </>
  );
}

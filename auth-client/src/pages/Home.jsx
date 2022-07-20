import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import "./styles.css";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Grid container spacing={2}>
        <Grid item xs={9}></Grid>

        <Grid item xs={3}>
          <span style={{paddingRight:'10%'}}>
            <Button variant="contained" color="info">
              <Link to="/register" className="links">
                Register
              </Link>
            </Button>
          </span>

          <span>
            <Button variant="contained" color="secondary">
              <Link to="/login" className="links">
                Login
              </Link>
            </Button>
          </span>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

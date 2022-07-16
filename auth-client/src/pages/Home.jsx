import React from 'react';
import { Link } from 'react-router-dom';

import {Button } from '@mui/material';

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to ="/register">Register</Link>
      <Link to ="/login">Login</Link>
    </>
  )
}

export default Home;
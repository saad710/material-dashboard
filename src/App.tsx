import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Grid } from '@mui/material';
import LeftBar from './components/LeftBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        {/* <Grid>
          <LeftBar />
        </Grid> */}
        <LeftBar/>
    </div>
  );
}

export default App;

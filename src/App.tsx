import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Grid } from '@mui/material';
import LeftBar from './components/LeftBar/LeftBar';
import Feed from './components/Feed/Feed';
import RightContent from './components/RightContent/RightContent';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} >
          <RightContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

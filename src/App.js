import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import './App.css';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (

    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
      <Navbar />
      <Profile />
    </div >
  );
}

export default App;

import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import './App.css';
import Contact from './components/Contact';
import Books from './components/Books';
import Publications from './components/Publications';
import TalksConferences from './components/TalksConferences';
import ResearchInterest from './components/ResearchInterest ';

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
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="ResearchInterest" element={<ResearchInterest />} />
        <Route path="TalksConferences" element={<TalksConferences />} />
        <Route path="Publications" element={<Publications />} />
        <Route path="Books" element={<Books />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>

    </div>

  );
}

export default App;

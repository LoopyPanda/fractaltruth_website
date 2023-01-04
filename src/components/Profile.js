import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "../style/Profile.css";
import profilepic from "../assets/Satyaphoto.jpg";
//import { Zoom } from 'react-reveal';
import Fade from 'react-reveal/Fade';
//import Me from "./Me";
import { Link } from 'react-router-dom';
//import "../components/Annimation.js";



const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'left',
    WebkitTextFillColor: '#FFFFFF',
    backgroundColor: "transparent",
    //color: theme.palette.text.secondary,
}));

const divStyle = {
    img: {
        backgroundImage: `url(${profilepic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '88%',
        height: '800px'
    }
};


const Profile = () => {

    return (


        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={8} >



                <Grid item xs={4}>
                    <Item><img src={profilepic} alt="profile" id="img" className="profilepicture" style={divStyle} /></Item>
                </Grid>

                <Grid item xs={4}>
                    <Fade bottom>
                        <Item>
                            <h3>Hello, it's me</h3>
                            <h1>Satya.</h1>
                            <p>
                                An enthusiastic engineer and a passionate physicist - I am the package that smart things come in.
                                My interests scale from solving sudoku to solving the intricate working of our Universe - ranging from the very small to the very large.
                                Like dunking a basketball, I have my eye on pushing the boundary of our knowledge about the world around us.
                            </p>
                        </Item>
                        <Item>
                            <Button component={Link} to="/Me" variant="contained" sx={{
                                backgroundColor: "#000000",
                                color: "#FFFFFF",
                                "&:hover": { backgroundColor: "#c0c0c0" }
                                //"&:disabled": { backgroundColor: "#FFFFFF" }
                            }} >
                                Click to know me better...
                            </Button>
                        </Item>

                    </Fade>
                </Grid>


            </Grid>

        </Box >

    );
};


export default Profile;

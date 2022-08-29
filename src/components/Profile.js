import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "../style/Profile.css";
import profilepic from "../assets/Satyaphoto.jpg";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'left',
    WebkitTextFillColor: '#FFFFFF',
    backgroundColor: "transparent",
    //color: theme.palette.text.secondary,
}));

const Profile = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8}>
                <Grid item xs={4}>
                    <Item><h3>Hello, it's me</h3></Item>
                    <Item><h1>Satya.</h1></Item>
                    <Item>
                        <p>
                            An enthusiastic Physicist Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.hzfdgasvcavchjvkjsnsdjvg.
                        </p>
                    </Item>
                    <Item>
                        <Button onClick={() => { alert('clicked'); }}
                        >Click to know me better...
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><img src={profilepic} alt="profile" id="img" className="profile-pic" /></Item>
                </Grid>
            </Grid>
        </Box>
    );
};


export default Profile;

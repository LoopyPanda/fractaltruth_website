import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "../style/Profile.css";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import profilepic from "../assets/Satyaphoto_2.jpg";
import { Typography } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    textAlign: 'left',
    WebkitTextFillColor: '#FFFFFF',
    backgroundColor: "transparent",
    //color: theme.palette.text.secondary,
}));

/*const styles = {
    paperContainer: {
        backgroundImage: `url(${background})`,
        backgroundrepeat: 'no-repeat',
        backgroundattachment: 'fixed',
        backgroundposition: 'center',
        backgroundsize: 'cover'
    }
};*/

const divStyle = {
    img: {
        backgroundImage: `url(${profilepic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '50vh',
        height: '50vh'
    }
};

/*<Grid item sm={6} xs={12}>
<Item><img src={background} alt="profile" id="img" className="profilepicture" style={divStyle} /></Item>
</Grid>

<Paper style={styles.paperContainer}>
</Paper>

*/
const Profile = () => {

    return (

        <Box>
            <Item>

                <Grid container sm={12} xs={12} style={{ height: "auto" }} >

                    <Grid container sm={6} xs={12} >
                        <Grid container style={{ padding: "5%" }}>
                            <Grid item sm={8} xs={12}>
                                <img src={profilepic} alt="profile" id="img" className="profilepicture" style={divStyle} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container sm={6} xs={12}  >
                        <Grid container style={{ padding: "10%" }} >
                            <Grid item sm={12} xs={12} >
                                <Fade bottom>
                                    <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
                                        Hello, it's me
                                    </Typography>

                                    <Typography sx={{ typography: { sm: 'h2', xs: 'h4' } }}>
                                        Satya.
                                    </Typography>

                                    <Typography align="justify" sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                                        An enthusiastic engineer and a passionate physicist - I am the package that smart things come in.
                                        My interests scale from solving sudoku to solving the intricate working of our Universe - ranging from the very small to the very large.
                                        Like dunking a basketball, I have my eye on pushing the boundary of our knowledge about the world around us.
                                    </Typography>

                                    <Grid>
                                        <Button component={Link} to="/Me" variant="outlined" sx={{
                                            backgroundColor: "#000000",
                                            color: "#FFFFFF",
                                            borderColor: '#FFFFFF',
                                            border: "1px white solid",
                                            "&:hover": { backgroundColor: "#c0c0c0", borderColor: '#FFFFFF' },
                                            typography: { sm: 'body1', xs: 'OVERLINE TEXT' }
                                        }}  >
                                            Click to know me better...
                                        </Button>
                                    </Grid>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Item>
        </Box >

    );
};


export default Profile;

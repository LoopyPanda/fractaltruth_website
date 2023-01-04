import React from "react";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const TalksConferences = () => {
    return (
        <Box>

            <Typography align="left" variant="h4" padding={5} margin={1} gutterBottom>
                Talks
            </Typography>

            <Typography align="left" variant="body1" padding={5} margin={1}  >
                <List aria-labelledby="basic-list-demo">
                    <ListItem>(2017) Towards a Hartle-Hawking state for loop quantum gravity, University of Erlangen-Nuremberg, Germany</ListItem>
                    <ListItem>(2016) Gamma ray excess from galactic centre, University of Erlangen-Nuremberg, Germany </ListItem>
                    <ListItem>(2010) Quantum computers, Mar Athanasius College of Engineering, India </ListItem>
                </List>
            </Typography>

            <Typography align="left" variant="h4" padding={5} margin={1} gutterBottom>
                Conferences
            </Typography>

            <Typography align="left" variant="body1" padding={5} margin={1}>
                <List aria-labelledby="basic-list-demo">
                    <ListItem>(2016) Shapes of Gravity conference, Radboud University, Netherlands </ListItem>
                    <ListItem>(2015) Loops conference, University of Erlangen-Nuremberg, Germany </ListItem>
                    <ListItem>(2010) International Congress of Mathematicians, India </ListItem>
                </List>
            </Typography>
        </Box>
    )
};

export default TalksConferences;
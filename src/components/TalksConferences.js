import React from "react";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({

    WebkitTextFillColor: '#FFFFFF',
    backgroundColor: "transparent",
}));

const TalksConferences = () => {
    return (
        <Box>
            <Item>
                <Typography align="left" variant="h4" padding={5} margin={1} gutterBottom>
                    Talks
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>(2017) Towards a Hartle-Hawking state for loop quantum gravity, University of Erlangen-Nuremberg, Germany</ListItem>
                        <ListItem>(2016) Gamma ray excess from galactic centre, University of Erlangen-Nuremberg, Germany </ListItem>
                        <ListItem>(2010) Quantum computers, Mar Athanasius College of Engineering, India </ListItem>
                    </List>
                </Typography>

                <Typography align="left" variant="h4" padding={5} margin={1} gutterBottom>
                    Conferences
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>(2016) Shapes of Gravity conference, Radboud University, Netherlands </ListItem>
                        <ListItem>(2015) Loops conference, University of Erlangen-Nuremberg, Germany </ListItem>
                        <ListItem>(2010) International Congress of Mathematicians, India </ListItem>
                    </List>
                </Typography>

            </Item>
        </Box>
    )
};

export default TalksConferences;
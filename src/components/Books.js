import React from "react";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({

    WebkitTextFillColor: '#FFFFFF',
    backgroundColor: "transparent",
}));


const Books = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 0, m: 0 }}>
            <Item>

                <Typography align="justify" padding={5} margin={1} sx={{ typography: { sm: 'body1', xs: 'body2' } }}>
                    These are (obviously) not the books that I have written. Among the multitude of books that exist on each topic, the below mentioned ones are those that I had a chance to read and gain knowledge from. Some I have used them as university textbooks, while some I have only referred to for further conceptual clarity. I believe the list can also be taken as an advice for anyone out these who wishes to learn Physics.
                </Typography>


                <Typography align="left" variant="h5" padding={5} margin={1} gutterBottom>
                    Popular science:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1. "A Brief History of Time" by Stephen Hawking</ListItem>
                        <ListItem>2. "The Elegant Universe" by Brian Greene</ListItem>
                        <ListItem>3. "The Trouble with Physics" by Lee Smolin</ListItem>
                        <ListItem>4. "The Life of the Cosmos" by Lee Smolin</ListItem>
                        <ListItem>5. "The Road to Reality" by Roger Penrose</ListItem>
                        <ListItem>6. "Dark Matter and the Dinosaurs" by Lisa Randall</ListItem>
                    </List>

                    Elementary Physics:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1. "Fundamentals of Physics" by Halliday, Resnick, Walker</ListItem>
                        <ListItem>2. "Fundamentals of Physics, Vol. I & II" by R. Shankar</ListItem>
                    </List>

                    Advanced Mathematics:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1. "Mathematical Methods in the Physical Sciences" by Mary L. Boas</ListItem>
                        <ListItem>2. "Mathematics for Physicists" by Stone & Goldbart</ListItem>
                    </List>

                    Classical Mechanics:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1. "Classical Mechanics" by Kibble & Berkshire</ListItem>
                        <ListItem>2. "Classical Mechanics" by Goldstein</ListItem>
                    </List>

                    Statistical Mechanics:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1.  "Concepts in Thermal Physics" by Blundell & Blundell</ListItem>
                        <ListItem>2. "Statistical Mechanics: Entropy, Order Parameters and Complexity" by James Sethna </ListItem>
                    </List>

                    Electrodynamics:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1.  "Electricity & Magnetism" by Purcell & Morin</ListItem>
                        <ListItem>2.  "Classical Electromagnetism" by Jerrold Franklin</ListItem>
                    </List>

                    Quantum Mechanics:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1. "Introduction to Quantum Mechanics" by D. J. Griffiths</ListItem>
                        <ListItem>2."Principles of Quantum Mechanics" by R. Shankar</ListItem>
                        <ListItem>3. "Modern Quantum Mechanics" by Sakurai & Napolitano</ListItem>
                    </List>

                    General Relativity:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1.  "Spacetime & Geometry" by Sean Carroll</ListItem>
                        <ListItem>2. "General Relativity" by Robert Wald </ListItem>
                    </List>

                    Quantum Field Theory:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1. "Quantum Field Theory for the Gifted Amateur" by Lancaster & Blundell</ListItem>
                        <ListItem>2."Quantum Field Theory in a Nutshell" by A. Zee</ListItem>
                    </List>

                    Astrophysics:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1.  "Astrophysics for Physicists" by Arnab Rai Choudhuri </ListItem>
                    </List>

                    Cosmology:
                    <List sx={{ typography: { sm: 'body1', xs: 'body2' } }} >
                        <ListItem>1.  "Modern Cosmology" by Dodelson & Schmidt </ListItem>
                    </List>
                </Typography>
            </Item>
        </Box >

    )
};



export default Books;
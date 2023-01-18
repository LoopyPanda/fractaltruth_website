import React from "react";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({

    WebkitTextFillColor: '#FFFFFF',
    backgroundColor: "transparent",
}));

const ResearchInterest = () => {
    return (
        <Box>
            <Item>
                <Typography align="left" variant="h4" padding={5} margin={1} gutterBottom>
                    Research Interests
                </Typography>

                <Typography align="justify" variant="body1" padding={5} margin={1}>

                    I believe that a physicist, or any scientist for that matter, will at some point in their research career need to, if necessary, step out of the comfort zone and look for solutions to a problem in any place possible. Keeping this spirt in my heart and mind, my research interests are rather broad. From among those, I am most interested in:
                    <br /> <br />
                    1) Cosmology and Galaxy evolution<br />
                    2) Blackholes and Active Galactic Nuclei<br />
                    3) Non-linear Dynamics<br />
                    <br /> <br />
                    These interests are not just for theoretical study. I am also interested in their experimental, phenomenological and observational aspects.

                </Typography>
            </Item>
        </Box>
    )
};

export default ResearchInterest;
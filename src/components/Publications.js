import React from "react";
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';



const Publications = () => {
    return (
        <Box>
            <Typography align="left" variant="h4" padding={5} margin={1} gutterBottom>
                Publications
            </Typography>

            <Typography align="justify" variant="body1" padding={5} margin={1}>
                1) "S. Dhandhukiya and H. Sahlmann, “Towards Hartle-Hawking states for connection variables”, Phys. Rev. D 95, 084047 (2017) [arXiv:1608.07971[gr-qc]]"
            </Typography>


            <Button component={Link} to="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.95.084047" variant="contained" startIcon={<OpenInNewIcon />} sx={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#c0c0c0" },
                //"&:disabled": { backgroundColor: "#FFFFFF" }
            }} >

                To The Publication
            </Button>


        </Box>
    )
};

export default Publications;
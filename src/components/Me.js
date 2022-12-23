import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import { makeStyles } from "@material-ui/core/styles";


/*const useStyles = makeStyles(theme => ({
    aboutme: {
        display: "flex",
        justifyContent: "center",
    }
}));      className={classes.aboutme}*/

export default function aboutme() {
    //const classes = useStyles();

    return (

        <Box>

            <Typography variant="h4" gutterBottom>
                About me
            </Typography>
            <div>
                <Typography gutterBottom>
                    Hailing from a developing country like India, wherein technology and related engineering fields dominate the education sector, giving pure sciences a setback; I opted for a safer and conventional option to go for the former, as a choice of my career. Given the situation, I enrolled for an undergrad degree in electrical engineering, but with the selfassurance that that was only a stepping-stone to my higher dreams of learning physics.
                    Following this, I moved to the U.S to pursue my graduate degree in physics. Being driven by the question 'how small can small be', I wanted to deepen my knowledge and finally get my hands dirty in research. Taking advise from one of the leading professors in the field of quantum gravity, I moved to Germany to pursue my further degree in theoretical physics.
                    We are at a stage where research in physics has never been more exciting. With growing need to answer some of the mysteries like dark matter and dark energy, new technologies like AI/Machine-Learning are entering the field of astronomy and cosmology. Like an electron that has infinite paths to pick from, Universe got in my way and indicated that it has a different travelling route for me.
                    Considering these aspects, I joined the FinTech industry with a target to acquire new skills in information technology. Over the past 5+ years, I have gathered some key skills in IT, ranging from programming to data analysis to data engineering. These skills are becoming more and more bread & butter for researchers in astronomy, cosmology and particle physics. That being the case, I believe that if skills can be transferred from Physics to IT, my acquired IT skills can definitely be transferred back.
                </Typography>
            </div>

        </Box >
    )
};

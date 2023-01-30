import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({


    textAlign: 'justify',
    WebkitTextFillColor: '#FFFFFF',
    backgroundColor: "transparent",
    //color: theme.palette.text.secondary,
}));

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vpagsc4', 'template_43h01te', e.target, 'sVFsVOWaXkngC_E-t')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 8 }} columns={{ xs: 4 }}>
                <Grid item sm={6}>
                    {Array.from(Array(1)).map((_, index) => (
                        <Grid item xs={6} key={index}>
                            <Typography align="justify" variant="body1" padding={5} margin={1}>
                                <Item>Interested in reaching out to me?<br />
                                    Then feel free to drop me a message and<br /> I will get back to you the soonest !!!
                                </Item>
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                <Grid item sm={6} >
                    <div className="container">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row pt-5 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <label>Name : </label><input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <label>Email : </label><input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <label>Subject : </label><input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <label>Message : </label><textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};
/*This code is useful for Node emailer 
const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus({
            email: "",
            name: "",
            message: "",
        });
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};

export default Contact;*/
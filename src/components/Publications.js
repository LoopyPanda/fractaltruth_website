import React from "react";
import Button from '@mui/material/Button';

const Publications = () => {
    return (
        <div className="App">
            <h1>April 2017</h1>

            <p>"S. Dhandhukiya and H. Sahlmann, “Towards Hartle-Hawking states for con- nection variables”, Phys. Rev. D 95, 084047 (2017) [arXiv:1608.07971[gr-qc]]" </p>

            <Button href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.95.084047">
                To The Publication
            </Button>
        </div>
    )
};

export default Publications;
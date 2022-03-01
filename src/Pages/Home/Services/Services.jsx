import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";

const services = [
    {
        name: "Flouride tretment",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis reiciendis assumenda quisquam corrupti inventore. Aliquam excepturi autem sapiente aspernatur.",
        img: 'https://i.ibb.co/CQCKYqD/fluoride.png',
    },
    {
        name: "Cavity Mining",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis reiciendis assumenda quisquam corrupti inventore. Aliquam excepturi autem sapiente aspernatur.",
        img: "https://i.ibb.co/wwNXbdc/cavity.png",
    },
    {
        name: "Whiting treethment",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis reiciendis assumenda quisquam corrupti inventore. Aliquam excepturi autem sapiente aspernatur.",
        img: "https://i.ibb.co/th9fZMM/whitening.png",
    },
];

const Services = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {
                        services.map((service) => (
                            <Service
                                key={service.name}
                                service={service}
                            ></Service>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;

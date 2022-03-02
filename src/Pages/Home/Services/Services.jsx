import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
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
            <Box sx={{ marginTop: 8 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, letterSpacing: 0.5, marginBottom: 3, color: 'primary.main' }} component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 500 }} component="div">
                    Services We Provide
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: 10 }}>
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

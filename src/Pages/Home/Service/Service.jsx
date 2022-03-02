import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <>
            <Grid xs={2} sm={4} md={4} >
                <Card sx={{ minWidth: 275, boxShadow: 0, textAlign: 'center' }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            style={{ width: '100px', height: 'auto', margin: '0 auto' }}
                            image={img}
                            alt="fluodira "
                        />
                        <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 2 }} component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color='text.secondary'>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export default Service;

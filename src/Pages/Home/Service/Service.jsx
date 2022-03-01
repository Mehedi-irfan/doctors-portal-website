import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <>
            <Grid xs={2} sm={4} md={4} >
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            style={{ width: '50%', height: 'auto', margin: '0 auto' }}
                            image={img}
                            alt="fluodira "
                        />
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export default Service;

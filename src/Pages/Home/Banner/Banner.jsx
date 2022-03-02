import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bannerBg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBackround = {
    background: `url(${bannerBg})`
}

const verticalSize = {
    display: 'flex',
    height: '400px',
    alignItems: 'center',
    textAlign: 'left'
}

const Banner = () => {
    return (
        <Box style={bannerBackround} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6} style={verticalSize} >
                        <Box>
                            <Typography variant='h4' style={{ fontWeight: 600 }}>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant='h6' style={{ fontSize: 14, color: 'gray', fontWeight: 300 }} sx={{ my: 3 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates fugiat expedita assumenda deleniti quo! Fugit corrupti corporis ad et.
                            </Typography>
                            <Button variant='contained'>
                                GET APPOINTMENT
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={6} style={verticalSize}>
                        <img src={chair} style={{ width: '500px' }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
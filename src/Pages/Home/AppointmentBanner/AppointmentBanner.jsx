import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctorImg from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: '150px',
    backgroundColor: 'rgba(53, 50, 97, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '500px', marginTop: '-130px' }} src={doctorImg} alt="" />
                </Grid>
                <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='h5' style={{ color: '#1CCED4', fontWeight: 600, letterSpacing: 0.8 }}>
                            Appointment
                        </Typography>
                        <Typography variant='h3' style={{ color: 'white', fontWeight: 500 }} sx={{ my: 4 }}>
                            Make a Appointment Today
                        </Typography>
                        <Typography variant='h6' style={{ fontSize: 14, color: 'white', fontWeight: 300 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum molestias et voluptates modi voluptas ratione vero quod laboriosam rem necessitatibus!
                        </Typography>
                        <Button variant='contained' sx={{ mt: 4 }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
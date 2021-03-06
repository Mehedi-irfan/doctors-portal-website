import React from 'react';
import Navigation from '../../../Sheard/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <Services />
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;
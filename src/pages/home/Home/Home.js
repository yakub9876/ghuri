import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Fact from '../Fact/Fact';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Fact></Fact>
            <Destinations></Destinations>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;
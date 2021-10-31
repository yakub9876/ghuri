import React from 'react';
import banner from '../../../images/banner/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" srcset="" />
            <div className="hero-text">
                <h1>Enjoy the tour with ghuri</h1>
                <p>We provide travelers with an authentic Jordanian experience that they
                    can remember for the rest of their lives</p>
                <button className="btn button-primary">Book Your Tour</button>
            </div>
        </div>
    );
};

export default Banner;
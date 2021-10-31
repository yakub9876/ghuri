import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../../images/destinations/1.png'
import img2 from '../../../images/destinations/2.png'
import img3 from '../../../images/destinations/3.png'
import img4 from '../../../images/destinations/4.png'
import img5 from '../../../images/destinations/5.png'
import img6 from '../../../images/destinations/6.png'
import img7 from '../../../images/destinations/7.png'
import img8 from '../../../images/destinations/8.png'
import './Destinations.css'

const Destinations = () => {
    return (
        <div>
            <Container>
                 <h2>this is Destinations</h2>
                <div className="destinations">
                    <img src={img1} alt="" srcset="" />
                    <img src={img2} alt="" srcset="" />
                    <img src={img3} alt="" srcset="" />
                    <img src={img4} alt="" srcset="" />
                    <img src={img5} alt="" srcset="" />
                    <img src={img6} alt="" srcset="" />
                    <img src={img7} alt="" srcset="" />
                    <img src={img8} alt="" srcset="" />
                </div>
           </Container>
        </div>
    );
};

export default Destinations;
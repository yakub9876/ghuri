import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Container>
                 <h2>this is services page</h2>
            <div className="services">
                {
                services.map(service => <Service service={service}></Service>)
            }
            </div>
           </Container>
        </div>
    );
};

export default Services;
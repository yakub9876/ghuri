import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://ghuri-serversite.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-area">
      <Container>
        <h2>Find amazing things to do.Anytime, anywhere.</h2>
        <div className="services">
          {services.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;

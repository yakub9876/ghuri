import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import "./Details.css";
import useAuth from "../../../hooks/useAuth";

const Details = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetch("https://ghuri-serversite.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    const findService = services.find((service) => service._id === id);
    setService(findService);
  }, [services]);

  const onSubmit = (data) => {
    const booking = data;
    booking.serviceId = id;
    booking.service = service;
    booking.status = "pending";
    console.log(booking);
    axios
      .post("https://ghuri-serversite.herokuapp.com/booking", booking)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Booking");
          history.push("/myorders");
          reset();
        } else {
          alert("Already Booked");
          history.push("/home");
        }
        console.log(res);
      });
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="details">
              <h3>{service?.title}</h3>
              <img src={service?.image} alt="" />
              <h3 className="mt-4">Overview</h3>
              <p>{service?.detailsDesciption}</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex align-items-center justify-content-center">
              <div className="add-information">
                <h3>Fill up this for booking trip</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                  <input
                    {...register("email", { required: true })}
                    placeholder="Email Address"
                    defaultValue={user?.email}
                    readOnly
                  />
                  <input
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Your Phone"
                  />
                  <textarea
                    {...register("note", { required: true })}
                    placeholder="Notes"
                  />
                  <button type="submit">Confirm Booking</button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;

import React, { useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "./SingleOrder.css";

const SingleOrder = (props) => {
  const [status, setStatus] = useState("");
  const { service, _id } = props.order;

  const handleStaus = (id) => {
    axios
      .put(`https://ghuri-serversite.herokuapp.com/booking/status/${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setStatus("Approved");
        }
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <div className="single-order">
            <img src={service.image} alt="" srcset="" />
            <div className="order-info">
              <h4>{service?.title}</h4>
              {(props.order.status === "Approved" && (
                <h5> {props.order.status}</h5>
              )) || (
                <button onClick={() => handleStaus(_id)}>
                  {status || "panding"}
                </button>
              )}
            </div>
            <button
              onClick={() => props.handleDelete(_id)}
              className="btn button-delete"
            >
              Delete
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SingleOrder;

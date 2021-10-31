import React from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "./SingleOrder.css";

const SingleOrder = (props) => {
  const { service, status, _id } = props.order;

  return (
    <div>
      <Container>
        <Row>
          <div className="single-order">
            <img src={service.image} alt="" srcset="" />
            <div className="order-info">
              <h4>{service?.title}</h4>
              <p>{status}</p>
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

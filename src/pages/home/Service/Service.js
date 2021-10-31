import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { _id, title, sortDescription, image, price } = props.service;
  return (
    <div className="single-service">
      <div className="content">
        <img src={image} className="w-100 mb-4" alt="" />
        <h4>{title}</h4>
        <p>{sortDescription.slice(0, 100)}</p>
        <div className="action d-flex justify-content-between align-items-center">
          <Link to={`/serviceDetails/${_id}`}>
            <button className="button-secondary btn">Book Now</button>
          </Link>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

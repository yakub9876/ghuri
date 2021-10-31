import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Addservices.css";

const Addservices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
      console.log(res);
    });
    reset();
  };
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center">
        <div className="add-service">
          <h2>Please Add a Service</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("title", { required: true })}
              placeholder="Service name"
            />
            <textarea
              {...register("sortDescription", { required: true })}
              placeholder="Sort Description"
            />
            <textarea
              {...register("detailsDesciption", { required: true })}
              placeholder="Write About your Service details"
            />
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="price"
            />
            <input
              {...register("image", { required: true })}
              placeholder="Enter image URL"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Addservices;

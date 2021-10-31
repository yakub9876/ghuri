import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Container } from "react-bootstrap";
import SingleOrder from "../myOrder/singleOrder/SingleOrder";

const ManageOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/myorder`).then((res) => {
      setOrders(res.data);
    });
  }, [user]);
  console.log(orders);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/myorderdelete/${id}`).then((res) => {
      const newOrder = orders.filter((order) => order._id !== id);
      setOrders(newOrder);
      console.log(res);
    });
  };

  return (
    <div>
      <Container>
        <h2>this is my orders</h2>
        {orders.map((order) => (
          <SingleOrder
            key={order?._id}
            order={order}
            handleDelete={handleDelete}
          ></SingleOrder>
        ))}
      </Container>
    </div>
  );
};

export default ManageOrders;

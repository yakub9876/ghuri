import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import SingleOrder from "./singleOrder/SingleOrder";
import { Container } from "react-bootstrap";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ghuri-serversite.herokuapp.com/myorder/${user?.email}`)
      .then((res) => {
        setOrders(res.data);
      });
  }, [user]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure Want to Delete?");
    if (confirm) {
      axios
        .delete(`https://ghuri-serversite.herokuapp.com/myorderdelete/${id}`)
        .then((res) => {
          const newOrder = orders.filter((order) => order._id !== id);
          setOrders(newOrder);
          console.log(res);
        });
    }
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

export default MyOrder;

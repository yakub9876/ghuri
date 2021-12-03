import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { Container } from "react-bootstrap";
import SingleOrder from "../myOrder/singleOrder/SingleOrder";

const ManageOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`https://ghuri-serversite.herokuapp.com/myorder`).then((res) => {
      setOrders(res.data);
    });
  }, [user]);
  console.log(orders);
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
    <div className="text-center mt-3 mb-3">
      <Container>
        <h2>Manage Orders</h2>
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

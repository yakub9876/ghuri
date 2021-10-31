import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <Container>
        <Link to="/home">
          <button className="btn button-primary">Go Home Page</button>
        </Link>
        <img
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
          alt=""
          srcset=""
        />
      </Container>
    </div>
  );
};

export default PageNotFound;

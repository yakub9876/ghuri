import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useAuth();
  console.log(user);
  const activeStyle = {
    fontWeight: "bold",
    color: "#C6A349",
  };
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="nav-link">
              <NavLink activeStyle={activeStyle} to="/home">
                Home
              </NavLink>
              <NavLink activeStyle={activeStyle} to="/services">
                Services
              </NavLink>
              <NavLink activeStyle={activeStyle} to="/aboutus">
                About Us
              </NavLink>
            </Nav>
            {/*profile Dropdown */}

            {user.email && (
              <span
                className="mx-3 d-flex align-items-center font-weight-bold"
                style={{ color: "black" }}
              >
                Hello {user.displayName}{" "}
              </span>
            )}

            {user.email ? (
              <Dropdown>
                <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                  <img src={user.photoURL} alt="" srcset="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    {" "}
                    <Link to="/myorders">My Orders</Link>{" "}
                  </Dropdown.Item>
                  <Dropdown.Item>
                    {" "}
                    <Link to="/manageorders">Manage Orders</Link>{" "}
                  </Dropdown.Item>
                  <Dropdown.Item>
                    {" "}
                    <Link to="/addservices">Add services</Link>{" "}
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <button className="btn button-secondary " onClick={logOut}>
                      log out
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/login">
                <button className="btn button-secondary ">Login</button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

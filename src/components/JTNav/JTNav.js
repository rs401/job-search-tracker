import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const JTNav = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Link to="/">Home</Link>

      <Link to="/newapp">Add Application</Link>

      <Link to="/">Home</Link>
    </Nav>
  );
};

export default JTNav;

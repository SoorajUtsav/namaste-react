import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">🍔 Foodie Delight</h1>
        <nav className="nav">
          <span className="nav-link">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </span>
          <span href="#menu" className="nav-link">
            Cart
          </span>
          <span className="nav-link">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>
          </span>
          <span href="#contact" className="nav-link">
            Contact
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ textColor }) => {
  return (
    <div className="container grid">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link className="tooltip" to="/" data-tooltip="Home">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link className="tooltip" to="/hotel" data-tooltip="Hotel">
            Hotel
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link
            className={`tooltip ${textColor}`}
            to="/"
            data-tooltip="Search result:"
          >
            Tokyo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;

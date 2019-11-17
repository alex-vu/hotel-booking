import React from "react";
import "./Card.css";

const Card = ({ url }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={url} alt="" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h4 className="card-subtitle">Tokyo, Prefecture</h4>
          <h3 className="card-title">Kamakura Hotel</h3>
        </div>
        <div className="card-footer">
          <div>Details</div>
          <div className="arrow-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

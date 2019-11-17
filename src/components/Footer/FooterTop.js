import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="container grid">
      <div className="footer-top">
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <h3 className="footer-header">Site</h3>
          </li>
          <li className="footer-nav-item">
            <Link to="/">Countries</Link>
          </li>
          <li className="footer-nav-item">
            <Link to="/">Hotels</Link>
          </li>
          <li className="footer-nav-item">
            <Link to="/">Places of Interest</Link>
          </li>
        </ul>
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <h3 className="footer-header">Accomodations</h3>
          </li>
          <li className="footer-nav-item">
            <Link to="/">Homes</Link>
          </li>
          <li className="footer-nav-item">
            <Link to="/">Apartment</Link>
          </li>
        </ul>
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <h3 className="footer-header">Destinations</h3>
          </li>
          <li className="footer-nav-item">
            <Link to="/">Places to Visit</Link>
          </li>
        </ul>
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <h3 className="footer-header">Company</h3>
          </li>
          <li className="footer-nav-item">
            <Link to="/">About</Link>
          </li>
          <li className="footer-nav-item">
            <Link to="/">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;

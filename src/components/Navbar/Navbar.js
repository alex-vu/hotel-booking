import React from "react";
import Logo from "../Logo/Logo";
import Flag from "../Flag/Flag";
import { IoMdMenu, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {
    isOpen: false,
    country: "ca"
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <header className="header">
        <div className="container grid">
          <nav className="navbar">
            <section className="navbar-center">
              <Link to="/" className="navbar-brand mr-2">
                <Logo />
              </Link>
            </section>
            <section className="navbar-center hide-on-large ml50">
              <Link to="/" className="btn btn-link">
                Accomodations
              </Link>
              <Link to="/hotel" className="btn btn-link">
                Book a Hotel
              </Link>
              {/* <Link to="/hotel" className="btn btn-link">
                Book a Trip
              </Link>
              <Link to="/hotel" className="btn btn-link">
                Offers
              </Link> */}
            </section>
            <section className="navbar-section secondary-nav hide-on-large">
              <Link to="/" className="btn btn-link">
                Sign in
              </Link>
              <Link to="/" className="btn btn-link active">
                My Bookings
                <IoIosArrowDown className="icon-text" />
              </Link>
              <Link to="/" className="btn btn-link">
                <Flag country={this.state.country} />
              </Link>
            </section>
            <button
              className="btn btn-primary input-group-btn nav-btn"
              onClick={this.handleToggle}
            >
              <IoMdMenu />
            </button>
          </nav>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Accomodations</Link>
            </li>
            <li>
              <Link to="/hotel">Hotel</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;

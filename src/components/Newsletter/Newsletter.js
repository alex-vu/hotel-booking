import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./Newsletter.css";

class Newsletter extends React.Component {
  state = {};
  render() {
    return (
      <section className="newsletter">
        <div className="container grid">
          <div className="newsletter-content">
            <h3 className="text-light">Save time, save money!</h3>
            <p className="text-gray">
              Sign up and we'll send the best deals to you
            </p>
          </div>
          <div className="form-group">
            <label className="form-inline vertical-top">
              <input
                className="form-input"
                type="text"
                placeholder="Your email"
              />
            </label>
            <label className="form-inline vertical-top">
              <ButtonPrimary
                text="Subscribe"
                btnClass="form-input input-search"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-checkbox d-inline-block">
              <input type="checkbox" />
              <i className="form-icon"></i>
              <span className="text-gray">
                Send me a link to get the FREE Booking.com app!
              </span>
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;

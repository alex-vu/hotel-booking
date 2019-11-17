import React from "react";
import Carousel from "../Carousel/Carousel";
import "./Destinations.css";

class Destinations extends React.Component {
  state = {};
  render() {
    return (
      <section className="destinations">
        <div className="container grid">
          <div className="section-title text-center">
            <h4 className="">Explore</h4>
            <h2>Our Hotel Deals</h2>
          </div>
          {this.props.children}
          <Carousel />
        </div>
      </section>
    );
  }
}

export default Destinations;

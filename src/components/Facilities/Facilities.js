import React from "react";
import ImageFile from "../../ImageFile";
import "./Facilities.css";
import { Link } from "react-router-dom";

const Facilities = () => {
  const { destinations } = ImageFile;
  return (
    <section className="facilities">
      <div className="container grid">
        <div className="section-title text-center">
          <h4 className="">Explore</h4>
          <h2>Our Destinations</h2>
        </div>
        <div className="columns mosaic">
          <div className="column col-4">
            <Link to="/" className="gradient">
              <div
                style={{
                  background: `#00aad2 url(${destinations[0]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                className="image"
              ></div>
              <div className="text">
                <h3>Kagoshima</h3>
              </div>
            </Link>
          </div>
          <div className="column col-4">
            <Link to="/" className="gradient">
              <div
                style={{
                  background: `#00aad2 url(${destinations[1]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                className="image"
              ></div>
              <div className="text">
                <h3>Kyoto</h3>
              </div>
            </Link>
          </div>
          <div className="column col-4">
            <Link to="/" className="gradient">
              <div
                style={{
                  background: `#00aad2 url(${destinations[2]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                className="image"
              ></div>
              <div className="text">
                <h3>San Torini</h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="columns mosaic">
          <div className="column col-4">
            <Link to="/" className="gradient">
              <div
                style={{
                  background: `#00aad2 url(${destinations[3]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                className="image"
              ></div>
              <div className="text">
                <h3>Hakone</h3>
              </div>
            </Link>
          </div>
          <div className="column col-4">
            <Link to="/" className="gradient">
              <div
                style={{
                  background: `#00aad2 url(${destinations[4]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                className="image"
              ></div>
              <div className="text">
                <h3>Jamaica</h3>
              </div>
            </Link>
          </div>
          <div className="column col-4">
            <Link to="/" className="gradient">
              <div
                style={{
                  background: `#00aad2 url(${destinations[5]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                className="image"
              ></div>
              <div className="text">
                <h3>Iceland</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;

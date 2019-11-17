import React from "react";
import { Link } from "react-router-dom";
import InputLabel from "../../components/InputLabel/InputLabel";
import Dog from "./dog.svg";
import FooterBottom from "../../components/Footer/FooterBottom";
import "./Page404.css";

const Page404 = () => {
  return (
    <div>
      <div className="page404">
        <div className="container grid">
          <div className="flex-center flex-col">
            <div className="page404-image">
              <img src={Dog} alt="" />
            </div>
            <div className="form-group">
              <h1 className="text-dark">Opps! Page not found!</h1>
              <InputLabel labelClass="form-inline vertical-top flex-center mt50">
                <Link
                  to="/"
                  className="form-input input-search primary-link text-center"
                >
                  Return Home
                </Link>
              </InputLabel>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Page404;

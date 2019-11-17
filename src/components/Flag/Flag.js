import React from "react";
import ReactCountryFlag from "react-country-flag";
import { IoIosArrowDown } from "react-icons/io";
import "./Flag.css";

const Flag = ({ country }) => {
  return (
    <div className="flag">
      <ReactCountryFlag
        styleProps={{
          width: "25px",
          height: "25px",
          verticalAlign: "top",
          paddingRight: "5px"
        }}
        code={country}
      />
      <ReactCountryFlag
        styleProps={{
          width: "25px",
          height: "25px",
          verticalAlign: "top"
        }}
        code={country}
        svg
      />
      <IoIosArrowDown className="icon-text" />
    </div>
  );
};

export default Flag;

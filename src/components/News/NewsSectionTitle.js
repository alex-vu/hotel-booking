import React from "react";
import { IoIosAdd } from "react-icons/io";

const NewsSectionTitle = ({ text }) => {
  return (
    <div className="news-section-title">
      <h2>{text}</h2>
      <IoIosAdd />
    </div>
  );
};

export default NewsSectionTitle;

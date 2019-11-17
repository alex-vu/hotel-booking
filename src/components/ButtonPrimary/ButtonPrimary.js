import React from "react";

const ButtonPrimary = ({ btnClass, text }) => {
  return <input className={btnClass} type="submit" value={text} />;
};

export default ButtonPrimary;

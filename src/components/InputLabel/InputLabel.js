import React from "react";

const InputLabel = ({ children, labelClass }) => {
  return <label className={labelClass}>{children}</label>;
};

export default InputLabel;

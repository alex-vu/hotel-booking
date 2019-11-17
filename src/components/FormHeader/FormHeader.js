import React from "react";

const FormHeader = ({ textColor }) => {
  return (
    <div className="form-header">
      <h3 className={textColor}>Where to next, Alex?</h3>
      <p className="text-gray">
        Find exclusive Genius rewards in every corner of the world!
      </p>
    </div>
  );
};

FormHeader.defaultProps = {
  textColor: "text-light"
};

export default FormHeader;

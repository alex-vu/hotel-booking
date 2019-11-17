import React from "react";

const getCurrentYear = () => {
  let date = new Date();
  return date.getFullYear();
};

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container grid">
        <p className="copyright">{`Copyright © ${getCurrentYear()} Booking.com™. All rights reserved`}</p>
      </div>
    </div>
  );
};

export default FooterBottom;

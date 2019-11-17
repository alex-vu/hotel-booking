import React from "react";
import ImageFile from "../../ImageFile";

const NewsHighlight = () => {
  return (
    <div className="news-hightlight">
      <div className="news-hightlight-wrap columns">
        <div className="column col-5 col-md-6 col-sm-12 col-xs-12 hightlight-image">
          <img src={ImageFile.facilities[6]} alt="" />
        </div>
        <div className="column col-6 col-sm-12 col-xs-12 highlight-content">
          <h3 className="hightlight-title">
            Get Inspiration for your next trip!
          </h3>
          <p className="hightlight-text">
            Featuring a balcony with river views, and a garden and a terrace,
            Kyoto river side modern House can be found in Kyoto, close to
            Kiyomizu-dera Temple and 2.1 km from Tofuku-ji Temple.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHighlight;

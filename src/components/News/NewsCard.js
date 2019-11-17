import React from "react";
import ImageFile from "../../ImageFile";

const NewsCard = () => {
  return (
    <div className="news-card">
      <div className="card">
        <div className="card-image">
          <img
            src={ImageFile.facilities[1]}
            alt=""
            className="img-responsive"
          />
        </div>
        <div className="card-header">
          <div className="card-title h5">Hotel Vischio Kyoto by GRANVIA</div>
          <div className="card-subtitle text-gray">Minami Ward</div>
        </div>
        <div className="card-body">
          ituated in Kyoto, 1.8 km from Sanjusangen-do Temple, Hotel Vischio
          Kyoto by GRANVIA features air-conditioned accommodation and a fitness
          centre.
        </div>
        <div className="card-footer">
          <a className="btn" href="/">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

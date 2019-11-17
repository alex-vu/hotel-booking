import React from "react";
import ImageFile from "../../ImageFile";
import { Link } from "react-router-dom";

const HotelItem = ({ item }) => {
  const { fields } = item;
  const { url } = item.fields.images[0].fields.file;
  // console.log("item", item);
  return (
    <div className="hotel-item shelf-container">
      <div className="hotel-image-wrapper">
        <Link
          to={{
            pathname: `/hotel/${item.sys.id}`,
            state: { item }
          }}
        >
          <div className="hotel-card-image ratio-16x9">
            <div
              className="hotel-image"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          </div>
        </Link>
      </div>
      <div className="hotel-content-wrapper">
        <div className="hotel-card-header">
          <div className="hcHeader-main">
            <span className="hcHeader-category">{fields.type}</span>
            <h3 className="hcHeader-title">
              <Link
                to={{
                  pathname: `/hotel/${item.sys.id}`,
                  state: { item }
                }}
              >
                {fields.name}
              </Link>
            </h3>
          </div>
          <div className="hcHeader-review">
            <div className="review-group">
              <p className="review-text">Fabulous</p>
              <p className="review-count">433 reviews</p>
            </div>
            <div className="review-score">8.8</div>
          </div>
        </div>
        <div className="hotel-card-body">Price per night {fields.price}$</div>
      </div>
    </div>
  );
};

export default HotelItem;

import React from "react";
import "./FilterTab.css";

const FilterTab = () => {
  return (
    <div>
      <div className="filter">
        <input
          type="radio"
          id="tag-0"
          className="filter-tag"
          name="filter-radio"
          hidden
          checked
        />
        <input
          type="radio"
          id="tag-1"
          className="filter-tag"
          name="filter-radio"
          hidden
        />
        <input
          type="radio"
          id="tag-2"
          className="filter-tag"
          name="filter-radio"
          hidden
        />

        <div className="filter-nav">
          <label className="chip active-tab" htmlFor="tag-0">
            Our top picks
          </label>
          <label className="chip" htmlFor="tag-1">
            Price
          </label>
          <label className="chip" htmlFor="tag-2">
            Rating
          </label>
          <label className="chip" htmlFor="tag-3">
            Activity
          </label>
        </div>

        <div className="filter-body">
          <div className="filter-item card" data-tag="tag-1">
            1
          </div>
          <div className="filter-item card" data-tag="tag-2">
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTab;

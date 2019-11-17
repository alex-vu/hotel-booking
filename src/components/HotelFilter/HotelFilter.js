import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./HotelFilter.css";
import InputLabel from "../InputLabel/InputLabel";
import { IoIosOptions } from "react-icons/io";
import datas from "../../data";

class HotelFilter extends React.Component {
  state = {
    value: { min: 455, max: 1987 },
    isOpen: true
  };

  handleCheckbox = e => {
    if (e.target.checked) {
      // console.log(e.target.value);
      this.props.handleCheckedValue(e.target.value);
    }
  };

  showFilter = e => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    let className = this.state.isOpen ? "show-filter" : "hide-filter";

    return (
      <React.Fragment>
        <button className="ui-button btn-filter mb30" onClick={this.showFilter}>
          <span>Filter</span>
          <IoIosOptions />
        </button>

        <section className={`main-filter shelf-container mb30 ${className}`}>
          <h2 className="h5">Filter by:</h2>
          <div className="divider"></div>
          <div className="form-group group-range">
            <h3 className="filter-block-title">Price per night</h3>
            <InputLabel labelClass="filter-block filter-range">
              <InputRange
                formatLabel={value => `C$${value}`}
                maxValue={2500}
                minValue={0}
                value={this.state.value}
                onChange={value => this.setState({ value })}
              />
            </InputLabel>
          </div>

          <div className="divider"></div>

          <div className="form-group">
            <h3 className="filter-block-title">Star rating</h3>
            <InputLabel labelClass="filter-block form-checkbox">
              <input type="checkbox" />
              <i className="form-icon"></i> 1 star
            </InputLabel>

            <InputLabel labelClass="filter-block form-checkbox">
              <input type="checkbox" />
              <i className="form-icon"></i> 2 stars
            </InputLabel>

            <InputLabel labelClass="filter-block form-checkbox">
              <input type="checkbox" />
              <i className="form-icon"></i> 3 stars
            </InputLabel>

            <InputLabel labelClass="filter-block form-checkbox">
              <input type="checkbox" />
              <i className="form-icon"></i> 4 stars
            </InputLabel>

            <InputLabel labelClass="filter-block form-checkbox">
              <input type="checkbox" />
              <i className="form-icon"></i> 5 stars
            </InputLabel>
          </div>

          <div className="divider"></div>

          <div className="form-group">
            <h3 className="filter-block-title">Room type</h3>
            <InputLabel labelClass="filter-block form-checkbox">
              <input
                type="checkbox"
                value="single"
                onChange={e => this.handleCheckbox(e)}
              />
              <i className="form-icon"></i> Single
            </InputLabel>

            <InputLabel labelClass="filter-block form-checkbox">
              <input
                type="checkbox"
                value="double"
                onChange={e => this.handleCheckbox(e)}
              />
              <i className="form-icon"></i> Double
            </InputLabel>

            <InputLabel labelClass="filter-block form-checkbox">
              <input
                type="checkbox"
                value="family"
                onChange={e => this.handleCheckbox(e)}
              />
              <i className="form-icon"></i> Family
            </InputLabel>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HotelFilter;

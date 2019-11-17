import React from "react";
import "./HotelList.css";
import HotelItem from "./HotelItem";

class HotelList extends React.Component {
  renderList() {
    return this.props.datas.map((item, index) => {
      return (
        <li key={item.sys.id} className="column col-12">
          <HotelItem item={item} />
        </li>
      );
    });
  }

  render() {
    return <ul className="hotel-list columns">{this.renderList()}</ul>;
  }
}

export default HotelList;

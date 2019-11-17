import React from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

class Tab extends React.Component {
  state = {
    selected: this.props.selected || 0
  };

  handleSelect = (index, e) => {
    e.preventDefault();
    this.setState({
      selected: index
    });
  };

  renderCategory = () => {
    return this.props.children.map((category, index) => {
      let selectedClass = index === this.state.selected ? "selected" : "";
      return (
        <li className={`panel ${selectedClass}`} key={index}>
          <Link onClick={e => this.handleSelect(index, e)} to="/">
            {category}
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul className="sort-tab">{this.renderCategory()}</ul>
        <div className="sort-content">
          {this.props.children[this.state.selected]}
        </div>
      </div>
    );
  }
}

export default Tab;

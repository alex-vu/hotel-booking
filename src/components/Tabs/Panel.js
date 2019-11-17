import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Panel extends React.Component {
  static propTypes = {
    activePanel: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = e => {
    e.preventDefault();
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activePanel, label }
    } = this;

    let className = "c-panel";

    if (activePanel === label) {
      className += " selected";
    }

    return (
      <li className={className}>
        <Link to="/" onClick={e => onClick(e)}>
          {label}
        </Link>
      </li>
    );
  }
}

export default Panel;

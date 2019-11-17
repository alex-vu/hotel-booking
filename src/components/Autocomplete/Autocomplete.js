import React from "react";
import "./Autocomplete.css";

const handleClick = e => {
  e.preventDefault();
  console.log(e.currentTarget.value);
};

const renderSuggestions = filteredSuggestions => {
  return filteredSuggestions.map((suggestion, index) => {
    return (
      <li className="menu-item">
        <a href="/" onClick={handleClick}>
          <div className="tile tile-centered">
            <div className="tile-icon">...</div>
            <div className="tile-content">{suggestion}</div>
          </div>
        </a>
      </li>
    );
  });
};

const Autocomplete = ({ filteredSuggestions, inputSearch }) => {
  return (
    <React.Fragment>
      {filteredSuggestions.length > 0 && inputSearch.length > 0 ? (
        <ul className="menu">{renderSuggestions(filteredSuggestions)}</ul>
      ) : null}
    </React.Fragment>
  );
};

export default Autocomplete;

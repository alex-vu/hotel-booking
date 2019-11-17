import React from "react";
import PropTypes from "prop-types";

import "./MainForm.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import InputLabel from "../InputLabel/InputLabel";
import InputCalendar from "../InputCalendar/InputCalendar";
import InputGuest from "../InputGuest/InputGuest";

import { IoMdPin, IoIosCalendar, IoMdPerson } from "react-icons/io";

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    inputSearch: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  onSearchChange = e => {
    const { suggestions } = this.props;
    const inputSearch = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(inputSearch.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: filteredSuggestions,
      showSuggestions: true,
      inputSearch: e.currentTarget.value
    });
  };

  onSearchClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      inputSearch: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    const active = document.activeElement;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        inputSearch: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38 && active.previousSibling) {
      if (activeSuggestion === 0) {
        active.previousSibling.focus();
        // return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40 && active.nextSibling) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        active.nextSibling.focus();
        // return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      handleSubmit,
      onSearchChange,
      onSearchClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        inputSearch
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && inputSearch) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions menu scroll-content">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              } else {
                className = "";
              }

              return (
                <li
                  className={`${className} menu-item`}
                  key={suggestion}
                  onClick={onSearchClick}
                >
                  <IoMdPin />
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <ul className="menu">
            <li className="menu-item">No results</li>
          </ul>
        );
      }
    }

    return (
      <div className="secondary-form">
        <form onSubmit={handleSubmit} className="form-wrap">
          <div className="form-group">
            {/* Search */}
            <InputLabel labelClass="form-inline vertical-top p-relative">
              <IoMdPin />
              <input
                onChange={onSearchChange}
                onKeyDown={onKeyDown}
                value={inputSearch}
                className="form-input input-pad"
                type="text"
                placeholder="Location"
              />
              {suggestionsListComponent}
            </InputLabel>

            {/* Calendar */}
            <InputLabel labelClass="form-inline vertical-top p-relative">
              <IoIosCalendar />
              <InputCalendar inputClass="input-pad" />
            </InputLabel>

            {/* Guest */}
            <InputLabel labelClass="form-inline vertical-top p-relative">
              <IoMdPerson />
              <InputGuest inputClass="input-pad" />
            </InputLabel>

            {/* Submit */}
            <InputLabel labelClass="form-inline vertical-top">
              <ButtonPrimary
                text="Search"
                btnClass="form-input input-search br0"
              />
            </InputLabel>
          </div>
        </form>
      </div>
    );
  }
}

export default MainForm;

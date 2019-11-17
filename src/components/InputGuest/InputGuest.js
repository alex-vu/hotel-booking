import React from "react";

class InputGuest extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className={`search-guests form-input ${this.props.inputClass}`}>
          <div>
            <span>1 adult</span> · <span>0 children</span> · <span>1 room</span>
          </div>
        </div>
        <div className="search-guests-wrap"></div>
      </React.Fragment>
    );
  }
}

export default InputGuest;

import React from "react";

class InputCalendar extends React.Component {
  state = {};
  render() {
    return (
      <input className={`form-input ${this.props.inputClass}`} type="date" />
    );
  }
}

export default InputCalendar;

import React from "react";
import "./GoTop.css";
import { Link } from "react-router-dom";

class GoTop extends React.Component {
  state = {
    intervalId: 0
  };

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollTop = () => {
    let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };

  render() {
    return (
      <section className="go-top">
        <div className="container grid">
          <div className="flex-center">
            <Link
              to="/"
              className="text-uppercase"
              onClick={event => {
                event.preventDefault();
                this.scrollTop();
              }}
            >
              Page Top
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default GoTop;

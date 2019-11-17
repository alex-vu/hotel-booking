import React from "react";
import Panel from "./Panel";
import PropTypes from "prop-types";
import "./Tabs.css";

class Tab extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  state = {
    activePanel: this.props.children[0].props.label
  };

  onClickPanelItem = panel => {
    this.setState({ activePanel: panel });
  };

  render() {
    const {
      onClickPanelItem,
      props: { children },
      state: { activePanel }
    } = this;

    return (
      <div className="tabs">
        <ul className="panel-list">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Panel
                activePanel={activePanel}
                key={label}
                label={label}
                onClick={onClickPanelItem}
              />
            );
          })}
        </ul>
        <div className="panel-content">
          {children.map(child => {
            if (child.props.label !== activePanel) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tab;

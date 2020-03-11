import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addClicked}>Add a step</button>
        <button onClick={this.props.resetClicked}>Reset steps</button>
      </div>
    );
  }
}

Buttons.propTypes = {};

export default Buttons;

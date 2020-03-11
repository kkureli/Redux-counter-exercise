import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/buttons/Buttons";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>You've walked {this.props.cntr} steps today!</h1>
        <Buttons
          addClicked={this.props.onAddedStep}
          resetClicked={this.props.onResetStep}
        ></Buttons>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cntr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedStep: () => {
      dispatch({ type: actionTypes.ADD_STEP });
    },
    onResetStep: () => {
      dispatch({ type: actionTypes.RESET_STEPS });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

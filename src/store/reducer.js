/* eslint-disable default-case */
import * as actionTypes from "./actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_STEP:
      return {
        counter: state.counter + 1
      };

    case actionTypes.RESET_STEPS:
      return {
        counter: 0
      };
  }
  return state;
};

export default reducer;

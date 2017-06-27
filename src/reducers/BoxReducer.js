import {
  SET_BOX_VALUES,
  SET_BOX_TITLES
} from '../actions/types';

const INITIAL_STATE = {
  boxValues: {
    c1Value: 222,
    c2R1Value: 5000,
    c2R2Value: 85
  }
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_BOX_VALUES:
        return { ...state, boxValues: action.payload };
      case SET_BOX_TITLES:
          return { ...state, boxTitles: action.payload };
      default:
        return state;
    }
};

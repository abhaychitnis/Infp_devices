import { CURR_CONTEXT } from '../actions/types';

const INITIAL_STATE = {
  currentLayout: 'LayoutOne',
  currentContext: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CURR_CONTEXT:
        return {
                ...state,
                currentLayout: action.payload.layout,
                currentContext: action.payload.context };
      default:
        return state;
    }
};

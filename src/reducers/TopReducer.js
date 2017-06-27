const INITIAL_STATE = {
  currentLayout: 'LayoutOne',
  currentContext: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'not_relevant':
        console.log(action);
        return {
                ...state,
                currentLayout: action.payload.layout,
                currentContext: action.payload.context };
      default:
        return state;
    }
};

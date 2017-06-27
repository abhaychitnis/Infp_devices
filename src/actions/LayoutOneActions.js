import { CURR_CONTEXT } from './types';

export const setContext = ({ layout, context }) => {
  return (dispatch) => {
    dispatch({ type: CURR_CONTEXT, payload: { layout, context } });
  };
};

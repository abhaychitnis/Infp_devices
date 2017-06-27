import {
  SET_BOX_VALUES,
  SET_BOX_TITLES
} from './types';

export const nextBoxValues = (boxValues) => {
  return (dispatch) => {
    dispatch({ type: SET_BOX_VALUES, payload: boxValues });
  };
};
export const setBoxTitles = (boxTitles) => {
  return { type: SET_BOX_TITLES, payload: boxTitles };
};

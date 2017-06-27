import { combineReducers } from 'redux';
import BoxReducer from './BoxReducer';
//import TopReducer from './TopReducer';
import LayoutOneReducer from './LayoutOneReducer';


export default combineReducers({
  box: BoxReducer,
  lone: LayoutOneReducer
});

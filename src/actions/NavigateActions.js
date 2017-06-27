import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  NAVIGATE_TO_SCREEN
} from './types';

export const emailChanged = (text) => {
  return {
    type: NAVIGATE_TO_SCREEN,
    payload: text
  };
};

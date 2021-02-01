import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import palindromeReducer from './palindromeReducer';

export default combineReducers({
  palindromeReducer,
  visibilityFilter
});

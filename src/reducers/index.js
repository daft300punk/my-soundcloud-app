import { combineReducers } from 'redux';
import trackList from './trackList';
import currentPlaying from './player';

export default combineReducers({
  trackList,
  currentPlaying,
});

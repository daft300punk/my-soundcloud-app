import { combineReducers } from 'redux';
import trackList from './trackList.js';
import currentPlaying from './currentPlaying';
import playerList from './playerList'

export default combineReducers({
  trackList,
  currentPlaying,
  playerList,
});

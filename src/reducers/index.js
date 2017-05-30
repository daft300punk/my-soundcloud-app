import { combineReducers } from 'redux';
import trackList from './TrackList.js';
import currentPlaying from './currentPlaying';
import playerList from './playerList';
import playlist from './playlist';

export default combineReducers({
  trackList,
  currentPlaying,
  playerList,
  playlist
});

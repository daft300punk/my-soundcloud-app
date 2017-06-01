import { combineReducers } from 'redux';
import trackList from './TrackList.js';
import currentPlaying from './currentPlaying';
import playerList from './playerList';
import playlist from './playlist';
import category from './category';

export default combineReducers({
  trackList,
  currentPlaying,
  playerList,
  playlist,
  category
});

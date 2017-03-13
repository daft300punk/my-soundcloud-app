import { combineReducers } from 'redux';
import trackList from './TrackList';
import currentPlaying from './CurrentPlaying';

export default combineReducers({
  trackList,
  currentPlaying,
});



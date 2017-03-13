import * as actionTypes from '../constants/ActionTypes';
import { playTrack } from '../api/playerControls';

//Action Creators
const requestTrackPlayAC = (streamUrl) => ({
  type: actionTypes.REQUEST_TRACK_PLAY,
  streamUrl: streamUrl,
});

const trackPlayStartAC = () => ({
  type: actionTypes.TRACK_PLAY_START,
});

//Dispatch
export const trackPlayStartDispatch = (pos) => (dispatch, getState) => {
  const state = getState();
  console.log(state);
  let streamUrl = state.trackList.items[pos].stream_url;
  dispatch(requestTrackPlayAC(streamUrl));
  playTrack(streamUrl)
  .then(() => dispatch(trackPlayStartAC))
  .then("Update UI")
  .catch(err => console.log(err));
}

// const requestTrackPauseAC = () => ({
//   type: actionTypes.REQUEST_TRACK_PAUSE,
// });

// const trackPausedAC = () => ({
//   type: action.types.TRACK_PAUSED,
// });
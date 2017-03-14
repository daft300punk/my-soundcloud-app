import * as actionTypes from '../constants/ActionTypes';
import { playControls } from '../api/playerControls';

//Action Creators
const requestTrackPlayAC = (streamUrl, playingTrackId, player) => ({
  type: actionTypes.REQUEST_TRACK_PLAY,
  streamUrl: streamUrl,
  playingTrackId: playingTrackId,
  player: player,
});

const trackPlayStartAC = (player) => ({
  type: actionTypes.TRACK_PLAY_START,
  player: player
});

//Dispatch
export const trackPlayStartDispatch = (pos) => (dispatch, getState) => {
  const state = getState();
  const player = state.currentPlaying.player
  if( player != null && pos === state.currentPlaying.playingTrackId) {
    player.play();
    dispatch(trackPlayStartAC(player));
    return;
  }
  let streamUrl = state.trackList.items[pos].streamUrl;
  dispatch(requestTrackPlayAC(streamUrl, pos));
  playControls(streamUrl)
  .then((player) => { player.play(); return player; })
  .then((player) => dispatch(trackPlayStartAC(player)))
  .catch(err => console.log(err));
}

//Action Creators
const trackPausedAC = () => ({
  type: actionTypes.TRACK_PAUSED,
});

//Dispatch
export const trackPauseDispatch = () => (dispatch, getState) => {
  const state = getState();
  const player = state.currentPlaying.player;
  player.pause();
  dispatch(trackPausedAC());  
}
import * as actionTypes from '../constants/ActionTypes';
import { getPlayer } from '../api/getPlayer';

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
  const player = state.currentPlaying.player;
  if (player != null && pos === state.currentPlaying.playingTrackId) {
    //If the track is paused, don't reinitialize player, just play.
    player.play();
    dispatch(trackPlayStartAC(player));
    return;
  }

  //If the track is played for first time, or a new track is played.
  let streamUrl = state.trackList.items[pos].streamUrl;
  dispatch(requestTrackPlayAC(streamUrl, pos));
  getPlayer(streamUrl)
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
  if (player != null) {
    player.pause();
    dispatch(trackPausedAC());
  }
}
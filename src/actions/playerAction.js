import * as actionTypes from '../constants/ActionTypes';
import { getPlayer } from '../api/getPlayer';
import SC from 'soundcloud';
import initializeSC from '../api/initializeSC';

//Action Creators
const requestGetPlayerAC = (streamUrl, positionOfClickedTrack) => ({
  type: actionTypes.REQUEST_GET_PLAYER,
  streamUrl: streamUrl,
  id: positionOfClickedTrack
});

const receivePlayerAC = (player, pos) => ({
  type: actionTypes.RECEIVE_PLAYER,
  player: player,
  pos
});

const trackStartPlayingAC = () => ({
  type: actionTypes.TRACK_START_PLAYING,
});

const trackFinishedPlayingAC = () => ({
  type: actionTypes.TRACK_FINISHED_PLAYING
})

const trackPauseAC = () => ({
  type: actionTypes.TRACK_PAUSE
})

//Dispatch
export const trackPlayStartDispatch = (positionOfClickedTrack) => (dispatch, getState) => {

  let currentPlayer = getState().currentPlaying.player;
  const currentPlayingPos = getState().currentPlaying.playingTrackId;
  if(currentPlayer != null && positionOfClickedTrack === currentPlayingPos) {
    currentPlayer.play();
    return;
  }

  //If the track is played for first time, or a new track is played.
  const streamUrl = getState().trackList.items[positionOfClickedTrack].streamUrl;
  dispatch(requestGetPlayerAC(streamUrl, positionOfClickedTrack));
  SC.initialize({client_id: 'MmZKx4l7fDwXdlL3KJZBiJZ8fLonINga'});
  SC.stream(streamUrl)
  .then((player) => {
    if(player.options.protocols[0] === 'rtmp') 
      player.options.protocols.splice(0, 1);
    player._registerPlays = false;
    return player;
  })
  .then((player) => {
    dispatch(receivePlayerAC(player, positionOfClickedTrack));
    let statePlayer = getState().currentPlaying.player;
    statePlayer.on("play", () => dispatch(trackStartPlayingAC()));
    statePlayer.on("finish", () => dispatch(trackFinishedPlayingAC()));
    statePlayer.play();
  });
}

export const trackPauseDispatch = () => (dispatch, getState) => {
  let currentPlayer = getState().currentPlaying.player;
  if(currentPlayer != null) 
    currentPlayer.pause();
    dispatch(trackPauseAC());
}
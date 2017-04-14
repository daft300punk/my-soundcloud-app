import * as actionTypes from '../constants/ActionTypes';
import { getPlayer } from '../api/getPlayer';

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

const trackStartPlayingAC = (pos = null) => ({
  type: actionTypes.TRACK_START_PLAYING,
  pos: pos
});

const trackFinishedPlayingAC = () => ({
  type: actionTypes.TRACK_FINISHED_PLAYING
})

const trackPauseAC = () => ({
  type: actionTypes.TRACK_PAUSE
})

//Dispatch
export const trackPlayStartDispatch = (positionOfClickedTrack) => (dispatch, getState) => {
  const player = getState().playerList.players[positionOfClickedTrack];
  const currentPlaying = getState().currentPlaying.playingTrackId;
  console.log("-------", positionOfClickedTrack, player, currentPlaying);
  if(player) {
    if(positionOfClickedTrack === getState().currentPlaying.playingTrackId) {
      player.play();
      dispatch(trackStartPlayingAC());
      return;
    }
    player.seek(0);
    player.play();
    dispatch(trackStartPlayingAC(positionOfClickedTrack));
    return;
  }

  //If the track is played for first time, or a new track is played.
  const streamUrl = getState().trackList.items[positionOfClickedTrack].streamUrl;
  dispatch(requestGetPlayerAC(streamUrl, positionOfClickedTrack));
  getPlayer(streamUrl)
  .then((player) => {
    player.addEventListener("ended", () => dispatch(trackFinishedPlayingAC()));
    dispatch(receivePlayerAC(player, positionOfClickedTrack));
    player.play();
    dispatch(trackStartPlayingAC());
  });
}

export const trackPauseDispatch = () => (dispatch, getState) => {
  const pos = getState().currentPlaying.playingTrackId;
  const player = getState().playerList.players[pos];
  player.pause();
  dispatch(trackPauseAC());
}
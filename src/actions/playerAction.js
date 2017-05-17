//@flow
import * as actionTypes from '../constants/ActionTypes';
import { getPlayer } from '../api/getPlayer';
import type { Action, Dispatch, ThunkAction, PromiseAction, GetState } from './flowType';

type Player = {
  duration: number,
  currentTime: number,
  play: Function,
  pause: Function
}

//Action Creators
const requestGetPlayerAC = (
  streamUrl: string,
  positionOfClickedTrack: number
): Action => ({
  type: actionTypes.REQUEST_GET_PLAYER,
  streamUrl: streamUrl,
  id: positionOfClickedTrack
});

const receivePlayerAC = (
  player: Player,
  pos: number
): Action => ({
  type: actionTypes.RECEIVE_PLAYER,
  player: player,
  pos: pos,
  currentTimeInSec: 0,
  endTimeInSec: Math.floor(player.duration)
});

const trackStartPlayingAC = (
  pos: ?number = null,
  currentTimeInSec
): Action => ({
  type: actionTypes.TRACK_START_PLAYING,
  pos: pos,
  currentTimeInSec: Math.floor(currentTimeInSec),
});

const trackFinishedPlayingAC = (): Action => ({
  type: actionTypes.TRACK_FINISHED_PLAYING
});

const trackPauseAC = (): Action => ({
  type: actionTypes.TRACK_PAUSE
});

const updateCurrentTimeAC = (
  currentTimeInSec: number
): Action => ({
  type: actionTypes.UPDATE_CURRENT_TIME,
  currentTimeInSec: Math.floor(currentTimeInSec)
});

// TODO: refactor this later
var timer;
const setTimer = (dispatch: Dispatch, player: Player) => {
  timer = setInterval((): void => {
    dispatch(updateCurrentTimeAC(player.currentTime));
  }, 1000);
}

//Dispatch

export const trackPauseDispatch = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState
) => {
  const pos: number = getState().currentPlaying.playingTrackId;
  const player: Player = getState().playerList.players[pos];
  if(player) {
    player.pause();
    clearInterval(timer);
    dispatch(trackPauseAC());
  }
}

export const trackPlayStartDispatch = (
  positionOfClickedTrack: number
): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState
) => {
  dispatch(trackPauseDispatch());

  const player: Player = getState().playerList.players[positionOfClickedTrack],
    currentPlaying: number = getState().currentPlaying.playingTrackId;

  if(player) {
    var currentTimeInSec = player.currentTime;
    if(positionOfClickedTrack === getState().currentPlaying.playingTrackId) {
      player.play();
      dispatch(trackStartPlayingAC(null, player.currentTime));
      setTimer(dispatch, player);
      return;
    }
    player.currentTime = 0;
    player.play();
    dispatch(trackStartPlayingAC(positionOfClickedTrack, 0));
    setTimer(dispatch, player);
    return;
  }

  //If the track is played for first time, or a new track is played.
  const streamUrl: string = getState().trackList.items[positionOfClickedTrack].streamUrl;
  dispatch(requestGetPlayerAC(streamUrl, positionOfClickedTrack));
  getPlayer(streamUrl)
  .then((player) => {
    dispatch(receivePlayerAC(player, positionOfClickedTrack));
    player.addEventListener("ended", () => {
      dispatch(trackFinishedPlayingAC());
      clearInterval(timer);
    });
    player.play();
    dispatch(trackStartPlayingAC(null, 0));
    setTimer(dispatch, player);
  });
}

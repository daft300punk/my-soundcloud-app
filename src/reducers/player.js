import * as actionTypes from '../constants/ActionTypes';
import { playStates } from '../constants/PlayState';

let initialState = {
  playState: playStates.NOT_PLAYING,
  streamUrl: null,
  playingTrackId: null,
  player: null,
}

export default function currentPlaying(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_GET_PLAYER:
      return Object.assign({}, state, {
        playState: playStates.NOT_PLAYING,
        streamUrl: action.streamUrl,
        playingTrackId: action.id,
        player: null
      });
    case actionTypes.RECEIVE_PLAYER:
      return Object.assign({}, state, {
        player: action.player,
      });
    case actionTypes.TRACK_START_PLAYING:
      return Object.assign({}, state, {
        playState: playStates.PLAYING,
      });
    case actionTypes.TRACK_PAUSE:
      return Object.assign({}, state, {
        playState: playStates.PAUSED
      });
    case actionTypes.TRACK_FINISHED_PLAYING:
      return Object.assign({}, state, {
        playState: playStates.NOT_PLAYING,
        player: null,
        playingTrackId: null,
        streamUrl: null,
      });
    default:
      return state;
  }
}
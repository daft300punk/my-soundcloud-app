//@flow
import * as actionTypes from '../constants/ActionTypes';
import { playStates } from '../constants/PlayState';

type currentPlayingState = {
  playState: string,
  streamUrl: ?string,
  playingTrackId: ?number,
  currentTimeInSec: ?number,
  endTimeInSec: ?number
}

type currentPlayingAction = {
  type: string,
  playState: ?string,
  streamUrl: ?string,
  id: ?number,
  currentTimeInSec: ?number,
  endTimeInSec: ?number,
  pos: ?number
}

let initialState: currentPlayingState = {
  playState: playStates.NOT_PLAYING,
  streamUrl: null,
  playingTrackId: null,
  currentTimeInSec: null,
  endTimeInSec: null,
}

export default function currentPlaying(
  state: currentPlayingState = initialState,
  action: currentPlayingAction): currentPlayingState {
  switch (action.type) {
    case actionTypes.REQUEST_GET_PLAYER:
      return Object.assign({}, state, {
        playState: playStates.NOT_PLAYING,
        streamUrl: action.streamUrl,
        playingTrackId: action.id,
      });
    case actionTypes.RECEIVE_PLAYER:
      return Object.assign({}, state, {
        currentTimeInSec: action.currentTimeInSec,
        endTimeInSec: action.endTimeInSec
      });
    case actionTypes.TRACK_START_PLAYING:
      const playingTrackId: ?number = action.pos !== null ? action.pos : state.playingTrackId;
      return Object.assign({}, state, {
        playState: playStates.PLAYING,
        playingTrackId: playingTrackId,
        currentTimeInSec: action.currentTimeInSec,
      });
    case actionTypes.TRACK_PAUSE:
      return Object.assign({}, state, {
        playState: playStates.PAUSED
      });
    case actionTypes.TRACK_FINISHED_PLAYING:
      return Object.assign({}, state, {
        playState: playStates.NOT_PLAYING,
        playingTrackId: null,
        streamUrl: null,
      });
    case  actionTypes.UPDATE_CURRENT_TIME:
      return Object.assign({}, state, {
        currentTimeInSec: action.currentTimeInSec
      });
    default:
      return state;
  }
}

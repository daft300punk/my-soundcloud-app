import * as actionTypes from '../constants/ActionTypes';
import { playStates } from '../constants/PlayState';

let initialState = {
  playState: playStates.NOT_PLAYING,
  stream_url: ''
}

export default function currentPlaying(state = initialState, action) {
  switch(action.type) {
    case actionTypes.REQUEST_TRACK_PLAY:
      return Object.assign({}, state, {
        playState: playStates.NOT_PLAYING,
        streamUrl: action.stream_url,
      });
    case actionTypes.TRACK_PLAY_START:
      return Object.assign({}, state, {
        playState: playStates.PLAYING,
      });
    default:
      return state;
  }
}
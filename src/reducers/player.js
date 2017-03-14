import * as actionTypes from '../constants/ActionTypes';
import { playStates } from '../constants/PlayState';

let initialState = {
  playState: playStates.NOT_PLAYING,
  streamUrl: '',
  playingTrackId: null,
  player: null,
}

export default function currentPlaying(state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_TRACK_PLAY:
      return Object.assign({}, state, {
        playState: playStates.NOT_PLAYING,
        streamUrl: action.streamUrl,
        playingTrackId: action.playingTrackId,
      });
    case actionTypes.TRACK_PLAY_START:
      return Object.assign({}, state, {
        playState: playStates.PLAYING,
        player: action.player,
      });
    case actionTypes.TRACK_PAUSED:
      return Object.assign({}, state, {
        playState: playStates.PAUSED
      })
    default:
      return state;
  }
}
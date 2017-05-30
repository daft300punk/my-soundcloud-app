//@flow
import * as actionTypes from '../constants/ActionTypes';
import type { Action } from '../actions/flowType';

type playlistState = Array<number>;

var initialState: playlistState = [];

export default function playlist(
  state: playlistState = initialState,
  action: Action
): playlistState {
  switch (action.type) {
    case actionTypes.ADD_TO_PLAYLIST:
      return [
        ...state,
        action.id
      ];
    default:
      return state;
  }
}
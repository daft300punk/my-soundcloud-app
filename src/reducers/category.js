//@flow
import * as actionTypes from '../constants/ActionTypes';
import type { Action } from '../actions/flowType';

type categoryState = {
  trackType: 'music' | 'audio',
  kind: 'top' | 'trending',
  genre: 'all-music'
};

var initialState: categoryState = {
  trackType: 'music',
  kind: 'top',
  genre: 'all-music'
};

export default function category(
  state: categoryState = initialState,
  action: Action
): categoryState {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return Object.assign({}, state, {
        trackType: action.trackType,
        kind: action.kind,
        genre: action.genre
      });
    default:
      return state;
  }
}
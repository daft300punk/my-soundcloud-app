//@flow
import * as actionTypes from '../constants/ActionTypes';

type trackListState = {
  isFetching: boolean,
  items: Array<any>,
}

type trackListAction = {
  type: string,
  trackList: ?Array<any>
}

var initialState: trackListState = {
  isFetching: false,
  items: []
}

export default function trackList(
  state: trackListState = initialState,
  action: trackListAction
): trackListState {
  switch (action.type) {
    case actionTypes.REQUEST_TRACKLIST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case actionTypes.RECEIVE_TRACKLIST:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.trackList,
      });
    default:
      return state;
  }
}
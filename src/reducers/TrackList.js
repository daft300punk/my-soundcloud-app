import * as actionTypes from '../constants/ActionTypes';

export default function trackList(state = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type) {
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
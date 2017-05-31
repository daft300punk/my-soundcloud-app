import * as actionTypes from '../constants/ActionTypes';

export const requestTrackList = () => ({
  type: actionTypes.REQUEST_TRACKLIST,
});

export const receiveTrackList = trackList => ({
  type: actionTypes.RECEIVE_TRACKLIST,
  trackList: trackList,
});

const fetchTop50Tracks =  () => dispatch => {
  dispatch(requestTrackList());
  return fetch('./tracks')
    .then(res => {
      return res.json();
    })
    .then(
    trackList => {
      dispatch(receiveTrackList(trackList));
    });
};

export default fetchTop50Tracks;
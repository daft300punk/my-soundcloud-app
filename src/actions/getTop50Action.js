import * as actionTypes from '../constants/ActionTypes';
import getTop50 from '../api/api-v2';

export const requestTrackList = () => ({
  type: actionTypes.REQUEST_TRACKLIST,
});

export const receiveTrackList = trackList => ({
  type: actionTypes.RECEIVE_TRACKLIST,
  trackList: trackList,
});

const fetchTop50Tracks =  () => dispatch => {
  dispatch(requestTrackList());
  return getTop50().then(
    trackList => {
      dispatch(receiveTrackList(trackList));
    }
  );
};

export default fetchTop50Tracks;
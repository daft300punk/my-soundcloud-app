import * as actionTypes from '../constants/ActionTypes';
import getTop50 from '../api/api-v2';

const requestTrackList = () => ({
  type: actionTypes.REQUEST_TRACKLIST,
})

const receiveTrackList = trackList => ({
  type: actionTypes.RECEIVE_TRACKLIST,
  trackList: trackList,
});

const fetchTrackList =  () => dispatch => {
  dispatch(requestTrackList());
  return getTop50().then(
    response => {
      dispatch(receiveTrackList(response));
    }
  );
};

export default fetchTrackList;
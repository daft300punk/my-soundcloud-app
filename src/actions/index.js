import * as actionTypes from '../constants/ActionTypes';
import getTrackListApi from '../api/getTrackList';

const requestTrackList = () => ({
  type: actionTypes.REQUEST_TRACKLIST,
})

const receiveTrackList = trackList => ({
  type: actionTypes.RECEIVE_TRACKLIST,
  trackList: trackList,
});

const fetchTrackList =  () => dispatch => {
  dispatch(requestTrackList());
  return getTrackListApi().then(
    response => {
      dispatch(receiveTrackList(response));
    }
  );
};

export default fetchTrackList;
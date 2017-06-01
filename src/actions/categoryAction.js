import * as actionTypes from '../constants/ActionTypes';
import fetchTop50Tracks from './getTop50Action';

export const category = (kind, genre, trackType) => ({
  type: actionTypes.CHANGE_CATEGORY,
  kind: kind,
  genre: genre,
  trackType: trackType
});

const changeCategory = (kind, genre, trackType) => (dispatch) => {
  dispatch(category(kind, genre, trackType));
  dispatch(fetchTop50Tracks(kind, genre));
};

export default changeCategory;

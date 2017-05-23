import * as actionTypes from '../../src/constants/ActionTypes';
import expect from 'expect';
import reducer from '../../src/reducers/TrackList';

describe('Tracklist reducer', () => {
  const initialState = {
    isFetching: false,
    items: []
  };

  const mockItems = [
    {streamUrl:"stream.com/1", artworkUrl: "artworkurl.com/1", title: "song1"},
    {streamUrl:"stream.com/2", artworkUrl: "artworkurl.com/2", title: "song2"}
  ];

  it('should create initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle action REQUEST_TRACKLIST', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.REQUEST_TRACKLIST,
        isFetching: true,
      })
    ).toEqual({
      isFetching: true,
      items: []
    });
  });

  it('should handle action RECEIVE_TRACKLIST', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.RECEIVE_TRACKLIST,
        trackList: mockItems
      })
    ).toEqual({
      isFetching: false,
      items: mockItems
    });
  });
});

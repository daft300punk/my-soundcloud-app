import * as actionTypes from '../../src/constants/ActionTypes';
import {playStates} from '../../src/constants/PlayState';
import reducer from '../../src/reducers/currentPlaying';
import expect from 'expect';

describe('Cureent Playing reducer', () => {
  const initialState = {
    playState: playStates.NOT_PLAYING,
    streamUrl: null,
    playingTrackId: null,
    currentTimeInSec: null,
    endTimeInSec: null
  };

  it('should create initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle REQUEST_GET_PLAYER action', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.REQUEST_GET_PLAYER,
        streamUrl: "streamurl.com",
        id: 2
      })
    ).toEqual(
      Object.assign({}, initialState, {
        playState: playStates.NOT_PLAYING,
        streamUrl: "streamurl.com",
        playingTrackId: 2
      })
    );
  });

  it('should handle RECEIVE_PLAYER action', () => {
    expect(reducer(initialState, {
      type: actionTypes.RECEIVE_PLAYER,
      currentTimeInSec: 0,
      endTimeInSec: 175
    })).toEqual(
      Object.assign({}, initialState, {
        currentTimeInSec: 0,
        endTimeInSec: 175
      })
    );
  });

  it('should handle TRACK_START_PLAYING', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.TRACK_START_PLAYING,
        pos: 5,
        currentTimeInSec: 25
      })
    ).toEqual(
      Object.assign({}, initialState, {
        playState: playStates.PLAYING,
        playingTrackId: 5,
        currentTimeInSec: 25
      })
    );
  });

  it('should handle TRACK_START_PLAYING with no pos', () => {
    expect(
      reducer(
        {
          playState: playStates.PAUSED,
          streamUrl: "streamurl.com",
          playingTrackId: 2,
          currentTimeInSec: 25,
          endTimeInSec: 175
        },
        {
          type: actionTypes.TRACK_START_PLAYING,
          playState: playStates.PLAYING,
          currentTimeInSec: 50
        }
      )
    ).toEqual(
      {
        playState: playStates.PLAYING,
        streamUrl: "streamurl.com",
        currentTimeInSec: 50,
        endTimeInSec: 175,
        playingTrackId: undefined
      }
    );
  });

  it('should handle TRACK_PAUSE', () => {
    expect(
      reducer(
        initialState,
        {
          type: actionTypes.TRACK_PAUSE,
          playState: playStates.PAUSED
        }
      )
    ).toEqual(
      Object.assign({}, initialState,
        {
          playState: playStates.PAUSED
        }
      )
    );
  });

  it('should handle TRACK_FINISHED_PLAYING', () => {
    expect(
      reducer(
        {
          playState: playStates.PAUSED,
          streamUrl: "streamurl.com",
          playingTrackId: 2,
          currentTimeInSec: 175,
          endTimeInSec: 175
        },
        {
          type: actionTypes.TRACK_FINISHED_PLAYING
        }
      )
    ).toEqual(
      Object.assign({}, initialState, {
        playState: playStates.NOT_PLAYING,
        currentTimeInSec: 175,
        endTimeInSec: 175
      })
    );
  });

  it('should handle UPDATE_CURRENT_TIME', () => {
    const state = {
      playState: playStates.PLAYING,
      streamUrl: "streamUrl.com",
      playingTrackId: 2,
      currentTimeInSec: 40,
      endTimeInSec: 175
    };

    expect(
      reducer(state, {
        type: actionTypes.UPDATE_CURRENT_TIME,
        currentTimeInSec: 50
      })
    ).toEqual(
      Object.assign({}, state, {
        currentTimeInSec: 50
      })
    );
  });
});

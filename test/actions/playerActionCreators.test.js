import * as actionTypes from '../../src/constants/ActionTypes';
import * as actions from '../../src/actions/playerAction';
import expect from 'expect';

// constants used as parameters in testing
const StreamUrl = 'www.stream.com',
  Id = 10,
  Player = {
    duration: 100,
  },
  Pos = 2,
  CurrentTimeInSec = 0,
  EndTimeInSec = 100;

describe('Player action creators', () => {
  it('should create an action to to request getting player', () => {
    const expectedAction = {
      type: actionTypes.REQUEST_GET_PLAYER,
      streamUrl: StreamUrl,
      id: Id
    };
    expect(actions.requestGetPlayerAC(StreamUrl, Id))
    .toEqual(expectedAction);
  });

  it('should create an action for receiving player', () => {
    const expectedAction = {
      type: actionTypes.RECEIVE_PLAYER,
      player: Player,
      pos: Pos,
      currentTimeInSec: CurrentTimeInSec,
      endTimeInSec: EndTimeInSec
    };
    expect(actions.receivePlayerAC(Player, Pos))
    .toEqual(expectedAction);
  });

  it('should create action for track start playing', () => {
    const expectedAction = {
      type: actionTypes.TRACK_START_PLAYING,
      pos: Pos,
      currentTimeInSec: CurrentTimeInSec,
    };
    expect(actions.trackStartPlayingAC(Pos, CurrentTimeInSec))
    .toEqual(expectedAction);
  });

  it('should create action for track finished playing', () => {
    const expectedAction = {
      type: actionTypes.TRACK_FINISHED_PLAYING,
    };
    expect(actions.trackFinishedPlayingAC())
    .toEqual(expectedAction);
  });

  it('should create action for track paused playing', () => {
    const expectedAction = {
      type: actionTypes.TRACK_PAUSE
    };
    expect(actions.trackPauseAC())
    .toEqual(expectedAction);
  });

  it('should create action for updating current time', () => {
    const expectedAction = {
      type: actionTypes.UPDATE_CURRENT_TIME,
      currentTimeInSec: CurrentTimeInSec
    };
    expect(actions.updateCurrentTimeAC(CurrentTimeInSec))
    .toEqual(expectedAction);
  });
});

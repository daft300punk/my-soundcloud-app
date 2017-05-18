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
});

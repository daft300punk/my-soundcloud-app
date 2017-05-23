import reducer from '../../src/reducers/playerList';
import * as actionTypes from '../../src/constants/ActionTypes';
import expect from 'expect';

describe('Playerlist reducer', () => {
  const initialState = {
    players: {}
  };

  const mockPlayers = {
    "1": {}
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle RECEIVE_PLAYER', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.RECEIVE_PLAYER,
        player: {},
        pos: 1
      })
    ).toEqual({
      players: mockPlayers
    });
  });

});

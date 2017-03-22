import * as actionTypes from '../constants/ActionTypes';

const initialState = {
  players: {}
}

export default function playerList(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RECEIVE_PLAYER:
      return Object.assign({}, state, {
        players: getNewPlayers(state, action.pos, action.player),
      });
    default:
      return state;
  }
}

const getNewPlayers = (state, id, value) => {
  let newPlayer = Object.assign({}, state.players);
  newPlayer[id] = value;
  return newPlayer;
}
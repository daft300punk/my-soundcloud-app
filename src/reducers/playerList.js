//@flow
import * as actionTypes from '../constants/ActionTypes';

type playerListStateType = {
  players: Object
}

type playerListActionType = {
  type: string,
  players: Object,
  pos: number,
  player: Object
}

const initialState: playerListStateType = {
  players: {}
};

const getNewPlayers = (
  state: playerListStateType,
  id: number,
  value: Object
): Object => {
  let newPlayer = Object.assign({}, state.players);
  newPlayer[id] = value;
  return newPlayer;
};

export default function playerList(
  state: playerListStateType = initialState,
  action: playerListActionType
): playerListStateType {
  switch (action.type) {
    case actionTypes.RECEIVE_PLAYER:
      return Object.assign({}, state, {
        players: getNewPlayers(state, action.pos, action.player),
      });
    default:
      return state;
  }
}

//@flow
import * as actionTypes from '../constants/ActionTypes';

export type Action =
  { type: 'REQUEST_TRACKLIST' }
| { type: 'RECEIVE_TRACKLIST', trackList: Array<any>} // TODO: change type of tracklist
| { type: 'REQUEST_GET_PLAYER', streamUrl: ?string, id: ?number }
| { type: 'RECEIVE_PLAYER', player: Object, pos: number, pos: number, currentTimeInSec: number, endTimeInSec: number }
| { type: 'TRACK_START_PLAYING', pos: number, currentTimeInSec: number }
| { type: 'TRACK_FINISHED_PLAYING' }
| { type: 'TRACK_PAUSE' }
| { type: 'UPDATE_CURRENT_TIME', currentTimeInSec: number }
;

export type Dispatch = 
  (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export type PromiseAction = Promise<Action>;

export type GetState = () => Object;
import * as actionTypes from '../../src/constants/ActionTypes';
import * as actions from '../../src/actions/getTop50Action';
import expect from 'expect';

describe('sync actions', () => {
    it('should create an action to request Tracklist', () => {
       const expectedAction = {
           type: actionTypes.REQUEST_TRACKLIST,
       };
       expect(actions.requestTrackList()).toEqual(expectedAction);
    });
})
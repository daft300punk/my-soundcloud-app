import * as actionTypes from '../../src/constants/ActionTypes';
import * as actions from '../../src/actions/getTop50Action';
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchTop50Tracks from '../../src/actions/getTop50Action';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


//Async actions present in getTop50Action.js
describe('async actions in getTop50Action.js', () => {
    it('should create RECEIVE_TRACKLIST on successful fetch', () => {
        nock('http://example.com/')
            .get('/playlist')
            .reply(200, {body: {trackList: {}}});
        const expectedActions = [
            {type: actionTypes.REQUEST_TRACKLIST},
            {type: actionTypes.RECEIVE_TRACKLIST, }
        ];

        const store = mockStore({ items: [] });

        return store.dispatch(fetchTop50Tracks())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    });
})
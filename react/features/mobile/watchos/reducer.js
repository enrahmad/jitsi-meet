import { assign, ReducerRegistry } from '../../base/redux';
import { SET_CONFERENCE_TIMESTAMP, SET_SESSION_ID } from './actionTypes';

const INITIAL_STATE = {
    sessionID: new Date().getTime()
};

/**
 * Reduces the Redux actions of the feature features/mobile/watchos.
 */
ReducerRegistry.register('features/mobile/watchos', (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SET_SESSION_ID: {
        return assign(state, {
            sessionID: action.sessionID,
            conferenceTimestamp: 0
        });
    }
    case SET_CONFERENCE_TIMESTAMP: {
        return assign(state, {
            conferenceTimestamp: action.conferenceTimestamp
        });
    }
    default:
        return state;
    }
});

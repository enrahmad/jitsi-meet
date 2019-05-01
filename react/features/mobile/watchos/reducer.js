import { assign, ReducerRegistry, set } from '../../base/redux';
import {
    SET_CONFERENCE_TIMESTAMP,
    SET_CONFERENCE_URL,
    SET_MIC_MUTED,
    SET_RECENT_URLS
} from './actionTypes';

const INITIAL_STATE = {
    conferenceURL: undefined,
    micMuted: false,
    recentURLs: []
};

/**
 * Reduces the Redux actions of the feature features/recording.
 */
ReducerRegistry.register(
'features/mobile/watchos', (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SET_CONFERENCE_URL: {
        return assign(state, {
            conferenceURL: action.conferenceURL,
            sessionID: action.sessionID,
            conferenceTimestamp: 0
        });
    }
    case SET_CONFERENCE_TIMESTAMP: {
        return assign(state, {
            conferenceTimestamp: action.conferenceTimestamp
        });
    }
    case SET_MIC_MUTED: {
        return set(state, 'micMuted', action.micMuted);
    }
    case SET_RECENT_URLS: {
        return set(state, 'recentURLs', action.recentURLs);
    }
    default:
        return state;
    }
});

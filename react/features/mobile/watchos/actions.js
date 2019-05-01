import { SET_CONFERENCE_TIMESTAMP, SET_SESSION_ID } from './actionTypes';

/**
 * Stores a timestamp when the conference is joined, so that the watch counterpart can start counting from when
 * the meeting has really started.
 *
 * @param {number} conferenceTimestamp - A timestamp retrieved with {@code newDate.getTime()}.
 * @returns {{
 *      conferenceTimestamp: number,
 *      type: SET_CONFERENCE_TIMESTAMP
 * }}
 */
export function setConferenceTimestamp(conferenceTimestamp) {
    return {
        type: SET_CONFERENCE_TIMESTAMP,
        conferenceTimestamp
    };
}

/**
 * Updates the session ID which is sent to the Watch app and then used by the app to send commands. Commands from
 * the watch are accepted only if the 'sessionID' passed by the Watch matches the one currently stored in Redux. It is
 * supposed to prevent from processing outdated commands.
 *
 * @returns {{
 *     type,
 *     sessionID: number
 * }}
 */
export function setSessionId() {
    return {
        type: SET_SESSION_ID,
        sessionID: new Date().getTime()
    };
}

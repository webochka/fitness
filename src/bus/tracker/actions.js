// Core
import { replace } from 'connected-react-router';
import { batch } from 'react-redux';

// Types
import { types } from './types';

// Api
import { api } from '../../api';

// Book
import { book } from '../../navigation/book';

export const trackerActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.TRACKER_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.TRACKER_STOP_FETCHING
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.TRACKER_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    fillScore: (payload) => {
        return {
            type: types.TRACKER_FILL_SCORE,
            payload: payload / 2
        }
    },
    fillRecord: (payload) => {
        return {
            type: types.TRACKER_FILL_RECORD,
            payload
        }
    },
    // Async
    fetchScoreAsync: () => async (dispatch) => {
        dispatch({
            type: types.TRACKER_FETCH_SCORE_ASYNC
        });

        dispatch(trackerActions.startFetching());

        const response = await api.tracker.getScore();

        if (response.status === 200) {
            const { data } = await response.json();

            dispatch(trackerActions.fillScore(data));
        } else {
            const error = {
                status: response.status
            };

            batch(() => {
                dispatch(trackerActions.setFetchingError(error));
                dispatch(replace(book.login.url));
            });
        }

        dispatch(trackerActions.stopFetching());
    },
    getRecordAsync: (payload) => async (dispatch) => {
        dispatch({
            type: types.TRACKER_FETCH_RECORD_ASYNC,
            payload
        });

        dispatch(trackerActions.startFetching());

        const response = await api.tracker.getRecord({
            type: payload
        });

        if (response.status === 200) {
            const { data, hash } = await response.json();

            if (hash !== 0) {
                dispatch(trackerActions.fillRecord({
                    type: payload,
                    value: {
                        hash,
                        value: data
                    }
                }));
            }
        } else {
            const error = {
                status: response.status
            };

            batch(() => {
                dispatch(trackerActions.setFetchingError(error));
                dispatch(replace(book.login.url));
            });
        }

        dispatch(trackerActions.stopFetching());
    },
    createRecordAsync: (payload) => async (dispatch) => {
        dispatch({
            type: types.TRACKER_CREATE_RECORD_ASYNC,
            payload
        });

        dispatch(trackerActions.startFetching());

        const response = await api.tracker.createRecord(payload);

        if (response.status === 201) {
            const { data, hash } = await response.json();

            batch(() => {
                dispatch(trackerActions.fillRecord({
                    type: payload,
                    value: {
                        hash,
                        value: data
                    }
                }));
                dispatch(trackerActions.fetchScoreAsync());
            });
        } else {
            const error = {
                status: response.status
            };

            batch(() => {
                dispatch(trackerActions.setFetchingError(error));
                dispatch(replace(book.login.url));
            });
        }

        dispatch(trackerActions.stopFetching());
    },
    updateRecordAsync: (payload) => async (dispatch) => {
        dispatch({
            type: types.TRACKER_UPDATE_RECORD_ASYNC,
            payload
        });

        dispatch(trackerActions.startFetching());

        const response = await api.tracker.updateRecord(payload);

        if (response.status === 204) {
            batch(() => {
                dispatch(trackerActions.fillRecord({
                    type: payload.type,
                    value: {
                        hash: payload.hash,
                        value: payload.record
                    }
                }));
                dispatch(trackerActions.fetchScoreAsync());
            });
        } else {
            const error = {
                status: response.status
            };

            batch(() => {
                dispatch(trackerActions.setFetchingError(error));
                dispatch(replace(book.login.url));
            });
        }

        dispatch(trackerActions.stopFetching());
    },
    removeAllRecordsAsync: () => async (dispatch) => {
        dispatch({
            type: types.TRACKER_REMOVE_ALL_RECORDS_ASYNC,
        });

        dispatch(trackerActions.startFetching());

        const response = await api.tracker.removeAllRecords();

        if (response.status === 204) {
            dispatch(trackerActions.fetchScoreAsync());
            dispatch(replace(book.root.url));
        } else {
            const error = {
                status: response.status
            };

            dispatch(trackerActions.setFetchingError(error));
        }

        dispatch(trackerActions.stopFetching());
    },
})
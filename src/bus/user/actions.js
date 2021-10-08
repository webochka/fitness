// Core
import { replace } from 'connected-react-router';
import { batch } from 'react-redux';

// Types
import { types } from './types';

// Api
import { api } from '../../api';

// Book
import { book } from '../../navigation/book';

export const userActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.USER_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.USER_STOP_FETCHING
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.USER_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    fill: (payload) => {
        return {
            type: types.USER_FILL,
            payload
        }
    },
    // Async
    registerUserAsync: (payload) => async (dispatch) => {
        dispatch({
            type: types.USER_REGISTER_ASYNC,
            payload
        });

        dispatch(userActions.startFetching());

        const response = await api.users.create(payload);

        if (response.status === 201) {
            dispatch(replace(book.login.url));
        } else {
            const error = {
                status: response.status
            };

            dispatch(userActions.setFetchingError(error));
        }

        dispatch(userActions.stopFetching());
    },
    loginUserAsync: (payload) => async (dispatch) => {
        dispatch({
            type: types.USER_LOGIN_ASYNC,
            payload
        });

        dispatch(userActions.startFetching());

        const response = await api.users.login(payload);

        if (response.status === 200) {
            dispatch(replace(book.root.url));
        } else {
            const error = {
                status: response.status
            };

            dispatch(userActions.setFetchingError(error));
        }

        dispatch(userActions.stopFetching());
    },
    getMeAsync: () => async (dispatch) => {
        dispatch({
            type: types.USER_GET_ME_ASYNC,
        });

        dispatch(userActions.startFetching());

        const response = await api.users.getMe();

        if (response.status === 200) {
            const { data } = await response.json();

            dispatch(userActions.fill(data));
        } else {
            const error = {
                status: response.status
            };

            batch(() => {
                dispatch(userActions.setFetchingError(error));
                dispatch(replace(book.login.url));
            });
        }

        dispatch(userActions.stopFetching());
    },
    logoutUserAsync: () => async (dispatch) => {
        dispatch({
            type: types.USER_LOGOUT,
        });

        dispatch(userActions.startFetching());

        const response = await api.users.logout();

        if (response.status === 204) {
            dispatch(replace(book.login.url));
        } else {
            const error = {
                status: response.status
            };

            batch(() => {
                dispatch(userActions.setFetchingError(error));
                dispatch(replace(book.login.url));
            });
        }

        dispatch(userActions.stopFetching());
    },
    updateMeAsync: (payload) => async (dispatch) => {
        dispatch({
            type: types.USER_UPDATE_ME_ASYNC,
            payload
        });

        dispatch(userActions.startFetching());

        const response = await api.users.updateMe(payload);

        if (response.status === 200) {
            dispatch(replace(book.profile.url));
        } else {
            const error = {
                status: response.status
            };

            batch(() => {
                dispatch(userActions.setFetchingError(error));
                dispatch(replace(book.login.url));
            });
        }

        dispatch(userActions.stopFetching());
    },
})
// Types
import { types } from './types';

const initialState = {
    isLoading: false,
    error: null,
    profile: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case types.USER_STOP_FETCHING:
            return {
                ...state,
                isLoading: false
            }
        case types.USER_SET_FETCHING_ERROR:
            return {
                ...state,
                isLoading: false,
                profile: null,
                error: action.payload.status
            }
        case types.USER_FILL:
            return {
                ...state,
                error: null,
                profile: action.payload,
            }
        default:
            return state;
    }
};

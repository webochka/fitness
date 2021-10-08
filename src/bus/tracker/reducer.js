// Types
import { types } from './types';

const initialState = {
    isLoading: false,
    error: null,
    score: null,
    record: {
        breakfast: null,
        coffee: null,
        dinner: null,
        fruits: null,
        junk: null,
        lunch: null,
        sleep: null,
        steps: null,
        vegetables: null,
        water: null
    }
};

export const trackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TRACKER_START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case types.TRACKER_STOP_FETCHING:
            return {
                ...state,
                isLoading: false
            }
        case types.TRACKER_SET_FETCHING_ERROR:
            return {
                ...state,
                isLoading: false,
                profile: null,
                error: action.payload.status
            }
        case types.TRACKER_FILL_SCORE:
            return {
                ...state,
                error: null,
                score: action.payload,
            }
        case types.TRACKER_FILL_RECORD:
            return {
                ...state,
                error: null,
                record: {
                    ...state.record,
                    [action.payload.type]: action.payload.value
                },
            }
        default:
            return state;
    }
};

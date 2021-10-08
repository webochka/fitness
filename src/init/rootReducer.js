// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

// History
import { history } from './middleware';

// Reducers
import { userReducer as user } from '../bus/user/reducer';
import { trackerReducer as tracker } from '../bus/tracker/reducer';

const router = connectRouter(history);

export const rootReducer = combineReducers({
    router,
    user,
    tracker
});

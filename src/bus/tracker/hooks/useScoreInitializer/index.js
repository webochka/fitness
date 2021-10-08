// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Hooks
import { useScore } from '../useScore';

// Actions
import { trackerActions } from '../../actions';

export const useScoreInitializer = () => {
    const { score } = useScore();
    const dispatch = useDispatch();

    useEffect(() => {
        if (score === null) {
            dispatch(trackerActions.fetchScoreAsync());
        }
    }, [dispatch, score]);
};

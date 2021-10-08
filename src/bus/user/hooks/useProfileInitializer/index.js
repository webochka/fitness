// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Hooks
import { useProfile } from '../useProfile';

// Actions
import { userActions } from '../../actions';

export const useProfileInitializer = () => {
    const dispatch = useDispatch();

    const { profile } = useProfile();

    useEffect(() => {
        if (profile === null) {
            dispatch(userActions.getMeAsync());
        }
    }, [dispatch, profile]);
};

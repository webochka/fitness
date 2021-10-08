// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Hooks
import { useRecord } from '../useRecord';

// Actions
import { trackerActions } from '../../actions';

export const useRecordInitializer = (type) => {
    const { record } = useRecord();
    const dispatch = useDispatch();

    useEffect(() => {
        if (record[type] === null) {
            dispatch(trackerActions.getRecordAsync(type));
        }
    }, [dispatch, record, type]);
};

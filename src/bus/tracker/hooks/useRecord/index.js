// Core
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { trackerActions } from '../../actions';

export const useRecord = () => {
    const { record, isLoading } = useSelector((state) => state.tracker);
    // console.log(isLoading);

    const dispatch = useDispatch();

    const createRecord = (type, record) => {
        dispatch(trackerActions.createRecordAsync({
            type,
            record
        }));
    };

    const updateRecord = (type, record, hash) => {
        dispatch(trackerActions.updateRecordAsync({
            type,
            record,
            hash
        }));
    };

    const removeAllRecords = () => {
        dispatch(trackerActions.removeAllRecordsAsync());
    };

    return {
        record,
        createRecord,
        updateRecord,
        removeAllRecords,
        isLoading
    };
};

// Core
import { useFormik } from 'formik';

// Other
import { initialValues } from './initialValues';
import { profileSchema } from './profile.schema';

export const useProfileForm = (profile) => {
    const {
        getFieldProps,
        setFieldValue,
        errors,
        isValid,
        dirty,
        resetForm,
        values
    } = useFormik({
        initialValues: profile || initialValues,
        validationSchema: profileSchema,
        enableReinitialize: true
    });

    const isBlocked = (!isValid && dirty) || !dirty;

    const changeProfileToMale = () => {
        setFieldValue('sex', 'm');
    };

    const changeProfileToFemale = () => {
        setFieldValue('sex', 'f');
    };

    return {
        getFieldProps,
        changeProfileToMale,
        changeProfileToFemale,
        errors,
        isBlocked,
        resetForm,
        values,
    }
}
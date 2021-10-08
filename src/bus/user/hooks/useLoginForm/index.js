// Core
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

// Hooks
import { useErrorHandler } from './useErrorHandler';

// Other
import { initialValues } from './initialValues';
import { loginSchema } from './login.schema';

export const useLoginForm = () => {
    const { errorMessage, setErrorMessage } = useErrorHandler();
    const [encryptedUser, setEncryptedUser] = useState();

    const {
        getFieldProps,
        values,
        errors,
        isValid
    } = useFormik({
        initialValues,
        validationSchema: loginSchema
    });

    useEffect(() => {
        const {
            email,
            password
        } = values;

        try {
            const encryptedCredentials = btoa(`${email}:${password}`);

            setEncryptedUser(encryptedCredentials);
        } catch (e) {
            setErrorMessage('Произошла ошибка при вводе email или пароля!');
        }
    }, [values, setErrorMessage]);

    return {
        getFieldProps,
        errors,
        isValid,
        encryptedUser,
        errorMessage
    }
}
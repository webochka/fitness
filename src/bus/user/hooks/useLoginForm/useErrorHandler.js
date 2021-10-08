// Core
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const useErrorHandler = () => {
    const [errorMessage, setErrorMessage] = useState();

    const { error } = useSelector((state) => state.user);

    useEffect(() => {
        if (error === 401) {
            setErrorMessage('Попробуйте авторизироваться ещё раз!');
        } else if (error === 400) {
            setErrorMessage('На клиенте произошла ошибка!');
        } else if (error === 500) {
            setErrorMessage('На сервере произошла ошибка!');
        } else {
            setErrorMessage(null);
        }
    }, [error]);

    return {
        errorMessage,
        setErrorMessage
    }
};

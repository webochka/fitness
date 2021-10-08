// Core
import React from 'react';

// Styles
import Styles from './styles/index.module.scss';

// Hooks
import { useLoginForm } from '../../hooks/useLoginForm';
import { useProfile } from '../../hooks/useProfile';

// Elements
import { CustomInput } from '../../../../elements/customInput';
import {Spinner} from '../../../../elements/spinner';

export const LoginComponent = () => {
    const {
        getFieldProps,
        errors,
        isValid,
        encryptedUser,
        errorMessage
    } = useLoginForm();

    const { login, isLoading } = useProfile();

    const loginHandler = () => {
        login(encryptedUser);
    };

    const errorMessageJSX = errorMessage && (
        <p className={Styles.error}>{errorMessage}</p>
    );

    const loaderJSX = isLoading && (
        <Spinner isLoading={isLoading} />
    );

    return (
        <section className={Styles.login}>
            <div className={Styles.content}>
                <h1>Добро пожаловать!</h1>
                <CustomInput
                    name="email"
                    cx={Styles.inputRow}
                    label="Электропочта"
                    type="email"
                    placeholder="Введите свой email"
                    error={errors.email}
                    errorCX={Styles.error}
                    {...getFieldProps('email')}
                />
                <CustomInput
                    name="password"
                    cx={Styles.inputRow}
                    label="Пароль"
                    type="password"
                    placeholder="Введите свой пароль"
                    error={errors.password}
                    errorCX={Styles.error}
                    {...getFieldProps('password')}
                />
                {errorMessageJSX}
                <button onClick={loginHandler} disabled={!isValid || isLoading}>Войти в систему</button>
            </div>
            {loaderJSX}
        </section>
    )
};

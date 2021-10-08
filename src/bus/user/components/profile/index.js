// Core
import React from 'react';
import cx from 'classnames';

// Styles
import Styles from './styles/index.module.scss';

// Elements
import { CustomInput } from '../../../../elements/customInput';

// Hooks
import { useProfileForm } from '../../hooks/useProfileForm';
import { useRecord } from '../../../tracker/hooks/useRecord';
import {useProfile} from '../../hooks/useProfile';

export const ProfileComponent = (props) => {
    const {
        submit,
        submitText,
        profile
    } = props;

    const {
        getFieldProps,
        changeProfileToFemale,
        changeProfileToMale,
        errors,
        isBlocked,
        resetForm,
        values,
    } = useProfileForm(profile);

    const {
        removeAllRecords,
        isLoading
    } = useRecord();

    const {
        isLoading: isProfileLoading
    } = useProfile();

    const femaleCX = cx([Styles.female, {
        [Styles.selected]: getFieldProps('sex').value === 'f'
    }]);

    const maleCX = cx([Styles.male, {
        [Styles.selected]: getFieldProps('sex').value === 'm'
    }]);

    const genderErrorJSX = errors.sex && (
        <p className={Styles.error}>
            {errors.sex}
        </p>
    );

    const submitHandler = () => {
        if (typeof submit === 'function') {
            submit(values);
        }
    };

    const removeAllJSX = profile && (
        <button
            type="button"
            className={Styles.clearAllRecords}
            onClick={removeAllRecords}
            disabled={isLoading}
        >
            Очистить все данные
        </button>
    );

    return (
        <div className={Styles.profile}>
            <h1>Профиль</h1>
            <div className={Styles.gender}>
                <div className={femaleCX} onClick={changeProfileToFemale}>
                    <span>Женщина</span>
                </div>
                <div className={maleCX} onClick={changeProfileToMale}>
                    <span>Мужчина</span>
                </div>
            </div>
            {genderErrorJSX}
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
                name="fname"
                cx={Styles.inputRow}
                label="Имя"
                type="text"
                placeholder="Введите свое имя"
                {...getFieldProps('fname')}
            />
            <CustomInput
                name="lname"
                cx={Styles.inputRow}
                label="Фамилия"
                type="text"
                placeholder="Введите свою фамилию"
                {...getFieldProps('lname')}
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
            <CustomInput
                name="age"
                cx={Styles.inputRow}
                label="Возраст"
                type="number"
                placeholder="Введите свой возраст"
                {...getFieldProps('age')}
            />
            <CustomInput
                name="height"
                cx={Styles.inputRow}
                label="Рост"
                type="number"
                placeholder="Введите свой рост"
                {...getFieldProps('height')}
            />
            <CustomInput
                name="weight"
                cx={Styles.inputRow}
                label="Вес"
                type="number"
                placeholder="Введите свой вес"
                error={errors.weight}
                errorCX={Styles.error}
                {...getFieldProps('weight')}
            />
            <div className={Styles.controls}>
                <button className={Styles.clearData} disabled={isBlocked} onClick={resetForm}>Сбросить</button>
                <button onClick={submitHandler} disabled={isBlocked || isProfileLoading}>{submitText}</button>
            </div>
            {removeAllJSX}
        </div>
    )
}
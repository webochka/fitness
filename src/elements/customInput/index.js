// Core
import React from 'react';

export const CustomInput = (props) => {
    const {
        name,
        type,
        placeholder,
        cx,
        value,
        onChange,
        onBlur,
        label,
        error,
        errorCX,
    } = props;

    const inputValue = value || '';

    const errorJSX = error && (
        <p className={errorCX}>
            {error}
        </p>
    );

    return (
        <>
            <div className={cx}>
                <label>
                    {label}
                </label>
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
            {errorJSX}
        </>
    );
};

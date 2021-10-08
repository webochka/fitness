// Core
import React from 'react';
import Loader from 'react-loader-spinner';

// Styles
import Styles from './styles.module.css';

export const Spinner = ({isLoading}) => {
    const spinnerJSX = isLoading && (
        <div className={Styles.spinner}>
            <Loader
                type="Triangle"
                color="#FFF"
                height={60}
                width={60}
            />
        </div>
    );

    return (
        <>
            {spinnerJSX}
        </>
    );
};

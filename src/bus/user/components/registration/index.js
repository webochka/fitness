// Core
import React from 'react';

// Styles
import Styles from './styles/index.module.scss';

// Components
import { ProfileComponent } from '../profile';

// Elements
import { Spinner } from '../../../../elements/spinner';

// Hooks
import { useProfile } from '../../hooks/useProfile';

export const RegistrationComponent = () => {
    const { register, isLoading } = useProfile();

    const loaderJSX = isLoading && (
        <Spinner isLoading={isLoading} />
    );

    return (
        <section className={Styles.registration}>
            <div className={Styles.left}>
                <ProfileComponent
                    submitText="Зарегистрироваться"
                    submit={register}
                    blocked={isLoading}
                />
            </div>
            <div className={Styles.right}>
                {loaderJSX}
            </div>
        </section>
    )
};

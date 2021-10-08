// Core
import React from 'react';

// Views
import { Base } from '../../views/base';

// Components
import { ProfileComponent } from '../../bus/user';

// Hooks
import { useProfile } from '../../bus/user/hooks/useProfile';
import { useProfileInitializer } from '../../bus/user/hooks/useProfileInitializer';

export const Profile = () => {
    // Get profile from API
    useProfileInitializer();

    const {
        profile,
        logout,
        update
    } = useProfile();

    return (
        <>
            <Base
                logout={logout}
                profile={profile}
                center={true}
                disabledWidget={true}
            >
                <ProfileComponent
                    submitText="Обновить"
                    profile={profile}
                    submit={update}
                />
            </Base>
        </>
    );
};

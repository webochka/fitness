// Core
import React from 'react';

// Views
import { Base } from '../../views/base';

// Components
import { DashboardComponent } from '../../bus/tracker';

// Hooks
import { useProfile } from '../../bus/user/hooks/useProfile';
import { useProfileInitializer } from '../../bus/user/hooks/useProfileInitializer';
import { useScoreInitializer } from '../../bus/tracker/hooks/useScoreInitializer';
import { useScore } from '../../bus/tracker/hooks/useScore';

export const Dashboard = () => {
    // Get profile from API
    useProfileInitializer();
    useScoreInitializer();

    const { score } = useScore();

    const {
        profile,
        logout,
    } = useProfile();

    return (
        <>
            <Base
                logout={logout}
                profile={profile}
                score={score}
            >
                <DashboardComponent />
            </Base>
        </>
    );
};

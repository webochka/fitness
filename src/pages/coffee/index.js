// Core
import React from 'react';

// Views
import { Base } from '../../views/base';

// Hooks
import { useProfile } from '../../bus/user/hooks/useProfile';
import { useProfileInitializer } from '../../bus/user/hooks/useProfileInitializer';
import { useScoreInitializer } from '../../bus/tracker/hooks/useScoreInitializer';
import { useRecordInitializer } from '../../bus/tracker/hooks/useRecordInitializer';
import { useScore } from '../../bus/tracker/hooks/useScore';
import { useRecord } from '../../bus/tracker/hooks/useRecord';

// Components
import { CustomQuestionSelector } from '../../elements/customQuestionSelector';

export const Coffee = () => {
    // Get profile from API
    useProfileInitializer();
    useScoreInitializer();
    useRecordInitializer('coffee');

    const { score } = useScore();
    const { record, updateRecord, createRecord, isLoading } = useRecord();

    const {
        profile,
        logout,
    } = useProfile();

    const variants = [
        {
            title: 'Я не пил совсем',
            value: 'none'
        },
        {
            title: 'Выпил 1 стакан',
            value: 'light'
        },
        {
            title: 'Выпил 2 или больше стаканов',
            value: 'heavy'
        }
    ];

    return (
        <>
            <Base
                logout={logout}
                profile={profile}
                score={score}
            >
                <CustomQuestionSelector
                    title="Ты сегодня пил кофе?"
                    variants={variants}
                    initial={record.coffee}
                    update={updateRecord}
                    create={createRecord}
                    type="coffee"
                    blocked={isLoading}
                />
            </Base>
        </>
    );
};

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

export const Lunch = () => {
    // Get profile from API
    useProfileInitializer();
    useScoreInitializer();
    useRecordInitializer('lunch');

    const { score } = useScore();
    const { record, updateRecord, createRecord, isLoading } = useRecord();

    const {
        profile,
        logout,
    } = useProfile();

    const variants = [
        {
            title: 'Я не обедал',
            value: 'none'
        },
        {
            title: 'У меня был легкий обед',
            value: 'light'
        },
        {
            title: 'Я очень плотно покушал',
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
                    title="Ты сегодня обедал?"
                    variants={variants}
                    initial={record.lunch}
                    update={updateRecord}
                    create={createRecord}
                    type="lunch"
                    blocked={isLoading}
                />
            </Base>
        </>
    );
};

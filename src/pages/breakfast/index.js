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

export const Breakfast = () => {
    // Get profile from API
    useProfileInitializer();
    useScoreInitializer();
    useRecordInitializer('breakfast');

    const { score } = useScore();
    const { record, updateRecord, createRecord, isLoading } = useRecord();

    const {
        profile,
        logout,
        isLoading: isProfileLoading
    } = useProfile();

    const variants = [
        {
            title: 'Я не завтракал',
            value: 'none'
        },
        {
            title: 'У меня был легкий завтрак',
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
                isLoading={isProfileLoading || isLoading}
            >
                <CustomQuestionSelector
                    title="Ты сегодня завтракал?"
                    variants={variants}
                    initial={record.breakfast}
                    update={updateRecord}
                    create={createRecord}
                    type="breakfast"
                    blocked={isLoading}
                />
            </Base>
        </>
    );
};

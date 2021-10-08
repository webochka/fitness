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
import { CustomQuestionCheckboxes } from '../../elements/customQuestionCheckboxes';

export const Water = () => {
    // Get profile from API
    useProfileInitializer();
    useScoreInitializer();
    useRecordInitializer('water');

    const { score } = useScore();
    const { record, updateRecord, createRecord, isLoading } = useRecord();

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
                <CustomQuestionCheckboxes
                    title="Сколько воды ты сегодня выпил?"
                    initial={record.water}
                    update={updateRecord}
                    create={createRecord}
                    type="water"
                    blocked={isLoading}
                />
            </Base>
        </>
    );
};

// Core
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

// Styles
import Styles from './styles/index.module.scss';

export const CustomQuestionCheckboxes = (props) => {
    const {
        title,
        create,
        update,
        initial,
        type,
        blocked
    } = props;

    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (initial && initial.value) {
            setCurrentValue(initial.value);
        }
    }, [initial]);

    const cupsJSX = [...new Array(13)].map((_, ind) => {
        const isSelected = currentValue > ind;

        const cupCX = cx(Styles.element, [{
            [Styles.selected]: isSelected
        }]);

        const clickHandler = () => {
            const expectedInd = ind + 1;
            const leftInd = currentValue - 1;

            if (currentValue === expectedInd) {
                setCurrentValue(leftInd);
            } else {
                setCurrentValue(expectedInd);
            }
        };

        return (
            <button
                key={String(ind)}
                className={cupCX}
                onClick={clickHandler}
            />
        );
    });

    const submitHandler = () => {
        if (initial) {
            update(type, currentValue, initial.hash);
        } else {
            create(type, currentValue);
        }
    };

    const waterAmount = currentValue && currentValue * 250;

    return (
        <div className={Styles.question}>
            <h1>{title}</h1>
            <div className={Styles.elements}>
                {cupsJSX}
                <span className={Styles.size}>{waterAmount} мл</span>
            </div>
            <button
                className={Styles.sendAnswer}
                onClick={submitHandler}
                disabled={blocked}
            >
                Ответить
            </button>
        </div>
    );
};

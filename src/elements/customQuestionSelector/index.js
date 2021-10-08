// Core
import React, {useEffect, useState} from 'react';
import cx from 'classnames';

// Styles
import Styles from './styles/index.module.scss';

export const CustomQuestionSelector = (props) => {
    const [currentValue, setCurrentValue] = useState();

    const {
        title,
        variants,
        create,
        update,
        initial,
        type,
        blocked
    } = props;

    useEffect(() => {
        if (initial && initial.hash !== 0) {
            setCurrentValue(initial.value);
        }
    }, [initial]);

    const variantsJSX = variants.map(({title, value}, index) => {
        const clickHandler = () => {
            setCurrentValue(value);
        };

        const selectorCX = cx(
            Styles.answer,
            {
                [Styles.selected]: value === currentValue
            }
        );

        return (
            <span key={String(index)} className={selectorCX} onClick={clickHandler}>{title}</span>
        );
    });

    const submitHandler = () => {
        if (initial) {
            update(type, currentValue, initial.hash);
        } else {
            create(type, currentValue);
        }
    };

    return (
        <div className={Styles.question}>
            <h1>{title}</h1>
            <div className={Styles.answers}>
                {variantsJSX}
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

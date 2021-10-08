// Core
import React, { useEffect, useState } from 'react';

// Styles
import Styles from './styles/index.module.scss';

export const CustomQuestionInput = (props) => {
    const [currentValue, setCurrentValue] = useState();

    const {
        title,
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

    const changeHandler = (e) => {
        setCurrentValue(e.target.value);
    };

    const submitHandler = () => {
        if (initial) {
            update(type, currentValue, initial.hash);
        } else {
            create(type, currentValue);
        }
    }

    return (
        <div className={Styles.question}>
            <h1>{title}</h1>
            <div className={Styles.inputRow}>
                <input type="number" value={currentValue || ''} onChange={changeHandler} placeholder='Введите свое число'/>
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

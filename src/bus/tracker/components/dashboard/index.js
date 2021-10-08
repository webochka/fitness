// Core
import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

// Book
import { book } from '../../../../navigation/book';

// Hooks
import { useScore } from '../../hooks/useScore';

// Styles
import Styles from './styles/index.module.scss';

import { availableQuestions } from './availableQuestions';

export const DashboardComponent = () => {
    const { score } = useScore();

     if (score === null) {
         return null;
     }

     console.log(book);

    const questionsJSX = availableQuestions.map(({title, description, url}, index) => (
        <Link key={String(index)} to={book[url].url} className={cx([Styles.link, Styles[`category${index}`]])}>
            <span className={Styles.title}>{title}</span>
            <span className={Styles.description}>{description}</span>
        </Link>
    ));

    return (
        <div className={Styles.dashboard}>
            <div className={Styles.navigation}>
                <h1>Как у тебя проходит день?</h1>
                <div className={Styles.items}>
                    {questionsJSX}
                </div>
            </div>
        </div>
    );
};

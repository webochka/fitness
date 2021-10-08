// Core
import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

// Styles
import Styles from './index.module.scss';

// Book
import { book } from '../../navigation/book';

export const User = (props) => {
    const {
        sex,
        fname,
        lname,
        logout
    } = props;

    const avatarCX = cx([Styles.avatar, {
        [Styles.male]: sex === 'm',
        [Styles.female]: sex === 'f',
    }]);

    return (
        <div className={avatarCX}>
            <div className={Styles.column}>
                {/*<span className={Styles.name}>{fname} {lname}</span>*/}
                <Link to={book.profile.url} className={Styles.name}>{fname} {lname}</Link>
                <button className={Styles.logout} onClick={logout}>Выйти</button>
            </div>
        </div>
    );
};

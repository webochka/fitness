// Core
import React from 'react';
import cx from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';

// Book
import { book } from '../../navigation/book';

// Styles
import Styles from './styles/index.module.scss';

// Elements
import { User } from '../../elements/user';
import { Spinner } from '../../elements/spinner';

export const Base = (props) => {
    const {
        children,
        profile,
        logout,
        score,
        center,
        disabledWidget,
        isLoading
    } = props;

    const { isExact } = useRouteMatch(book.root.url);

    if (!profile) {
        return null;
    }

    const avatarCX = cx([Styles.sidebar, {
        [Styles.male]: profile.sex === 'm',
        [Styles.female]: profile.sex === 'f',
    }]);

    const contentCX = cx(Styles.content, {
        [Styles.center]: center
    });

    const loaderCX = isLoading && (
        <Spinner isLoading={isLoading} />
    );

    const widgetJSX = score !== null && !disabledWidget && (
        <div className={Styles.widget}>
            <span className={Styles.title}>Life Score</span>
            <div className={Styles.module}>
                <span className={Styles.score} style={{bottom: `${score}%`}}>{score}</span>
                <div className={Styles.progress}>
                    <div className={Styles.fill} style={{height: `${score}%`}} />
                </div>
                <span className={cx([Styles.label, Styles.level1])}>Off Track</span>
                <span className={cx([Styles.label, Styles.level2])}>Imbalanced</span>
                <span className={cx([Styles.label, Styles.level3])}>Balanced</span>
                <span className={cx([Styles.label, Styles.level4])}>Healthy</span>
                <span className={cx([Styles.label, Styles.level5])}>Perfect Fit</span>
            </div>
        </div>
    );

    const homeLinkJSX = !isExact && (
        <Link to={book.root.url} className={Styles.homeLink}>На главную</Link>
    );

    return (
        <section className={Styles.profile}>
            <div className={avatarCX}>
                {loaderCX}
            </div>
            <div className={Styles.wrap}>
                <div className={Styles.header}>
                    <div>
                        {homeLinkJSX}
                    </div>
                    <User
                        sex={profile.sex}
                        fname={profile.fname}
                        lname={profile.lname}
                        logout={logout}
                    />
                </div>
                <div className={contentCX}>
                    {children}
                    {widgetJSX}
                </div>
            </div>
        </section>
    );
};

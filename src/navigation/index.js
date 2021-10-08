// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import { book } from './book';

export const Routes = () => {
    const routesJSX = Object.values(book).map(({url, page: Page}) => (
        <Route key={url} exact path={ url }>
            <Page />
        </Route>
    ));

    return (
        <>
            <Switch>
                {routesJSX}
            </Switch>
        </>
    );
}

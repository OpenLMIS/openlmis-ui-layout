/*
 * This program is part of the OpenLMIS logistics management information system platform software.
 * Copyright © 2017 VillageReach
 *
 * This program is free software: you can redistribute it and/or modify it under the terms
 * of the GNU Affero General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU Affero General Public License for more details. You should have received a copy of
 * the GNU Affero General Public License along with this program. If not, see
 * http://www.gnu.org/licenses.  For additional information contact info@OpenLMIS.org. 
 */

import React, { lazy, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { createRootReducer } from './store';

const importRoutes = route =>
    lazy(() =>
        import(
            /* webpackMode: "eager" */
            `../${route.componentPath}`
            ).catch(() => import(
                /* webpackMode: "eager" */
                './views/not-found'
                ))
    );

const ReactApp = ({ olmisRoutes, olmisReducers }) => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        async function loadRoutes() {
            const componentPromises =
                olmisRoutes.map(async route => {
                    const View = await importRoutes(route);
                    return (
                        <Route key={_.uniqueId('route-')} path={route.path}>
                            <View />
                        </Route>
                    );
                });

            Promise.all(componentPromises).then(setRoutes);
        }

        loadRoutes();
    }, [olmisRoutes]);

    useEffect(() => {
        const reducersPromises = olmisReducers.map(reducer => (
            import(
                /* webpackMode: "eager" */
                `../${reducer.filepath}`
                ).then(r => ({ reducer: r.default, name: reducer.name }))
        ));

        Promise.all(reducersPromises)
            .then(reducers => {
                const reducer = reducers.reduce((obj, item) => ({ ...obj, [item.name]: item.reducer }), {});
                const rootReducer = createRootReducer(reducer);
                store.replaceReducer(rootReducer);
                store.persistor.persist();
            });
    }, [olmisReducers]);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <div className="page-responsive">
                    <React.Suspense fallback='Loading routes...'>
                        <Router
                            basename="/"
                            hashType="hashbang"
                        >
                            <Switch>
                                {routes}
                            </Switch>
                        </Router>
                    </React.Suspense>
                </div>
            </PersistGate>
        </Provider>
    );
};

export default ReactApp;

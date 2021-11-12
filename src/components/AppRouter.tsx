import React from 'react';
import {Switch, Redirect} from 'react-router';
import {Route} from 'react-router-dom'

import {privateRoutes, publicRoutes, RouteNames} from "../router/routerIndex";

const AppRouter = () => {
    const auth = true;
    return (
        auth ?
        <Switch>
            {privateRoutes.map(route =>
                    <Route key={route.path}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
            )}
            <Redirect to={RouteNames.EVENT}/>
        </Switch>
            :
        <Switch>
            {publicRoutes.map(
                route =>
                    <Route key={route.path}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
            )}
            <Redirect to={RouteNames.LOGIN}/>
        </Switch>
    );
};

export default AppRouter;
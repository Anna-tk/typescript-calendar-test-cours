import React from 'react';
import {Switch, Redirect} from 'react-router';
import {Route} from 'react-router-dom'

import {privateRoutes, publicRoutes, RouteNames} from "../router/routerIndex";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    return (
        isAuth ?
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
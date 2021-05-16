import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { ContextAuth } from '../auth/ContextAuth';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoutes';

export const AppRouter = () => {

    const { user: { logged } } = useContext(ContextAuth);


    return (
        <Router>

            <div>

                <Switch>
                    <PublicRoute
                        exact path="/login"
                        component={LoginScreen}
                        isAuth={logged}
                    />

                    <PrivateRoute
                        isAuth={logged}
                        path="/"
                        component={DashBoardRoutes} />

                </Switch>

            </div>

        </Router>
    )
}

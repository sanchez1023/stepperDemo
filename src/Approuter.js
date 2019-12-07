import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Test from './Test';
import Information from './infoemation';

const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Switch>
                <Route path="/" component={Test} exact={true} />
                <Route path="/category" component={Information} />
               
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
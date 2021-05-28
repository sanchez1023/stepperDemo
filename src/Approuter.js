import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Test from './Test';
import Information from './infoemation';
import Aboutus from './Aboutus';
import Hooks from './hooks';
import Blogs from './Blogs';

const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Switch>
                <Route path="/" component={Test} exact={true} />
                <Route path="/category" component={Information} />
               <Route path="/aboutus" component={Aboutus}/>
               <Route path="/blogs" component={Blogs}/>

            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
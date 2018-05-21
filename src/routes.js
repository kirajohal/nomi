import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './register';
import Login from './login';
import PageNotFound from './error/page-not-found';
import LandingPage from './landing-page';

export default (
  <Switch>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/" component={LandingPage}/>
    <Route path="*" component={PageNotFound} />
  </Switch>
);
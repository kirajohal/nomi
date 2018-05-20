import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import './landing-page.css';
import { Button, Grid, Image } from 'semantic-ui-react';
import PageHeader from '../page-header';
import Register from '../register';
import Login from '../login';

class RouteComponent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

class LandingPage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <RouteComponent />
      </div>
    );
  }
}

class MainPage extends Component {
  render() {
    return <h1>hello</h1>;
  }
}

export default LandingPage;

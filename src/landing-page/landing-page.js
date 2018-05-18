import React, { Component } from 'react';
import './landing-page.css';
import { Button, Grid, Image } from 'semantic-ui-react';
import PageHeader from '../page-header';
import Register from '../register';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <Register />
        <div className="descriptionContainer" />
      </div>
    );
  }
}

export default LandingPage;

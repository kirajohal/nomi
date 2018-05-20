import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './page-header.css';
import { Button, Grid, Image } from 'semantic-ui-react';

class PageHeader extends Component {
  render() {
    return (
      <div className="headerContainer">
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image size="medium" src="/nomi.jpg" />
            </Grid.Column>
            <Grid.Column width={10} />
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              <Button basic color="black" as={Link} to="/register">
                Register
              </Button>
              <Button basic color="black" as={Link} to="/login">
                Login
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default PageHeader;

import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Image } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="/nomi.jpg" />
            </Grid.Column>
            <Grid.Column width={10} />
            <Grid.Column width={3} textAlign="right" verticalAlign="middle">
              <Button>Register</Button>
              <Button>Login</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

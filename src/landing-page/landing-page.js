import React, { Component } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';

export default function LandingPage() {
  return (
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <Image src={'emptyuser.png'} size="medium" circular />
          </Grid.Column>
          <Grid.Column textAlign="left" verticalAlign="middle">
            <h1>Bruce Banner</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

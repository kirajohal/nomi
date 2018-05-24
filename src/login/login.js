import React, { Component } from 'react';
import { Form, Checkbox, Button, Container, Header } from 'semantic-ui-react';
import loginUser from './login-user';

class Login extends Component {
  state = {
    email: '',
    password: '',
    processing: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ processing: true });

    try {
      await loginUser(email, password);
    } catch (err) {
      console.log(err);
      return;
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Header as="h1" textAlign="center">
          <Header.Content>
            Login
            <Header.Subheader>Remind us who you are</Header.Subheader>
          </Header.Content>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>EMail</label>
            <input
              placeholder="EMail Address"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field type="password">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button loading={this.state.processing} type="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}
export default Login;

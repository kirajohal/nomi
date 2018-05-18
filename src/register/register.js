import React, { Component } from 'react';
import {
  Form,
  Checkbox,
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import registerUser from './register-user';

class Register extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    registerUser(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Header as="h1" textAlign="center">
          <Header.Content>
            Register
            <Header.Subheader>We want your details</Header.Subheader>
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
          <Form.Field type="password">
            <label>Repeat your password if you are a masochist</label>
            <input type="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to hand over my soul" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
export default Register;

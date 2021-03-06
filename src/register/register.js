import React, { Component } from "react";
import {
  Form,
  Checkbox,
  Button,
  Container,
  Header
} from "semantic-ui-react";
import registerUser from "./register-user";

class Register extends Component {
  state = {
    email: "",
    password: "",
    processing: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({processing: true});

    try {
      await registerUser(email, password);
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
          <Button loading={this.state.processing} type="submit">Register</Button>
        </Form>
      </Container>
    );
  }
}
export default Register;

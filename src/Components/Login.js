import React from "react";
import "../App.css";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
//import { Link } from "react-router-dom";
class Login extends React.Component {
  render() {
    return (
      <Container mx-3>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <center>
            <h3>LOGIN</h3>
          </center>
          <Form action="">
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
            Don't have an account? SignUp
            <center>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </center>
          </Form>
        </div>
      </Container>
    );
  }
}
export default Login;

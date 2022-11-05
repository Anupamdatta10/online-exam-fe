import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
//import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
class Signup extends React.Component {
  render() {
    return (
      <Container>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <center>
            <h3>Signup</h3>
          </center>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicFname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    onKeyUp={(e) => this.finput(e)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicLname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    onKeyUp={(e) => this.linput(e)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onKeyUp={(e) => this.emailinput(e)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPhno">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter Phone number"
                    onKeyUp={(e) => this.phinput(e)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onKeyUp={(e) => this.passinput(e)}
                  />
                </Form.Group>
              </Col>
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="xyz street"
                  onKeyUp={(e) => this.addinput(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => this.Adduser()}
              >
                Submit
              </Button>
            </Row>
          </Form>
        </div>
      </Container>
    );
  }
}
export default Signup;

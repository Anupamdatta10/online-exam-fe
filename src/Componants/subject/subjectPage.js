import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css'
import Navb from './navb';
import Mbody from './mbody';
export default function SubjectPage() {
  return (
    <>
      <Container fluid>
        <Row fluid><Col sm={10} ><h1 >S U B J E C T S </h1></Col>
        <div className="vr"/>
        <Col ><Button variant="outline-primary" className='mt-2'  size="lg">Add Subjects
        </Button></Col>
        </Row>
        <hr></hr>
        <Mbody/>
      </Container>
    </>
  )
}

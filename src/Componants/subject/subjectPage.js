import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Sidebarr from './sidebarr'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Navb from './navb';
import Mbody from './mbody';
import './subjectpage.css'
export default function SubjectPage() {
  return (
    <>
      <Container fluid>
        <Row fluid className='rowheader' ><Col className='rowheadcol1'lg={true} xs={12} md={8} ><h1 className='heaader' >S U B J E C T S </h1></Col>
        
        <Col className='rowheadcol2 ' xs={6} md={4} ><div   className='profilebt wrapper'  ><Sidebarr/>
        </div></Col>
        </Row>
        <hr></hr>
        <div className='boody'><Mbody/></div>
      </Container>
    </>
  )
}

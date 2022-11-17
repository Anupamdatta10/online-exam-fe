import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {CgProfile} from 'react-icons/cg'
import './sidebar.css'
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button  onClick={handleShow}  size="lg" className="probutton " >
      <CgProfile size='3em' />
      </Button>

      <Offcanvas className="sidebarr" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>PROFILE NAME</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='naitem p-1 mb-3'>
            English
            </div>
            <div className='naitem p-1 mb-3 '>
            Mathematics
            </div>
            <div className=' naitem p-1 mb-3 '>
            Physics
            </div>
            <div className='naitem p-1 mb-3 '>
            Chemistry
            </div>
            <div className='naitem p-1 mb-3 '>
            Biology
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
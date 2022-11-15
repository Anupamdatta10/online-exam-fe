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

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>PROFILE NAME</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='navitem p-1 mb-2'>
            English
            </div>
            <div className=' p-1 mb-2 '>
            Mathematics
            </div>
            <div className='p-1 mb-2 '>
            Physics
            </div>
            <div className=' p-1 mb-2 '>
            Chemistry
            </div>
            <div className=' p-1 mb-2 '>
            Biology
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
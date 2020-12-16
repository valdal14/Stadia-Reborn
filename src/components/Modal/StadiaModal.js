import React, { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import './StadiaModal.css';
import StadiaLogo from '../../images/stadia-logo-white-modal.png'; 

const StadiaModal = (props)=> {

    let [username, setUsername] = useState(null);
    let [password, setPassword] = useState(null);

    let bodyConfig = { text: {} }

    const checkEmail = (e)=>{
      setUsername(e.target.value);
    }

    const checkPassword = (e)=>{
      setPassword(e.target.value);
    }

    switch (props.modalConfiguration) {
      case 'contact':
        bodyConfig.text = 'Open Contact Modal';
        break;
      case 'controller':
        bodyConfig.text = 'Open Controller Modal';
        break;
      case 'friends':
          bodyConfig.text = 'Open Friends Modal';
          break;
      case 'user':
        bodyConfig.text = 'Open User Modal';
        break;
      case 'login':
        bodyConfig.text = 
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Stadia username" onChange={checkEmail} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Stadia password" onChange={checkPassword} />
            </Form.Group>
            <Button variant="outline-success" className='buttonNav' style={{float: 'right'}} onClick={props.performLogin.bind(null, username, password)}>
              Login
            </Button>
          </Form>
          break;
      default:
        break;
    }

    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header>
            <Modal.Title>
              <img src={StadiaLogo} alt='stadia' className='stadiaModalLogo' />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { bodyConfig.text }
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="outline-success" className='buttonNav' onClick={props.handleClose}>
              Done
            </Button> 
          </Modal.Footer> */}
        </Modal>
      </>
    );
}

export default StadiaModal;

import React, { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import './StadiaModal.css';
import StadiaLogo from '../../images/stadia-logo-white-modal.png'; 
import ModalLoginSettings from '../../images/settings.png';
import ModalLoginFeedback from '../../images/comment.png';
import ModalLoginHelp from '../../images/question.png';
import ModalLoginOut from '../../images/log-out.png';
const images = require.context('../../images', true);

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

    const logOut = (e)=> {
      console.log('I was clicked');
      localStorage.removeItem('StadiaUser');
      window.location.reload();
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
        let picProfile = images('./' + props.loggedUser.userPicture);
        bodyConfig.text = <div className='currentUser'>
          <img src={picProfile.default} alt='user' className='picProfile' />
          <p className='username'>{props.loggedUser.username}</p>
          <p className='username'>{props.loggedUser.email}</p>
          <hr />
          <div className='row option'>
            <div className='col-md-2 col-sm-2'>
              <div className='icons'>
                <img src={ModalLoginSettings} alt='settings' />
              </div>
            </div>
            <div className='col-md-10 col-sm-10'>
              <div className='optionText'>
                Stadia Settings
              </div>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-md-2 col-sm-2'>
              <div className='icons'>
                <img src={ModalLoginHelp} alt='settings' />
              </div>
            </div>
            <div className='col-md-10 col-sm-10'>
              <div className='optionText'>
                Stadia Help
              </div>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-md-2 col-sm-2'>
              <div className='icons'>
                <img src={ModalLoginFeedback} alt='settings' />
              </div>
            </div>
            <div className='col-md-10 col-sm-10'>
              <div className='optionText'>
                Stadia Feedback
              </div>
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-md-2 col-sm-2'>
              <div className='icons'>
                <img src={ModalLoginOut} alt='settings' />
              </div>
            </div>
            <div className='col-md-10 col-sm-10' onClick={logOut}>
              <div className='optionText'>
                Sign out
              </div>
            </div>
          </div>
        </div>
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
          { props.loginError !== null ? <Modal.Footer>
            <div className='modalError'>
              {props.loginError}
            </div> 
          </Modal.Footer> : null }
        </Modal>
      </>
    );
}

export default StadiaModal;

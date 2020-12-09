import React, { useState } from 'react';
import { Navbar, Nav, Image, Form, FormControl, Button } from 'react-bootstrap';
import StadiaLogo from '../../images/stadia_logo_white.png';
import './NavBar.css';

import NavBarContact from './NavBarContact';
import NavBarController from './NavBarController';
import NavBarPeople from './NavBarPeople';

const NavBar = (props) => {

    let [isActive, setIsActive] = useState('active');

    const goHome = () => {
        window.location = '/public/index.html';
    };

    const changeState = (e)=> {
        isActive ? setIsActive('') : setIsActive('active')
    };


    return(
        <Navbar bg="dark" className='NavBar' expand="lg" sticky="top" variant="pills">
        <Navbar.Brand>
            <Image src={ StadiaLogo } alt='Stadia' className='StadiaLogo' onClick={ goHome } />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className={ isActive } onClick={ changeState }>Home</Nav.Link>
            <Nav.Link href="#link" onClick={ changeState }>Store</Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className='buttonNav'>Search</Button> */}
            <NavBarContact />
            <NavBarController />
            <NavBarPeople />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBar;
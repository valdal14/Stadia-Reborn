import React, { useState } from 'react';
import { Navbar, Nav, Image, Form, Button } from 'react-bootstrap';
import StadiaLogo from '../../images/Google_Stadia-Landscape-Logo.wine.png'; 
import './NavBarDefault.css';

const NavBarDefault = (props)=> {
    
    const goHome = () => {
        window.location = '/public/index.html';
    };

    return(
        <div className='container'>
            <Navbar bg="light" className='NavBarAnonim' expand="lg" sticky="top" variant="pills">
                <Navbar.Brand>
                    <Image src={ StadiaLogo } alt='Stadia' className='StadiaLogoAnonim' onClick={ goHome } />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Stadia</Nav.Link>
                    <Nav.Link href="#store">Games</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-success" className='buttonNav' onClick={props.changeModalState}>Try Stadia</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBarDefault;
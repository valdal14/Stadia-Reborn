import React, { useState } from 'react';
import { Navbar, Nav, Image, Form, FormControl, Button } from 'react-bootstrap';
import StadiaLogo from '../../images/stadia_logo_white.png';
import ContactsImage from '../../images/envelope.png';
import ControllerImage from '../../images/games.png';
import FriendsImage from '../../images/group.png';
// import UserImage from '../../images/user.png';
import './NavBar.css';
import NavBarItem from './NavBarItem';

const images = require.context('../../images', true);

const NavBar = (props) => {

    let [isActive, setIsActive] = useState('active');
    let [page, setPage] = useState('Home');
    let picProfile = images('./' + props.loggedUser.userPicture);
    const goHome = () => {
        window.location = '/public/index.html';
    };

    const changeState = (e)=> {
        setPage(e.target.text);
        isActive ? setIsActive('') : setIsActive('active')
        props.changePageRender(e);
    };

    const requestModal = (e)=>{
      props.changeModalState(e);  
    }

    const navbarMenuItems = [
      {
        img: <img src={ContactsImage} alt='contact' onClick={requestModal} id='contact' width="35" height="35" />
      },
      {
        img: <img src={ControllerImage} alt='play' onClick={requestModal} id='controller' width="40" height="40" />
      },
      {
        img: <img src={FriendsImage} alt='friends' onClick={requestModal} id='friends' width="35" height="35" />
      },
      {
        img: <img src={picProfile.default} alt='user' onClick={requestModal} id='user' width="30" height="30" />
        //img: <img src={UserImage} alt='user' onClick={requestModal} id='user' width="30" height="30" />
      }
    ]

    return(
        <Navbar bg="dark" className='NavBar' expand="lg" sticky="top" variant="pills">
        <Navbar.Brand>
            <Image src={ StadiaLogo } alt='Stadia' className='StadiaLogo' onClick={ goHome } />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className={ isActive } onClick={ changeState }>Home</Nav.Link>
            <Nav.Link href="#store" onClick={ changeState }>Store</Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className='buttonNav'>Search</Button> */}
            <NavBarItem svgImage={navbarMenuItems[0].img} />
            <NavBarItem svgImage={navbarMenuItems[1].img} />
            <NavBarItem svgImage={navbarMenuItems[2].img} />
            <NavBarItem svgImage={navbarMenuItems[3].img} />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBar;
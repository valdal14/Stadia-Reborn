import { Navbar, Nav, Image, Form, FormControl, Button } from 'react-bootstrap';
import StadiaLogo from '../../images/stadia_logo_white.png';
import './NavBar.css';

const NavBar = (props) => {

    const goHome = () => {
        window.location = '/public/index.html';
    };

    const loadCssActiveClass = ()=> {
        document.querySelectorAll('.nav-link')[0].classList.add('active');
    };

    return(
        <Navbar bg="dark" className='NavBar' expand="lg" sticky="top" variant="pills" onLoad={ loadCssActiveClass }>
        <Navbar.Brand>
            <Image src={ StadiaLogo } alt='Stadia' className='StadiaLogo' onClick={ goHome } />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className='btn btn-warning'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBar;
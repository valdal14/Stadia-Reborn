import React, { useState, useEffect } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Logged
import NavBar from './components/NavBar/NavBar';
import StadiaModal from './components/Modal/StadiaModal';
import HomePage from './components/Pages/Home/Home';
import Store from './components/Pages/Store/Store';

// Anonymous
import NavBarDefault from './components/NavBar/NavBarDefault';
import Banner from './components/Pages/Anonymous/Banner';

function App(props) {

  const [showModal, setShowModal] = useState(false);
  const [modalConfigOption, setModalConfigOption] = useState('default');
  const [pageToShow, setPageToShow]= useState('Home');
  const [isUserLogged, setIsUserLogged] = useState(false);

  const closeModal = ()=> {
    setShowModal(false);
  };

  const configureModal = (e)=>{
    const value = e.target.id;
    if(value === 'contact' || value === 'controller' || value === 'friends' || value === 'user'){
      setShowModal(true);
      setModalConfigOption(value);
    }
  }

  const openLoginModal = ()=>{
    setShowModal(true);
    setModalConfigOption('login');
  }

  const pageToRender = (e)=>{
    console.log(e.target.text);
    setPageToShow(e.target.text);
  };

  const login = (email, pwd)=>{
    // console.log(e);
    // e.preventDefault();
    console.log(email);
    console.log(pwd);
    setIsUserLogged(true);
    setShowModal(false);
  }

  useEffect(() => {
    if(isUserLogged) {
      document.querySelector('#body').style.backgroundColor = '#202124';
    } else {
      document.querySelector('#body').style.backgroundColor = 'white';
    }
  });

  if(isUserLogged) {
    return (
      <div className="App">
        <NavBar changeModalState={ configureModal } changePageRender={pageToRender} />
        { modalConfigOption !== 'default' && showModal ?  <StadiaModal show={showModal} modalConfiguration={modalConfigOption} handleClose={ closeModal } /> : null}
        { pageToShow === 'Home' ? <HomePage /> : <Store />}
      </div>
    );
  } else {
    return(
      <div className="App">
        <NavBarDefault changeModalState={ openLoginModal } />
        <Banner changeModalState={ openLoginModal } />
        { modalConfigOption !== 'default' && showModal ?  <StadiaModal performLogin={login} show={showModal} modalConfiguration={modalConfigOption} handleClose={ closeModal } /> : null}
        <h1>Welcome to Stadia</h1>
      </div>
    )
  }
}

export default App;

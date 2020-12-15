import React, { useState, useEffect } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import StadiaModal from './components/Modal/StadiaModal';
import HomePage from './components/Pages/Home/Home';
import Store from './components/Pages/Store/Store';

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

  const pageToRender = (e)=>{
    console.log(e.target.text);
    setPageToShow(e.target.text);
  };

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
        <h1>Welcome to Stadia</h1>
      </div>
    )
  }
}

export default App;

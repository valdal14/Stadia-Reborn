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
  const [modalError, setModalError] = useState(null);
  const [pageToShow, setPageToShow]= useState('Home');
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  const login = async (username, password)=>{

    setShowModal(false);

    const endpoint = process.env.REACT_APP_DEV + '/login';

    const data = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(response => {
      return response.json();
    }).then(data => {

      if(data.error){
        setModalError(data.error);
        setShowModal(true);
        return;
      } else {
        return data.response;
      }

    }).catch(error => {
      console.log(error);
      setModalError(error);
      setShowModal(true);
      return;
    })

    // login success
    if(data){
      // save user data
      setCurrentUser({
        username: data[0].username,
        userPicture: data[0].userPicture,
        promo: data[0].promo,
        isProUser: data[0].isProUser
      });
      // render the logged in interface
      setIsUserLogged(true);
    } else {
      setModalError('Invalid user credentials, please try again!!!');
      setShowModal(true);
    }

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
        <NavBar changeModalState={ configureModal } changePageRender={pageToRender} loggedUser={currentUser} />
        { modalConfigOption !== 'default' && showModal ?  <StadiaModal loggedUser={currentUser} show={showModal} modalConfiguration={modalConfigOption} handleClose={ closeModal } /> : null}
        { pageToShow === 'Home' ? <HomePage /> : <Store />}
      </div>
    );
  } else {
    return(
      <div className="App">
        <NavBarDefault changeModalState={ openLoginModal } />
        <Banner changeModalState={ openLoginModal } />
        { modalConfigOption !== 'default' && showModal ?  <StadiaModal loginError={modalError} performLogin={login} show={showModal} modalConfiguration={modalConfigOption} handleClose={ closeModal } /> : null}
        <h1>Welcome to Stadia</h1>
      </div>
    )
  }
}

export default App;

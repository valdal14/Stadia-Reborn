import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import StadiaModal from './components/Modal/StadiaModal';

function App(props) {

  const [showModal, setShowModal] = useState(false);
  const [modalConfigOption, setModalConfigOption] = useState('default');

  const closeModal = ()=> {
    setShowModal(false);
  };

  const configureModal = (value)=>{
    setShowModal(true);
    setModalConfigOption(value);
    console.log(modalConfigOption);
  }

  return (
    <div className="App">
      <NavBar changeModalState={ (value)=> { configureModal(value)} }/>
      <StadiaModal show={showModal} modalConfiguration={modalConfigOption} handleClose={ closeModal } />
    </div>
  );
}

export default App;

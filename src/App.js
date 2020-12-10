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
    if(value === 'contacts' || value === 'controller' || value === 'people'){
      setShowModal(true);
      setModalConfigOption(value);
    }
  }

  return (
    <div className="App">
      <NavBar changeModalState={ (value)=> { configureModal(value)} }/>
      { modalConfigOption !== 'default' && showModal ?  <StadiaModal show={showModal} modalConfiguration={modalConfigOption} handleClose={ closeModal } /> : null}
     
    </div>
  );
}

export default App;

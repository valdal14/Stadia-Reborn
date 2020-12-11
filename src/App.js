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

  const configureModal = (e)=>{

    const value = e.target.id;
    if(value === 'contact' || value === 'controller' || value === 'friends'){
      setShowModal(true);
      setModalConfigOption(value);
    }
  }

  return (
    <div className="App">
      <NavBar changeModalState={ configureModal }/>
      { modalConfigOption !== 'default' && showModal ?  <StadiaModal show={showModal} modalConfiguration={modalConfigOption} handleClose={ closeModal } /> : null}
     
    </div>
  );
}

export default App;

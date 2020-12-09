import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import StadiaModal from './components/Modal/StadiaModal';

function App() {

  const [showModal, setShowModal] = useState(true);

  const closeModal = ()=> {
    setShowModal(false);
  };

  return (
    <div className="App">
      <NavBar />
      <StadiaModal show={showModal} handleClose={ closeModal } />
    </div>
  );
}

export default App;

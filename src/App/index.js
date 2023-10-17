import React, { useState } from 'react';
import { NavBar } from '../NavBar';
import { FormIndices } from '../pages/form';
import { Home } from '../pages';
import { Steps } from '../pages/renderSteps';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { IndexContext } from '../IndexContext';
import { Modal } from '../Modal';
import { Message } from '../Message';

import './App.css';

function App(){
  const {
    openModal,
  } = React.useContext(IndexContext);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parametros" element={<FormIndices />} />
          <Route
            path="/indices"
            element={<Steps />}
          />
        </Routes>
      </Router>

      {openModal && (
        <Modal>
          <Message />
        </Modal>
      )}
    </>
  );
}

export default App;

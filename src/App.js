import React, { useState } from 'react';
import Modal from 'react-modal';
import Navbar from "./components/Navbar/Navbar";
import { MenuItems } from './components/Navbar/MenuItems';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <Navbar navItems={MenuItems} openModal={() => setModalIsOpen(true)}/>
      <Modal isOpen={modalIsOpen}>
        <h1>Login</h1>
        <LoginForm closeModal={() => setModalIsOpen(false)}/>
      </Modal>
    </div>
  );
}

export default App;

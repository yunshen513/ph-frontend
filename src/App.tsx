import React, { useState } from "react";
import Modal from "react-modal";
import { Navbar } from "./components/Navbar/Navbar";
import { MenuItems } from "./components/Navbar/MenuItems";
import { LoginForm } from "./components/LoginForm";
import { DataReceiver } from "./components/DataReceiver";
import "./App.css";

export const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <Navbar navItems={MenuItems} openModal={() => setModalIsOpen(true)} />
      <DataReceiver />
      <Modal isOpen={modalIsOpen}>
        <h1>Login</h1>
        <LoginForm closeModal={() => setModalIsOpen(false)} />
      </Modal>
    </div>
  );
};

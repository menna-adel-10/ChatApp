import { useState } from 'react';
import './App.css';
import DrawerAppBar from './components/navBar/NavBar';
// import Chat from './components/users/UsersChat';
import MyChats from './components/users/UsersChat';
import Homepage from './pages/Home';
// import ChatPage from './components/users/test';
// import Users from './components/users/UsersChat'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
     <div className="App">
      <Homepage />
    </div>
  )
}

export default App

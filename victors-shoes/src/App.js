import React from 'react';
import './App.css';
import Vshoes from './Components/Vshoes'
import Nav from './Components/Nav';
import Slist from './Components/Slist';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import Carousel from './Components/Carousel';

function App() {
  return (
    <>
    <Nav/>
    <Vshoes/>
    <Carousel/>
    <Slist/>

    <Modal/>
    <Footer/>
    </>
  );
}

export default App;
import React from 'react';
import './App.css';
import Vshoes from './Components/Vshoes'
import Nav from './Components/Nav';
import Slist from './Components/Slist';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';

function App() {
  return (
    <>
    <Nav/>
    <Vshoes/>
    <Carousel/>
    <Slist/>
    <Footer/>
    </>
  );
}

export default App;
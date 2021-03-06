import React from 'react';
import './App.css';
import Vshoes from './Components/Vshoes'
import Nav from './Components/Nav';
import Slist from './Components/Slist';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Popup from './Components/Popup';
import CardCarousel from './Components/CardCarousel';

function App() {
  return (
    <>
    <Nav/>
    <Vshoes/>
    <Popup/>
    <Carousel/>
    <Slist/>
    <CardCarousel/>
    <Footer/>
    </>
  );
}

export default App;
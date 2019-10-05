import React from 'react';
// import Nav from './Nav.css'
// import { render } from 'react-dom'
// import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
import IosWalk from 'react-ionicons/lib/IosWalk'


//import Nav from './Nav.css'
import './Nav.css';

function Navbar () {
    return(
<>
<nav className="navbar navbar-expand-lg navbar-dark navBarEntire">
  <a className="navbar-brand" href="/"><img className="shoeIcon" src="https://static.thenounproject.com/png/783354-200.png" alt="" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" target="_blank" rel="noopener noreferrer" href="http://ebay.us/59zo54?cmpnId=5338273189">Sale</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="//" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="//">Summer/Spring</a>
          <a className="dropdown-item" href="//">Winter/Fall</a>
        </div>
      </li>
      <li className="nav-item">
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <IosWalk shake={true} onClick={() => alert('If you meet a guy named Victor Mori, steal his shoes and throw them in the bottom of the lake, or nearest active volcano, because fuck those metamorphic garbage kicks!"')} fontSize="30px" color="#ffff" />
      <input className="form-control mr-sm-2" type="search" placeholder="Inventory" aria-label="Search"/>
      <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</>

    )
}
    export default Navbar;


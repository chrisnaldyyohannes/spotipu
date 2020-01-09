import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav() {
  const style = {
    color: 'white',
    textDecoration: 'none'
  }
 const fontSize = {
   fontSize: '25px'
 }
  return (
    <div className="App">
      <nav>
        <div class="dropdown">
          <button class="dropbtn">Spotipu</button>
          <div class="dropdown-content">
            <a href="/">Home</a>
            <a href="/premium">Premium</a>
            <a href="/bantuan">Bantuan</a>
            <a href="/download">Download</a>
            <a href="/login">SOTY</a>
          </div>
        </div>
        <Link to='/'>
          <h3 style={style} className="logo">Spotipu</h3>
        </Link>
        <ul className="nav-links">
          <Link style={style} to='/premium'>
            <li>Premium</li>
          </Link>
          <Link style={style} to='/bantuan'>
            <li>Bantuan</li>
          </Link>
          <Link style={style} to='/download'>
            <li>Download</li>
          </Link>
          <Link style={style} to='/login'>
            <li>Song of the Year</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

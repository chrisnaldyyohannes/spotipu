import React from 'react';
import './App.css';
import Nav from './Nav';
import Premium from './Premium';
import Bantuan from './Bantuan';
import Download from './Download';
import Login from './SONG';
import Homepage from './Homepage';
import SONG from './SONG';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/premium" component={Premium}></Route>
          <Route path="/bantuan" component={Bantuan}></Route>
          <Route path="/download" component={Download}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/soty" component={SONG}></Route>
        </Switch>
      </div>
    </Router>

  );
}
const Home = () =>
  (
    <div>
      <div className="jumbotron-container">
        <div className="content">
          <h1 className="jumbotron-content">Coba Premium gratis <br></br>selama 12 bulan</h1> 
          <p className="desc-content">Putar ribuan lagu tanpa iklan secara offline.</p>
          <input type="submit" className="button-content" value="LIHAT PAKET"></input>
        </div>
      </div>

      <div className="content-2">
        <h1 className="title">Paling Banyak didengar</h1>
        <p className="subtitle">Mulai mendengarkan rilis terbaik.</p>
        <input type="submit" className="button-content2" value="Buka pemutar web"></input>
        <div className="card-container">
          <div class="card">
            <img src="../lany.jpg" alt="Avatar" className="artwork"></img>
            <div className="container">

            </div>

          </div>
          <div class="card">
            <img src="../lauv.jpg" alt="Avatar" className="artwork"></img>
            <div className="container">

            </div>

          </div>
          <div class="card">
            <img src="../honne.jpeg" alt="Avatar" className="artwork"></img>
            <div className="container">

            </div>

          </div>
          
        </div>

         <div className="card-container">
          <div class="card">
            <img src="../cihgar.jpg" alt="Avatar" className="artwork"></img>
            <div className="container">

            </div>

          </div>
          <div class="card">
            <img src="../maroon5.jpg" alt="Avatar" className="artwork"></img>
            <div className="container">

            </div>

          </div>
          <div class="card">
            <img src="../sunrai.jpg" alt="Avatar" className="artwork"></img>
            <div className="container">

            </div>

          </div>
          
        </div>
       

      </div>
      <div className="content-3">
          <h3 className="small-title">Kilas Balik 2019.</h3>
          <h1 className="jumbotron-desc">Lihat Kebiasaanmu<br></br> Mendengarkan Lagu di<br></br> 2019.</h1>
          <p className="small-desc">Cari tahu artis,genre favorit kamu dan lainnya!</p>
          <input type="submit" className="button-content3" value="Buka Kilas Balik"></input>
        </div>
        <div className="footer-content">
           <h1 className="footer-title">&copy; 2019 Spotipu</h1>
        </div>
    </div>
  );
export default App;

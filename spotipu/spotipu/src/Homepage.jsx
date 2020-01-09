import React from 'react';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    
    <div>
    <div className="jumbotron-container">
      <div className="content">
        <h1 className="jumbotron-content">Coba Premium gratis <br></br>selama 12 bulan</h1>
        <p className="desc-content">Putar ribuan lagu tanpa iklan secara offline.</p>
        <input type="submit" className="button-content" value="Lihat paket"></input>
      </div>
    </div>

    <div className="content-2">
      <h1 className="title">Mencari Musik?</h1>
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
  </div>
    

  );
}

export default App;

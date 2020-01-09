import React from 'react';
import './premium.css';
import Nav from './Nav';
function Premium() {
  return (
    <div className="App">
      <Nav />
      <div className="jumbotron-container">
        <div className="content">
         
          <h1 className="jumbotron-content">Coba Premium gratis <br></br>selama 12 bulan</h1>
          <p className="desc-content">Putar ribuan lagu tanpa iklan secara offline.</p>
          <input type="submit" className="button-content" value="Lihat paket"></input>
        </div>

        {/* <div className="content">
          <h1 className="jumbotron-content">Coba Premium gratis <br></br>selama 12 bulan</h1>
          <p className="desc-content">Putar ribuan lagu tanpa iklan secara offline.</p>
          <input type="submit" className="button-content" value="Lihat paket"></input>
        </div>

        <div className="content">
          <h1 className="jumbotron-content">Coba Premium gratis <br></br>selama 12 bulan</h1>
          <p className="desc-content">Putar ribuan lagu tanpa iklan secara offline.</p>
          <input type="submit" className="button-content" value="Lihat paket"></input>
        </div> */}

      </div>
      <div className="content-2">
        <h1 className="title">Mengapa beralih ke Premium?</h1>
        
       <div className="card-premium">
        <div className="content-p">
          <h1 className="premium-content">Dengarkan musik secara offline </h1>
          <p className="premium-desc-content">Walaupun tidak ada akses 
          internet kamu bisa 
          menikmati musik secara offline.</p>
        </div>
        <div className="content-p">
          <h1 className="premium-content">Bebas iklan</h1>
          <p className="premium-desc-content">Sedang asik mendengarkan lagu,
          kalian bebas dari iklan.</p>
        </div>
        <div className="content-p">
          <h1 className="premium-content">Koleksi lagu terbaru </h1>
          <p className="premium-desc-content">Dapat menikmati lagu-lagu terbaru.</p>
        </div>
      </div>
      </div>
      <div className="footer-content">
           <h1 className="footer-title">&copy; 2019 Spotipu</h1>
        </div>
    </div>
  );
}

export default Premium;

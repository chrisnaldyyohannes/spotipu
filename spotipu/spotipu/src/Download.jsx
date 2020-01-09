import React from 'react';
import './download.css';

function Download() {
  return (
    <div className="App">
      <div className="jumbotron-container-Download">

        <div className="MonitorPic" >
          <img src="../monitor.png" className="Monitor" ></img>
        </div>

        <h1 className="jumbotron-content-Download">Klik file pemasangan untuk menyelesaikan.</h1>
        <p className="desc-content-Download">Jika download tidak dimulai,<a className="linkDownload" href="download">Coba lagi</a>. <br></br>
          Ada masalah?<a className="linkDownload" href=""> Kunjungi Microsoft Store</a> untuk mendownload.</p>




      </div>

      <div className="jumbotron-container-Download2">
        <h1 className="jumbotron-content-Download2">Bawa juga musik kamu ke HP dan tablet.</h1>
        <p className="desc-content-Download2">Mendengarkan di HP atau tablet kamu gratis, mudah, dan menyenangkan.
          </p>

        <p className="desc-content-Download2">Satu akun, dengarkan di mana saja.
          </p>
        <p className="desc-content-Download2">SELULER-KOMPUTER-TABLET-MOBIL-PLAYSTATION®-XBOX-TV-SPEAKER-PEMUTAR WEB.
          </p>





      </div>


      <img src="../playstore.png" className="playstore" ></img>





    </div>


  );
}

export default Download;

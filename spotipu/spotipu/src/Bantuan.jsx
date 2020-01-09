import React from 'react';
import './bantuan.css';
import Nav from './Nav';

function Bantuan() {
  return (
    <div className="App">
    <Nav />
    <div className="jumbotron-container">
      <h2 className="faq">FAQ Section</h2>
      <div class="search-container">
       
        <form >
          <input type="text" placeholder="Search.." className="searchbar"></input>

        </form>
      </div>
    <div className="container">

      <div className="acc">
         <h3>Bagaimana menjadi member Spotipu premium ?</h3>
         <div className="content-faq">
           <div className="content-inner">
                <p>Cara nya cukup mudah dengan mendaftar 
                  langsung melalui akun mu 
                  dengan mengklik join premium member.
                </p>
           </div>
        </div>
      </div>

      <div className="acc">
         <h3>Apa keunggulan yang dapat dinikmati oleh member Spotipu premium  ?</h3>
         <div className="content-faq">
           <div className="content-inner">
                <p>Keunggulan nya anda bisa anda dapatkan yaitu: menikmati lagu nya 
                  tanpa batasan ,terhindar dari iklan,dapat mendengarkan lagu secara offline,
                  dan dapat menikmati semua lagu yang ada di Spotipu</p>
           </div>
        </div>
      </div>

      <div className="acc">
         <h3>Apakah pengguna baru bisa menikmati lagu yang VIP? </h3>
         <div className="content-faq">
           <div className="content-inner">
                <p>Tentunya untuk pengguna baru kita memberikan akses untuk menikmati lagu-lagu yang VIP,
                  tetapi akan ada batasan waktu nya yang biasanya kita berikan free 3 hari untuk dapat mengakses
                  semua fasilitas Spotipu,setelah itu jika ingin mengakses lagu VIP dengan bebas dan leluasa
                  harus menjadi member premium.
                </p>
           </div>
        </div>
      </div>

      <div className="acc">
         <h3>Metode apa saja untuk top-up premium ?</h3>
         <div className="content-faq">
           <div className="content-inner">
                <p>Kami menyediakan beberapa metode 
                  kalian bisa menggunakan OVO,GoPay,debit BCA untuk melakukan 
                  top-up untuk akun premium kalian.</p>
           </div>
        </div>
      </div>
      </div>
    </div>
    
    <div className="footer-content">
         <h1 className="footer-title">&copy; 2019 Spotipu</h1>
      </div>
  </div>

  
  );
  
}

export default Bantuan;

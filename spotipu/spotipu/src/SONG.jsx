import React from 'react';
import './SONG.css';

function Login() {
  return (

    <div className="audio">
      <h1 className="jumbo">Top Song of The Year</h1>
      <div className="container-left">
        <div className="audio-container">
          <div className="audio-content">
            <p className="artist">Leedle</p>
            <audio id="leedle" controls src="leedle.mp3" ></audio>
          </div>
        </div>

        <div className="audio-container">
          <div className="audio-content">
            <p className="artist">Grand Theft Auto</p>
            <audio id="GTA" controls src="GTA.mp3" ></audio>
          </div>
        </div>

        <div className="audio-container">
          <div className="audio-content">
            <p className="artist">DeadMaus</p>
            <audio id="Dead" controls src="Already Dead.mp3" ></audio>
          </div>
        </div>

        <div className="audio-container">
          <div className="audio-content">
            <p className="artist">BinusMusic</p>
            <audio id="Binus" controls src="Binus.mp3"></audio>
          </div>
        </div>

        <div className="audio-container">
          <div className="audio-content">
            <p className="artist">Dragon</p>
            <audio id="Dragon" controls src="Dragon.mp3"></audio>
          </div>
        </div>

      </div>

      
    </div>



  );
}

export default Login;

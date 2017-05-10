import React from 'react';
import './bottomBar.scss';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="img-wrap">
      </div>

      <div className="info">
        <h5>DARK HORSE</h5>
        <p>Prism - Katy Perry</p>
      </div>
      <div className="controls">
        <img src={require('./img/Previous.png')} role="button"/>
        <img src={require('./img/Pause.png')} role="button"/>
        <img src={require('./img/Next.png')} role="button"/>
      </div>
      <div className="seek-slider">
        <span>3:55</span>
        <input type="range" name="seek" id="points" min="0" max="100" />
        <span>5:32</span>
      </div>
      <div className="repeat-shuffle">
        <img src={require('./img/Repeat.png')} role="button"/>
        <img src={require('./img/Shuffle.png')} role="button"/>
      </div>
      <div className="volume-slider">
        <img src={require('./img/Audio.png')} />
        <input type="range" name="volume" id="volume" min="0" max="100" />
      </div>
    </div>
  );
}

export default BottomBar;
import React from 'react';
import './bottomBar.scss';
import ReactTooltip from 'react-tooltip';

const BottomBar = ({
  artworkUrl,
  artist,
  title
}) => {
  return (
    <div className="bottom-bar">
      <div className="img-wrap">
        <img src={artworkUrl} />
      </div>

      <div className="info">
        <h5 data-tip={title}>{title}</h5>
        <p data-tip={artist}>{artist}</p>
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
      <ReactTooltip place="top" effect="float" className="tooltip"/>
    </div>
  );
}

export default BottomBar;
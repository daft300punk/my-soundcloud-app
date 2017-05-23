import React from 'react';
import './bottomBar.scss';
import ReactTooltip from 'react-tooltip';
import getTimeString from '../../util/getTimeString';
import { playStates } from '../../constants/PlayState';

const BottomBar = ({
  artworkUrl,
  artist,
  title,
  currentTimeInSec,
  endTimeInSec,
  playState
}) => {
  let playOrPauseButton;
  if(playState === playStates.PAUSED)
    playOrPauseButton = <img src={require('./img/play.png')} role="button"/>;
  else if(playState === playStates.PLAYING)
    playOrPauseButton = <img src={require('./img/pause.png')} role="button"/>;

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
        <img src={require('./img/backward.png')} role="button"/>
        {playOrPauseButton}
        <img src={require('./img/forward.png')} role="button"/>
      </div>
      <div className="seek-slider">
        <span>{getTimeString(currentTimeInSec)}</span>
        <input type="range" name="seek" id="points" min={0} max={endTimeInSec} value={currentTimeInSec}/>
        <span>{getTimeString(endTimeInSec)}</span>
      </div>
      <div className="repeat-shuffle">
        <img src={require('./img/repeat.png')} role="button"/>
        <img src={require('./img/shuffle.png')} role="button"/>
      </div>
      <div className="volume-slider">
        <img src={require('./img/sound.png')} />
        <input type="range" name="volume" id="volume" min="0" max="100" />
      </div>
      <ReactTooltip place="top" effect="float" className="tooltip"/>
    </div>
  );
}

export default BottomBar;

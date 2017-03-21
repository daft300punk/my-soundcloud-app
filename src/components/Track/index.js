import React, { PropTypes } from 'react';
import './track.css';
import { playStates } from '../../constants/PlayState';

const Track = ({
  artwork_url,
  title,
  id,
  startPlay,
  playState,
  playingTrackId,
  pause }) => {
  
  let button;

  const styleImg = {
    width: '64px',
    height: '64px',
  }
  //Only show pause on the track that is currently playing
  if (playState === playStates.PLAYING && playingTrackId === id) {
    button = <div className="play-track show" onClick={() => { pause() }}>
               <img style={styleImg} src={require('./pause_icon.png')} alt="pause" />
             </div>
  } else {
    button = <div className="play-track"  onClick={() => { startPlay(id) }}>
               <img style={styleImg} src={require('./play_icon.png')} alt="pause" />
             </div>;
  }

  return (
    <div className="track">
      <div className="track-artwork-wrapper">
        <img src={artwork_url} alt={title}></img>
        <div className="artwork-overlay"></div>
        {button}
      </div>
      {/*<div className="track-detail">
        {title}
      </div>*/}
    </div>
  )
};

Track.propTypes = {
  artwork_url: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  startPlay: PropTypes.func.isRequired,
  playingTrackId: PropTypes.number,
  pause: PropTypes.func.isRequired,
};

export default Track;
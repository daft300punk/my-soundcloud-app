import React, { PropTypes } from 'react';
import './track.scss';
import { playStates } from '../../constants/PlayState';

const playIcon = require('./img/play_icon.png');
const pauseIcon = require('./img/pause_icon.png');

const Track = ({
  artworkUrl,
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
  };
  // Only show pause on the track that is currently playing
  if (playState === playStates.PLAYING && playingTrackId === id) {
    button = (
      <div className="play-track show" role="button" onClick={() => { pause(); }}>
        <img style={styleImg} src={pauseIcon} alt="pause" />
      </div>
    );
  } else {
    button = (
      <div className="play-track" role="button" onClick={() => { startPlay(id); }}>
        <img style={styleImg} src={playIcon} alt="pause" />
      </div>
    );
  }

  return (
    <div className="track">
      <div className="track-artwork-wrapper">
        <img src={artworkUrl} alt={title} />
        <div className="artwork-overlay" />
        {button}
      </div>
    </div>
  );
};

Track.propTypes = {
  artworkUrl: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  startPlay: PropTypes.func.isRequired,
  playingTrackId: PropTypes.number,
  pause: PropTypes.func.isRequired,
  playState: PropTypes.string,
};

export default Track;

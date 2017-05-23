//@flow
import React, { PropTypes } from 'react';
import './track.scss';
import { playStates } from '../../constants/PlayState';

const playIcon = require('./img/play_icon.png');
const pauseIcon = require('./img/pause_icon.png');

type TrackType = {
  artworkUrl: string,
  title: string,
  idOfClickedTrack: number,
  startPlay: Function,
  playState: string,
  playingTrackId: number,
  pause: Function
};

const Track = ({
  artworkUrl,
  title,
  idOfClickedTrack,
  startPlay,
  playState,
  playingTrackId,
  pause
}: TrackType) => {
  let button;
  const styleImg = {
    width: '64px',
    height: '64px',
  };
  // Only show pause on the track that is currently playing
  if (playState === playStates.PLAYING && playingTrackId === idOfClickedTrack) {
    button = (
      <div className="play-track show" role="button" onClick={() => { pause(); }}>
        <img style={styleImg} src={pauseIcon} alt="pause" />
      </div>
    );
  } else {
    button = (
      <div className="play-track" role="button" onClick={() => { startPlay(idOfClickedTrack); }}>
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
  idOfClickedTrack: PropTypes.number,
  startPlay: PropTypes.func.isRequired,
  playingTrackId: PropTypes.number,
  pause: PropTypes.func.isRequired,
  playState: PropTypes.string,
};

export default Track;

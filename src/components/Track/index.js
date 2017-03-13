import React, { PropTypes } from 'react';
import './track.css';

const Track = ({ artwork_url, title, id, startPlay }) => {
  console.log(typeof startPlay);
  return (
    <div className="track">
      <div className="track-artwork-wrapper">
        <img src={artwork_url} alt={title}></img>
        <div className="artwork-overlay"></div>
        <div className="play-track" onClick={() => {startPlay(id)}}>Play</div>
      </div>
      <div className="track-detail">
        {title}
      </div>
    </div>
  )
};

Track.propTypes = {
  artwork_url: PropTypes.string,
  title: PropTypes.string
};

export default Track;
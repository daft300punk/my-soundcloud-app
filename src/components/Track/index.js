import React, { PropTypes } from 'react';

const Track = ({ artwork_url, title }) => {
  return (
    <div className="track">
      <div className="track-artwork-wrapper">
        <img src={artwork_url} alt={title}></img>
      </div>
      <div className="track-detail">
        {title}
      </div>
    </div>
  )
};

Track.propTypes = {
  artwork_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Track;
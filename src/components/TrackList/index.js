import React, { PropTypes } from 'react';
import Track from '../Track';

const TrackList = ({ tracks }) => {
  return (
    <div className="track-list-wrap">
      {
        tracks.map((track, i) => (
          <Track key={i} artwork_url={track.artwork_url} title={track.title} />
        ))
      }
    </div>
  )
}

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default TrackList;
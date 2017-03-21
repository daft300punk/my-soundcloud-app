import React, { PropTypes } from 'react';
import Track from '../Track';
import './trackList.css'

const TrackList = ({
  tracks,
  playState,
  startPlay,
  playingTrackId,
  pause}) => {
  return (
    <div className="track-list-wrap">
      {
        tracks.map((track, i) => (
          <Track
            key={i}
            artwork_url={track.artwork_url}
            title={track.title}
            id={i} startPlay={startPlay}
            playState={playState}
            playingTrackId={playingTrackId}
            pause={pause} />
        ))
      }
    </div>
  )
}

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  startPlay: PropTypes.func.isRequired,
  playState: PropTypes.string.isRequired,
  playingTrackId: PropTypes.number,
  pause: PropTypes.func.isRequired,
};

export default TrackList;
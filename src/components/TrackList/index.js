import React, { PropTypes } from 'react';
import Track from '../Track';
import './trackList.scss'

const TrackList = ({
  tracks,
  playState,
  startPlay,
  playingTrackId,
  pause}) => {

  //Hack to align last items to the grid by having dummy/empty elements
  const len = tracks.length;
  const dummyElemToAdd = (Math.floor((len - 3) / 5) + 1) * 5 - (len - 3);
  for (let i = 0; i <= dummyElemToAdd; i++) tracks.push({});


  return (
    <div className="track-list-wrap">
      {
        tracks.map((track, i) => (
          <Track
            key={i}
            artworkUrl={track.artworkUrl}
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
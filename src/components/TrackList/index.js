import React from 'react';
import Track from '../Track';
import './trackList.scss';
import PropTypes from 'prop-types';

const TrackList = ({
  tracks,
  playState,
  startPlay,
  playingTrackId,
  pause,
  onClickAddToPlaylist
}) => {
  //Hack to align last items to the grid by having dummy/empty elements
  const len = tracks.length;
  const dummyElemToAdd = (Math.floor((len - 3) / 5) + 1) * 5 - (len - 3);
  for (let i = 0; i <= dummyElemToAdd; i++) tracks.push({});


  return (
    <div className="track-list-wrap" id="tracklist">
      {
        tracks.map((track, i) => (
          <Track
            key={i}
            artworkUrl={track.artworkUrl}
            title={track.title}
            idOfClickedTrack={i} startPlay={startPlay}
            playState={playState}
            playingTrackId={playingTrackId}
            pause={pause}
            onClickAddToPlaylist={onClickAddToPlaylist}
          />
        ))
      }
    </div>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  startPlay: PropTypes.func.isRequired,
  playState: PropTypes.string.isRequired,
  playingTrackId: PropTypes.number,
  pause: PropTypes.func.isRequired,
  onClickAddToPlaylist: PropTypes.func.isRequired
};

export default TrackList;

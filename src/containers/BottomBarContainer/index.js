import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../../components/BottomBar';
import {
  trackPauseDispatch,
  trackPlayStartDispatch,
  updateTimeDispatch,
  updateVolumeDispatch
} from '../../actions/playerAction';
import PropTypes from 'prop-types';

const BottomBarContainer = ({
  artworkUrl,
  artist,
  title,
  currentTimeInSec,
  endTimeInSec,
  playState,
  playingTrackId,
  startPlay,
  pause,
  changeSongCurrentTime,
  volume,
  changeSongVolume
}) => (
  <BottomBar
    artworkUrl={artworkUrl}
    artist={artist}
    title={title}
    currentTimeInSec={currentTimeInSec}
    endTimeInSec={endTimeInSec}
    playState={playState}
    playingTrackId={playingTrackId}
    startPlay={startPlay}
    pause={pause}
    changeSongCurrentTime={changeSongCurrentTime}
    volume={volume}
    changeSongVolume={changeSongVolume}
  />
);

BottomBarContainer.propTypes = {
  artworkUrl: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentTimeInSec: PropTypes.number.isRequired,
  endTimeInSec: PropTypes.number.isRequired,
  playState: PropTypes.string.isRequired,
  playingTrackId: PropTypes.number.isRequired,
  startPlay: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  changeSongCurrentTime: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  changeSongVolume: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  let id = state.currentPlaying.playingTrackId,
    artworkUrl = state.trackList.items[id].artworkUrl;
  return {
    artworkUrl: artworkUrl || '',
    artist: state.trackList.items[id].artist || '',
    title: state.trackList.items[id].title || '',
    currentTimeInSec: state.currentPlaying.currentTimeInSec,
    endTimeInSec: state.currentPlaying.endTimeInSec,
    playState: state.currentPlaying.playState,
    playingTrackId: state.currentPlaying.playingTrackId,
    volume: state.currentPlaying.volume
  };
};

const mapDispatchToProps = (dispatch) => ({
  startPlay: (pos) => { dispatch(trackPlayStartDispatch(pos)); },
  pause: () => { dispatch(trackPauseDispatch()); },
  changeSongCurrentTime: (newTimeInSec) => { dispatch(updateTimeDispatch(newTimeInSec)); },
  changeSongVolume: (volume) => { dispatch(updateVolumeDispatch(volume)); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarContainer);

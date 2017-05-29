import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../../components/BottomBar';
import {
  trackPauseDispatch,
  trackPlayStartDispatch,
  updateTimeDispatch,
  updateVolumeDispatch
} from '../../actions/playerAction';

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

const mapStateToProps = (state) => {
  let id = state.currentPlaying.playingTrackId,
    artworkUrl = state.trackList.items[id].artworkUrl;
  let currPlayer = state.playerList.players[id];
  return {
    artworkUrl: artworkUrl || null,
    artist: state.trackList.items[id].artist,
    title: state.trackList.items[id].title,
    currentTimeInSec: state.currentPlaying.currentTimeInSec,
    endTimeInSec: state.currentPlaying.endTimeInSec,
    playState: state.currentPlaying.playState,
    playingTrackId: state.currentPlaying.playingTrackId,
    volume: state.currentPlaying.volume
  }
};

const mapDispatchToProps = (dispatch) => ({
  startPlay: (pos) => { dispatch(trackPlayStartDispatch(pos)); },
  pause: () => { dispatch(trackPauseDispatch()) },
  changeSongCurrentTime: (newTimeInSec) => { dispatch(updateTimeDispatch(newTimeInSec)) },
  changeSongVolume: (volume) => { dispatch(updateVolumeDispatch(volume)) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarContainer);

import React from 'react';
import { connect } from 'react-redux';
import TrackList from '../../components/TrackList';
import {
  trackPlayStartDispatch,
  trackPauseDispatch,
  playlist
} from '../../actions/playerAction';
import PropTypes from 'prop-types';

const TrackListContainer = ({
  tracks,
  startPlay,
  playState,
  playingTrackId,
  pause,
  onClickAddToPlaylist
}) => (
  <TrackList
    tracks={tracks}
    startPlay={startPlay}
    playState={playState}
    playingTrackId={playingTrackId}
    pause={pause}
    onClickAddToPlaylist={onClickAddToPlaylist}
  />
);

TrackListContainer.propTypes = {
  tracks: PropTypes.array.isRequired,
  startPlay: PropTypes.func.isRequired,
  playState: PropTypes.string.isRequired,
  playingTrackId: PropTypes.number.isRequired,
  pause: PropTypes.func.isRequired,
  onClickAddToPlaylist: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  tracks: state.trackList.items,
  playState: state.currentPlaying.playState,
  playingTrackId: state.currentPlaying.playingTrackId,
});

const mapDispatchToProps = (dispatch) => ({
  startPlay: (pos) => { dispatch(trackPlayStartDispatch(pos)); },
  pause: () => { dispatch(trackPauseDispatch()); },
  onClickAddToPlaylist: (id) => { dispatch(playlist(id)); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackListContainer);

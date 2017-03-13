import React from 'react';
import { connect } from 'react-redux';
import TrackList from '../../components/TrackList';
import { trackPlayStartDispatch } from '../../actions/currentPlayingAction';

const TrackListContainer = ({ tracks, startPlay }) => (
  <TrackList
    tracks={tracks} startPlay={startPlay}/>
);

const mapStateToProps = (state) => ({
  tracks: state.trackList.items
});

const mapDispatchToProps = (dispatch) => ({
  startPlay: (pos) => {dispatch(trackPlayStartDispatch(pos));}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackListContainer);
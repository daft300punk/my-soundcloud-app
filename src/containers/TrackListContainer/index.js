import React from 'react';
import { connect } from 'react-redux';
import TrackList from '../../components/TrackList';

const TrackListContainer = ({ tracks }) => (
  <TrackList
    tracks={tracks} />
);

const mapStateToProps = (state) => ({
  tracks: state.trackList.items
});

export default connect(
  mapStateToProps,
)(TrackListContainer);
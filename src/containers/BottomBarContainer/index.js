import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../../components/BottomBar';

const BottomBarContainer = ({
  artworkUrl,
  artist,
  title
}) => (
  <BottomBar 
    artworkUrl={artworkUrl}
    artist={artist}
    title={title}
  />
);

const mapStateToProps = (state) => {
  let id = state.currentPlaying.playingTrackId,
    artworkUrl = state.trackList.items[id].artworkUrl;
  return {
    artworkUrl: artworkUrl || null,
    artist: state.trackList.items[id].artist,
    title: state.trackList.items[id].title
  }
};

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarContainer);
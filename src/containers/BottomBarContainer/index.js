import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../../components/BottomBar';

const BottomBarContainer = ({
  artworkUrl,
  artist,
  title,
  currentTimeInSec,
  endTimeInSec
}) => (
  <BottomBar 
    artworkUrl={artworkUrl}
    artist={artist}
    title={title}
    currentTimeInSec={currentTimeInSec}
    endTimeInSec={endTimeInSec}
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
    endTimeInSec: state.currentPlaying.endTimeInSec
  }
};

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarContainer);
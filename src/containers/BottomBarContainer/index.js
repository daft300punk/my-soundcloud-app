import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../../components/BottomBar';

const BottomBarContainer = ({
  artworkUrl,
  artist,
  title,
  currentTime,
  endTime
}) => (
  <BottomBar 
    artworkUrl={artworkUrl}
    artist={artist}
    title={title}
    currentTime={currentTime}
    endTime={endTime}
  />
);

const mapStateToProps = (state) => {
  let id = state.currentPlaying.playingTrackId,
    artworkUrl = state.trackList.items[id].artworkUrl;
  let currPlayer = state.playerList.players[id];
  let currentTime = Math.floor(currPlayer.currentTime),
    endTime = Math.floor(currPlayer.duration);
  return {
    artworkUrl: artworkUrl || null,
    artist: state.trackList.items[id].artist,
    title: state.trackList.items[id].title,
    currenttime: currentTime,
    endTime: endTime
  }
};

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarContainer);
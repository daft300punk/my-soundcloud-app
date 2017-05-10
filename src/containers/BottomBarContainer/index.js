import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../../components/BottomBar';

const BottomBarContainer = ({artworkUrl}) => (
  <BottomBar 
    artworkUrl={artworkUrl}
  />
);

const mapStateToProps = (state) => {
  let id = state.currentPlaying.playingTrackId,
    artworkUrl = state.trackList.items[id].artworkUrl;
  return {
    artworkUrl: artworkUrl || null,
  }
};

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarContainer);
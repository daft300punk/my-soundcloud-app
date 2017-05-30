import React from 'react';
import { connect } from 'react-redux';
import RightSidebar from '../../components/RightSidebar';

const RightSidebarContainer = ({
  playlist,
  trackList
}) => (
  <RightSidebar 
    playlist={playlist}
    trackList={trackList}
  />
);

const mapStateToProps = (state) => ({
  playlist: state.playlist,
  trackList: state.trackList.items
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSidebarContainer);
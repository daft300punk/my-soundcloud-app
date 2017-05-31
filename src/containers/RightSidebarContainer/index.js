import React from 'react';
import { connect } from 'react-redux';
import RightSidebar from '../../components/RightSidebar';
import PropTypes from 'prop-types';

const RightSidebarContainer = ({
  playlist,
  trackList
}) => (
  <RightSidebar 
    playlist={playlist}
    trackList={trackList}
  />
);

RightSidebarContainer.propTypes = {
  playlist: PropTypes.array.isRequired,
  trackList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  playlist: state.playlist,
  trackList: state.trackList.items
});

export default connect(
  mapStateToProps
)(RightSidebarContainer);
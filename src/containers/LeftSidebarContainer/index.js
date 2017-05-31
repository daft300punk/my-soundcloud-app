import React from 'react';
import { connect } from 'react-redux';
import LeftSidebar from '../../components/LeftSidebar';

const LeftSidebarContainer = () => (
  <LeftSidebar />
);

export default connect(
)(LeftSidebarContainer);
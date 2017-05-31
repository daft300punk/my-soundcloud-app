import React from 'react';
import { connect } from 'react-redux';
import Topbar from '../../components/Topbar';

const TopbarContainer = () => (
  <Topbar />
);

export default connect(
)(TopbarContainer);
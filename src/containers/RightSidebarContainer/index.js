import React from 'react';
import { connect } from 'react-redux';
import RightSidebar from '../../components/RightSidebar';

const RightSidebarContainer = ({}) => (
  <RightSidebar />
);

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSidebarContainer);
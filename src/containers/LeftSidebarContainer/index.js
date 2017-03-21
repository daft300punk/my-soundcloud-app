import React from 'react';
import { connect } from 'react-redux';
import LeftSidebar from '../../components/LeftSidebar';

const LeftSidebarContainer = ({}) => (
  <LeftSidebar />
);

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebarContainer);
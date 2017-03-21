import React from 'react';
import { connect } from 'react-redux';
import Topbar from '../../components/Topbar';

const TopbarContainer = ({}) => (
  <Topbar />
);

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarContainer);
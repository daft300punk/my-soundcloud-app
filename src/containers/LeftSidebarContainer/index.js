import React from 'react';
import { connect } from 'react-redux';
import LeftSidebar from '../../components/LeftSidebar';
import PropTypes from 'prop-types';
import changeCategory from '../../actions/categoryAction';

const LeftSidebarContainer = ({
  changeCategory,
  kind,
  trackType
}) => {
  return (
    <LeftSidebar 
      changeCategory={changeCategory}
      kind={kind}
      trackType={trackType}
    />
  );
};

LeftSidebarContainer.propTypes = {
  changeCategory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  kind: state.category.kind,
  trackType: state.category.trackType
});

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (kind, genre, trackType) => dispatch(changeCategory(kind, genre, trackType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebarContainer);
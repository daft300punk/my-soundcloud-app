import React, { Component } from 'react';
import initializeSC from '../api/initializeSC';
import TrackListContainer from './TrackListContainer';
import LeftSidebarContainer from './LeftSidebarContainer';
import TopbarContainer from './TopbarContainer';
import RightSidebarContainer from './RightSidebarContainer';
import BottomBarContainer from './BottomBarContainer';
import fetchTop50Tracks from '../actions/getTop50Action';
import { connect } from 'react-redux';
import updateDimension from '../util/updateDimension';
import PropTypes from 'prop-types';

import './App.scss';

initializeSC();

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTop50();
    window.addEventListener('resize', () => {
      updateDimension();
    });
    updateDimension();
  }

  render() {
    const { isLoading } = this.props;
    const Loader = () => (
      <div className="h-loader">
        <div className="spinner loader-content">
          <div className="double-bounce1 loader"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    );
    return (
      <div className="app">
        <TopbarContainer />
        <div className="main-wrap">
          <LeftSidebarContainer />
          {
            isLoading ?
              <Loader />
              : <TrackListContainer />
          }
          <RightSidebarContainer />
        </div>
        <BottomBarContainer />
      </div>
    );
  }

}

App.propTypes = {
  fetchTop50: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  playState: state.currentPlaying.playState,
  isLoading: state.trackList.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchTop50: () => { dispatch(fetchTop50Tracks()); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

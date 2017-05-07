import React, { Component } from 'react';
import initializeSC from '../api/initializeSC';
import TrackListContainer from './TrackListContainer';
import LeftSidebarContainer from './LeftSidebarContainer';
import TopbarContainer from './TopbarContainer';
import RightSidebarContainer from './RightSidebarContainer';
import BottomBarContainer from './BottomBarContainer';
import fetchTop50Tracks from '../actions/getTop50Action';
import { connect } from 'react-redux';

import './App.scss';

initializeSC();

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTop50();
  }

  render() {
    return (
      <div className="app">
        <TopbarContainer />
        <div className="main-wrap">
          <LeftSidebarContainer />
          <TrackListContainer />
          <RightSidebarContainer />
        </div>
        <BottomBarContainer />
      </div>
    );
  }

}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchTop50: () => { dispatch(fetchTop50Tracks()); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

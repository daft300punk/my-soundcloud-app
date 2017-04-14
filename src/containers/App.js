import React from 'react';
import initializeSC from '../api/initializeSC';
import TrackListContainer from './TrackListContainer';
import LeftSidebarContainer from './LeftSidebarContainer';
import TopbarContainer from './TopbarContainer';
import RightSidebarContainer from './RightSidebarContainer'
import './App.scss';

initializeSC();

const App = function () {
  return (
    <div className="app">
      <TopbarContainer />
      <div className="main-wrap">
        <LeftSidebarContainer />
        <TrackListContainer />
        <RightSidebarContainer />
      </div>
    </div>
  );
};

export default App;
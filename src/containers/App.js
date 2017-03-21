import React from 'react';
import initializeSC from '../api/initializeSC';
import TrackListContainer from './TrackListContainer';
import LeftSidebarContainer from './LeftSidebarContainer';
import './App.css';

initializeSC();

const App = function () {
  return (
    <div className="app">
      <LeftSidebarContainer />
      <TrackListContainer />
    </div>
  );
};

export default App;